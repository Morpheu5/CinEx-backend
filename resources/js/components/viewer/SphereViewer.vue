<template>
    <div ref="viewer" class="h-dvh w-dvw" />
    <GalleryViewer ref="modal" />
</template>

<script setup lang="ts">
import {
    DoubleSide,
    LinearToneMapping,
    MathUtils,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    PlaneGeometry,
    Quaternion,
    Raycaster,
    Scene,
    SphereGeometry,
    SRGBColorSpace,
    TextureLoader,
    Vector2,
    Vector3,
    WebGLRenderer,
} from 'three'
import type { Object3D } from 'three'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { isDefined } from '@vueuse/core'
import GalleryViewer, { type GalleryImage } from './GalleryViewer.vue'
import type { GalleryViewerDto, NavigationAnchorViewerDto, PhotosphereViewerDto, PhotoViewerDto } from '@/types/viewer'
import { route } from 'ziggy-js'

type ViewerObject =
    | {
    kind: 'gallery';
    mesh: Mesh;
    gallery: GalleryViewerDto;
}
    | {
    kind: 'link';
    mesh: Mesh;
    anchor: NavigationAnchorViewerDto;
};

const props = defineProps<{
    photosphere: PhotosphereViewerDto;
}>();

const viewer = ref<HTMLElement | null>(null);
const modal = ref<InstanceType<typeof GalleryViewer> | null>(null);

const toPublicUrl = (path: string): string => {
    // If already absolute, keep it.
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('/')) return path;
    return `/${path}`;
};

const photosphereImageUrl = (photosphereId: number): string => {
    // Uses: Route::get('photosphere/{photosphere}/image', ...)->name('photosphere.image');
    return route('photosphere.image', { photosphere: photosphereId });
};

const photoImageUrl = (photoId: number): string => {
    // Uses: Route::get('photo/{photo}/image', ...)->name('photo.image');
    return route('photo.image', { photo: photoId });
};

const normalizeCollection = <T,>(v: unknown): T[] => {
    if (!v) return [];
    if (Array.isArray(v)) return v as T[];
    if (typeof v === 'object' && v && 'data' in (v as any) && Array.isArray((v as any).data)) return (v as any).data as T[];
    return [];
};

const galleries = computed(() => normalizeCollection<GalleryViewerDto>(props.photosphere.galleries));
const anchors = computed(() => normalizeCollection<NavigationAnchorViewerDto>(props.photosphere.navigation_anchors));

const latLonToXYZ = (lat: number, lon: number): { x: number; y: number; z: number; phi: number; theta: number } => {
    const _lat = Math.max(-45, Math.min(45, lat));
    const phi = MathUtils.degToRad(90 - _lat);
    const theta = MathUtils.degToRad(lon + 180);

    return {
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.cos(phi),
        z: Math.sin(phi) * Math.sin(theta),
        phi,
        theta,
    };
};

const objects: ViewerObject[] = [];
let currentIntersection: ViewerObject | null = null;
let isUserInteracting = false;

const lon = ref(0);
const lat = ref(0);
let onPointerDownX = 0;
let onPointerDownY = 0;
let onPointerDownLon = 0;
let onPointerDownLat = 0;

const pointerX = ref(0);
const pointerY = ref(0);

const raycaster = new Raycaster(new Vector3(0, 0, 0), new Vector3(0, 0, 1), 0.1, 100);

const camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new Scene();
const renderer = new WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = LinearToneMapping;
renderer.setSize(window.innerWidth, window.innerHeight);

const clearSceneMeshes = () => {
    const oldObjects: Object3D[] = [];
    scene.traverse((object) => {
        if (isDefined(object) && object instanceof Mesh) oldObjects.push(object);
    });
    oldObjects.forEach((m) => m.removeFromParent());
    objects.splice(0, objects.length);
    currentIntersection = null;
};

const loadPanorama = async () => {
    clearSceneMeshes();

    const sphereGeometry = new SphereGeometry(raycaster.far + 10, 60, 40);
    sphereGeometry.scale(-1, 1, 1); // faces inward

    const texture = new TextureLoader().load(photosphereImageUrl(props.photosphere.id));
    texture.colorSpace = SRGBColorSpace;
    const sphereMaterial = new MeshBasicMaterial({ map: texture });
    const sphereMesh = new Mesh(sphereGeometry, sphereMaterial);

    scene.add(sphereMesh);
    scene.add(camera);
};

const addIconAt = (mesh: Mesh, latDeg: number, lonDeg: number) => {
    const { x, y, z, phi, theta } = latLonToXYZ(latDeg, lonDeg);
    mesh.position.set(3 * x, 3 * y, 3 * z);

    const q = new Quaternion().setFromAxisAngle(mesh.up, Math.PI / 2 - theta);
    const r = new Quaternion().setFromAxisAngle({ x: -1, y: 0, z: 0 }, Math.PI / 2 - phi);
    mesh.setRotationFromQuaternion(q.multiply(r));
};

const buildObjects = async () => {
    const texLoader = new TextureLoader();

    // Icon scale: higher value = smaller on-screen icon
    const GALLERY_ICON_SCALE = 4;
    const LINK_ICON_SCALE = 4;

    // Gallery markers
    for (const g of galleries.value) {
        if (g.latitude == null || g.longitude == null) continue;

        // You currently reference /icons/gallery.png; keep that convention.
        const tex = await texLoader.loadAsync('/icons/gallery.png');
        const aspect = tex.width / tex.height;
        const mat = new MeshBasicMaterial({
            color: 0xffffff,
            map: tex,
            side: DoubleSide,
            transparent: true,
        });
        const iconGeom = new PlaneGeometry(aspect / GALLERY_ICON_SCALE, 1 / GALLERY_ICON_SCALE);
        const iconMesh = new Mesh(iconGeom, mat);

        addIconAt(iconMesh, g.latitude, g.longitude);

        objects.push({
            kind: 'gallery',
            mesh: iconMesh,
            gallery: g,
        });
        scene.add(iconMesh);
    }

    // Navigation anchors (links)
    for (const a of anchors.value) {
        if (a.latitude == null || a.longitude == null) continue;

        const tex = await texLoader.loadAsync('/icons/jump_point.png');
        const aspect = tex.width / tex.height;
        const mat = new MeshBasicMaterial({
            color: 0xffffff,
            map: tex,
            side: DoubleSide,
            transparent: true,
        });
        const iconGeom = new PlaneGeometry(aspect / LINK_ICON_SCALE, 1 / LINK_ICON_SCALE);
        const iconMesh = new Mesh(iconGeom, mat);

        addIconAt(iconMesh, a.latitude, a.longitude);

        objects.push({
            kind: 'link',
            mesh: iconMesh,
            anchor: a,
        });
        scene.add(iconMesh);
    }
};

const resizeCanvas = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};

const handlePointerDown = (event: PointerEvent) => {
    if (!event.isPrimary) return;
    isUserInteracting = true;
    onPointerDownX = event.clientX;
    onPointerDownY = event.clientY;
    onPointerDownLon = lon.value;
    onPointerDownLat = lat.value;
};

const handlePointerMove = (event: PointerEvent) => {
    pointerX.value = event.clientX;
    pointerY.value = event.clientY;
    if (!event.isPrimary) return;

    // hover detection
    const v = new Vector2((pointerX.value / window.innerWidth) * 2 - 1, -((pointerY.value / window.innerHeight) * 2 - 1));
    raycaster.setFromCamera(v, camera);
    const intersections = raycaster.intersectObjects(scene.children, false);
    const intersected = intersections[0]?.object;
    if (isDefined(intersected)) {
        currentIntersection = objects.find((o) => o.mesh === intersected) ?? null;
    } else {
        currentIntersection = null;
    }

    if (!isUserInteracting) return;
    lon.value = (onPointerDownX - pointerX.value) * 0.1 + onPointerDownLon;
    lat.value = (pointerY.value - onPointerDownY) * 0.1 + onPointerDownLat;
};

const handlePointerUp = (event: PointerEvent) => {
    if (!event.isPrimary) return;
    isUserInteracting = false;
};

const openGallery = (g: GalleryViewerDto) => {
    const rawPhotos = normalizeCollection<PhotoViewerDto>(g.photos);

    const images: GalleryImage[] = rawPhotos.map((p) => ({
        url: p.image_url ? toPublicUrl(p.image_url) : photoImageUrl(p.id),
        description: p.description,
    }));

    modal.value?.open({
        title: g.name,
        images,
        startIndex: 0,
    });
};

const handleClick = () => {
    if (!isDefined(currentIntersection)) return;

    if (currentIntersection.kind === 'gallery') {
        openGallery(currentIntersection.gallery);
        return;
    }

    if (currentIntersection.kind === 'link') {
        // Minimal integration: for now we just navigate by reloading the Inertia page to the target photosphere.
        // If you want seamless transitions without page reload, we can do an Inertia.visit here.
        const target = currentIntersection.anchor.target;
        if (!target) return;
        window.location.href = `/viewer/photospheres/${target.id}`;
    }
};

let rafId: number | null = null;
const runAnimation = () => {
    const { x, y, z } = latLonToXYZ(lat.value, lon.value);
    camera.lookAt(x, y, z);
    renderer.render(scene, camera);
    rafId = requestAnimationFrame(runAnimation);
};

onMounted(async () => {
    resizeCanvas();
    if (viewer.value) viewer.value.appendChild(renderer.domElement);

    await loadPanorama();
    await buildObjects();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('click', handleClick);

    runAnimation();
});

onUnmounted(() => {
    window.removeEventListener('resize', resizeCanvas);
    window.removeEventListener('pointerdown', handlePointerDown);
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', handlePointerUp);
    window.removeEventListener('click', handleClick);

    if (rafId != null) cancelAnimationFrame(rafId);
    renderer.dispose();
});
</script>
