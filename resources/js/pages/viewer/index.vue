<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import type { TheatreListItemDto } from '@/types/viewer';

defineProps<{
    theatres: TheatreListItemDto[];
}>()
</script>

<template>
    <Head title="Viewer" />

    <div class="relative min-h-dvh w-dvw overflow-hidden bg-black text-white">
        <div class="absolute left-4 top-4 z-50 flex items-center gap-3 rounded-lg bg-black/50 px-3 py-2 text-sm backdrop-blur">
            <Link class="underline-offset-4 hover:underline" :href="route('admin')">Admin</Link>
            <span class="opacity-60">/</span>
            <span class="opacity-90">Viewer</span>
        </div>

        <main class="mx-auto max-w-2xl px-6 pb-14 pt-24">
            <h1 class="text-lg font-medium">Theatres</h1>

            <ul class="mt-6 space-y-2">
                <li v-for="t in theatres" :key="t.id">
                    <Link class="block rounded-lg bg-white/5 px-4 py-3 hover:bg-white/10" :href="route('viewer.theatre.show', t.id)">{{ t.name }}</Link>
                </li>
            </ul>
        </main>
    </div>
</template>
