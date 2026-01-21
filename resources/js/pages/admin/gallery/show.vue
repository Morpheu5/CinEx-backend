<script setup lang="ts">
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { route } from 'ziggy-js';
import { Button } from '@/components/ui/button';
import FileThumb from '@/components/FileThumb.vue';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: route('admin'),
    },
    {
        title: 'Galleries',
        href: route('admin.gallery.index'),
    },
];

defineProps<{
    'gallery': App.Data.GalleryData,
}>()
</script>

<template>
    <Head title="Gallery" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div>
                <h1 class="mr-3 py-3 text-xl">Gallery: <strong>{{ gallery.name }}</strong></h1>
                <Button asChild>
                    <a :href="route('admin.gallery.edit', gallery.id)"><fa icon="fa-solid fa-pen-to-square" /> Edit gallery</a>
                </Button>
            </div>
            <table class="p-4 my-3 w-full [&>*>tr>*]:px-4 [&>*>tr>*]:py-3 [&>*>tr>td:nth-child(1)]:w-12">
                <tbody>
                    <tr>
                        <td><strong>photosphere</strong></td><td>{{ gallery.photosphere?.name }}</td>
                    </tr>
                    <tr>
                        <td><strong>longitude</strong></td><td>{{ gallery.longitude }}</td>
                    </tr>
                    <tr>
                        <td><strong>latitude</strong></td><td>{{ gallery.latitude }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="p-4 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
                <FileThumb
                    v-for="photo in gallery.photos"
                    :key="photo.id"
                    :photo="photo"
                    show-description
                    @description-change="null"
                    @remove="null"
                />
            </div>
        </div>
    </AppLayout>
</template>
