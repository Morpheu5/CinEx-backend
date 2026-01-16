<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import type { Id, PhotosphereListItemDto } from '@/types/viewer'

defineProps<{
    theatre: { id: Id, name: string };
    photospheres: PhotosphereListItemDto[];
}>()
</script>

<template>
    <Head :title="`Viewer – ${theatre.name}`" />

    <div class="relative min-h-dvh w-dvw overflow-hidden bg-black text-white">
        <div class="absolute left-4 top-4 z-50 flex items-center gap-3 rounded-lg bg-black/50 px-3 py-2 text-sm backdrop-blur">
            <Link class="underline-offset-4 hover:underline" :href="route('admin')">Admin</Link>
            <span class="opacity-60">/</span>
            <Link class="underline-offset-4 hover:underline" :href="route('viewer.index')">Viewer</Link>
            <span class="opacity-60">/</span>
            <span class="opacity-90">{{ theatre.name }}</span>
        </div>

        <main class="mx-auto max-w-2xl px-6 pb-14 pt-24">
            <h1 class="text-lg font-medium">{{ theatre.name }}</h1>
            <p class="mt-1 text-sm text-white/60">Photospheres</p>

            <ul class="mt-6 space-y-2">
                <li v-for="p in photospheres" :key="p.id">
                    <Link class="block rounded-lg bg-white/5 px-4 py-3 hover:bg-white/10" :href="route('viewer.photosphere.show', p.id)">{{ p.name }}</Link>
                </li>
            </ul>
        </main>
    </div>
</template>
