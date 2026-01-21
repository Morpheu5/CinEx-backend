<script setup lang="ts">
import Dropzone from '@/components/Dropzone.vue';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/AppLayout.vue';
import { Head, router } from '@inertiajs/vue3';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, useField } from 'vee-validate';
import { toast } from 'vue-sonner';
import { computed, reactive } from 'vue';
import { route } from 'ziggy-js';
import FileThumb from '@/components/FileThumb.vue';
import type { BreadcrumbItem } from '@/types';
import GalleryForm from './_Form.vue';
import { galleryBaseSchema, GalleryBaseSchema } from '@/pages/admin/gallery/_schema';

const props = defineProps<{
    gallery: App.Data.GalleryData;
    photospheres: Array<App.Data.PhotosphereData>;
}>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: route('admin'),
    },
    {
        title: 'Galleries',
        href: route('admin.gallery.index'),
    },
    {
        title: `${props.gallery.name} (photosphere: ${props.gallery.photosphere?.name})`,
        href: route('admin.gallery.show', props.gallery.id),
    },
];

const { handleSubmit } = useForm<GalleryBaseSchema>({
    validationSchema: toTypedSchema(galleryBaseSchema),
    initialValues: {
        name: props.gallery.name,
        latitude: props.gallery.latitude ?? undefined,
        longitude: props.gallery.longitude ?? undefined,
    },
});

const latitudeField = useField<number | undefined>('latitude');
const longitudeField = useField<number | undefined>('longitude');

const photosphereImageUrl = computed(() => {
    // GalleryData includes photosphere (lazy) in some responses; the edit controller currently
    // passes the model with loaded photosphere, so this should work.
    const id = (props.gallery as any)?.photosphere?.id ?? (props.gallery as any)?.photosphere_id;
    if (!id) return null;
    return route('photosphere.image', id);
});

// buffer for new uploads
const pendingFiles = reactive<File[]>([]);
function addFiles(files: File[]) {
    for (const f of files) if (f.type.startsWith('image/')) pendingFiles.push(f);
}
function removePending(idx: number) {
    pendingFiles.splice(idx, 1);
}

const submit = handleSubmit((vals) => {
    const fd = new FormData();
    fd.append('name', vals.name);
    if (vals.latitude !== undefined) fd.append('latitude', String(vals.latitude));
    if (vals.longitude !== undefined) fd.append('longitude', String(vals.longitude));
    pendingFiles.forEach((f, i) => fd.append(`photos[${i}]`, f));

    fd.append('_method', 'PUT');
    router.post(route('api.v1.gallery.update', props.gallery.id), fd, {
        forceFormData: true,
        preserveState: false,
        preserveScroll: true,
        onSuccess: () => {
            pendingFiles.splice(0);
            toast.success('Gallery updated');
        },
        onError: (errors) => toast.error('Update failed<br />' + JSON.stringify(errors)),
    });
});

function updateDescription(photo: object, description: string) {
    router.put(
        route('api.v1.photo.update', { photo, description: description }),
        { description },
        {
            onSuccess: () => toast.success('Description saved'),
            onError: () => toast.error('Could not save description'),
            preserveScroll: true,
            preserveState: true,
        },
    );
}

function removePhoto(photoId: number) {
    if (confirm('This action cannot be undone. Are you sure you want to proceed?')) {
        router.delete(route('api.v1.photo.destroy', { photo: photoId }), {
            onSuccess: () => toast.success('Photo removed'),
            onError: () => toast.error('Delete failed'),
        });
    }
}
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <Head :title="`Edit Gallery — ${props.gallery.name}`" />

        <div class="p-4">
            <h1 class="mr-3 inline py-3 text-xl">Gallery editor</h1>
        </div>

        <form id="gallery-edit-form" class="ml-4 max-w-4xl space-y-6" @submit.prevent="submit">
            <GalleryForm
                :picker-src="photosphereImageUrl"
                :lat="latitudeField.value.value ?? null"
                :lon="longitudeField.value.value ?? null"
                @update:lat="(v) => latitudeField.setValue(v)"
                @update:lon="(v) => longitudeField.setValue(v)"
            />

            <div class="space-y-3">
                <label>Add Photos</label>
                <Dropzone multiple accept="image/*" @files="addFiles" />
                <div v-if="pendingFiles.length" class="grid grid-cols-2 gap-3 md:grid-cols-5">
                    <FileThumb v-for="(f, idx) in pendingFiles" :key="idx" :file="f" @remove="removePending(idx)" />
                </div>
            </div>
        </form>

        <div class="mt-10 px-4">
            <h2 class="mb-3 text-lg font-semibold">Existing Photos</h2>
            <div class="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
                <FileThumb
                    v-for="photo in props.gallery.photos"
                    :key="photo.id"
                    :photo="photo"
                    show-description
                    @description-change="(val) => updateDescription(photo, val)"
                    @remove="removePhoto(photo.id)"
                    editable
                />
            </div>
        </div>

        <div class="px-4 pb-8 pt-6">
            <Button type="submit" form="gallery-edit-form">Save</Button>
        </div>
    </AppLayout>
</template>
