<script setup lang="ts">
import { computed, ref } from 'vue'

type Props = {
    src: string | null
    lat?: number | null
    lon?: number | null
    disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    src: null,
    lat: null,
    lon: null,
    disabled: false,
})

const emit = defineEmits<{
    (e: 'update:lat', value: number): void
    (e: 'update:lon', value: number): void
}>()

const imgEl = ref<HTMLImageElement | null>(null)

function clamp(n: number, min: number, max: number) {
    return Math.min(max, Math.max(min, n))
}

function round(n: number, decimals = 6) {
    const p = Math.pow(10, decimals)
    return Math.round(n * p) / p
}

const hasPoint = computed(() => Number.isFinite(props.lat) && Number.isFinite(props.lon))

// Convert current lat/lon to marker position in % (for responsive layouts)
const markerStyle = computed(() => {
    if (!hasPoint.value) return null

    // We keep UI in [-90..90] and [-180..180] but compute in a tolerant way.
    const lat = clamp(Number(props.lat), -90, 90)
    let lon = Number(props.lon)

    // Wrap lon into [-180,180]
    lon = ((lon + 180) % 360 + 360) % 360 - 180

    const u = (lon + 180) / 360 // 0..1
    const v = (90 - lat) / 180  // 0..1

    return {
        left: `${u * 100}%`,
        top: `${v * 100}%`,
    }
})

function onPick(e: MouseEvent) {
    if (props.disabled) return
    if (!imgEl.value) return
    if (!props.src) return

    const rect = imgEl.value.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const u = clamp(x / rect.width, 0, 1)
    const v = clamp(y / rect.height, 0, 1)

    const lon = round(u * 360 - 180, 6)    // [-180..180]
    const lat = round(90 - v * 180, 6)     // [-90..90]

    emit('update:lat', lat)
    emit('update:lon', lon)
}
</script>

<template>
    <div class="space-y-2">
        <div class="text-sm font-medium">Pick hotspot coordinates</div>

        <div v-if="!src" class="text-sm text-muted-foreground">
            Select a photosphere to enable picking.
        </div>

        <div
            v-else
            class="relative w-full overflow-hidden rounded-md border bg-black/5"
            :class="disabled ? 'opacity-60' : ''"
        >
            <!-- The image is the equirectangular panorama shown as a flat preview -->
            <img
                ref="imgEl"
                :src="src"
                alt="Photosphere preview"
                class="block w-full select-none"
                draggable="false"
                @click="onPick"
            />

            <!-- Marker -->
            <div
                v-if="markerStyle"
                class="absolute -translate-x-1/2 -translate-y-1/2"
                :style="markerStyle"
                aria-hidden="true"
            >
                <div class="h-4 w-4 rounded-full border-2 border-white bg-black/70 shadow" />
            </div>

            <!-- Hint overlay -->
            <div
                v-if="!disabled"
                class="pointer-events-none absolute bottom-2 left-2 rounded bg-black/60 px-2 py-1 text-xs text-white"
            >
                Click to set latitude/longitude
            </div>
        </div>
    </div>
</template>
