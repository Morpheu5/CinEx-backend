<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
</script>

<template>
    <Head title="CinEx Viewer"></Head>
    <div class="relative min-h-dvh w-dvw overflow-hidden bg-black text-white">
        <div class="absolute left-4 top-4 right-4 z-50 flex items-center gap-3 rounded-lg bg-black/50 px-3 py-2 text-sm backdrop-blur">
            <span class="opacity-90">Viewer</span>
            <span class="">
                <Link :href="route('admin.theatre.index')">Admin</Link>
            </span>
        </div>

        <main class="mx-auto max-w-2xl px-6 pb-14 pt-24">
            <h1 class="text-lg font-medium">Welcome to the CinEx Viewer</h1>

            <p>Please head to the <Link :href="route('viewer.index')">list of theatres</Link> to begin.</p>
        </main>
    </div>
</template>
