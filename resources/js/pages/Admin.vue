<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/vue3';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: route('admin'),
    },
];
</script>

<template>
    <Head title="Admin" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <div class="grid auto-rows-min gap-4 md:grid-cols-3">
                <ul>
                    <li>
                        <Link :href="route('admin.photosphere.index')">Photospheres</Link>
                    </li>
                    <li>
                        <Link :href="route('admin.gallery.index')">Galleries</Link>
                    </li>
                </ul>
                <!--                <div class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">-->
                <!--                    <PlaceholderPattern />-->
                <!--                </div>-->
            </div>
        </div>
    </AppLayout>
</template>
