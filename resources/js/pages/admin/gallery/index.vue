<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: route('admin'),
    },
    {
        title: 'Galleries',
    },
];

defineProps({
    galleries: Array<App.Data.GalleryData>,
});

const onDelete = (id: number) => {
    if (confirm('This action cannot be undone. Are you sure you want to proceed?')) {
        router.delete(route('api.v1.gallery.destroy', id), {
            preserveScroll: true,
            onSuccess: () => {
                toast('Gallery deleted!');
            },
        });
    }
};
</script>

<template>
    <Head title="Admin" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <h1 class="py-3 text-xl">Galleries</h1>
            <Button asChild>
                <Link :href="route('admin.gallery.create')" alt="Create new gallery"> <fa icon="fa-solid fa-square-plus" /> New </Link>
            </Button>
            <table class="my-3 w-full [&>*>tr>*]:px-4 [&>*>tr>*]:py-3">
                <thead class="bg-slate-200 text-left dark:bg-slate-800">
                    <tr>
                        <th class="w-12"></th>
                        <th class="">Gallery</th>
                        <th class="">Photosphere</th>
                        <th class="w-12"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="gallery in galleries" :key="gallery.id" class="border-1">
                        <td class="w-12">
                            <Button variant="link">
                                <a :href="route('admin.gallery.edit', gallery.id)" :alt="`Edit gallery ${gallery.name}`"
                                    ><fa icon="fa-solid fa-pen-to-square"
                                /></a>
                            </Button>
                        </td>
                        <td class="">
                            <a :href="route('admin.gallery.show', gallery.id)">{{ gallery.name }}</a>
                        </td>
                        <td class="">
                            <a :href="route('admin.photosphere.show', gallery.photosphere?.id)">{{ gallery.photosphere?.name }}</a>
                        </td>
                        <td class="w-12">
                            <Button type="button" @click="() => onDelete(gallery.id)" variant="destructive" :alt="`Delete gallery ${gallery.name}`">
                                <fa icon="fa-solid fa-trash-can" />
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AppLayout>
</template>
