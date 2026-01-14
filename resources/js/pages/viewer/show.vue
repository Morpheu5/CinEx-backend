<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import SphereViewer from '@/components/viewer/SphereViewer.vue';
import type { PhotosphereViewerDto } from '@/types/viewer';
import { route } from 'ziggy-js';

defineProps<{
    photosphere: PhotosphereViewerDto;
}>();
</script>

<template>
    <Head :title="`Viewer · ${photosphere.name}`" />

    <div class="relative h-dvh w-dvw overflow-hidden bg-black">
        <div class="absolute left-4 top-4 z-50 flex items-center gap-3 rounded-lg bg-black/50 px-3 py-2 text-sm text-white backdrop-blur">
            <Link class="underline-offset-4 hover:underline" :href="route('admin')">Admin</Link>
            <span class="opacity-60">/</span>
            <span class="opacity-90">{{ photosphere.name }}</span>
        </div>

        <SphereViewer :photosphere="photosphere" />
    </div>
</template>
