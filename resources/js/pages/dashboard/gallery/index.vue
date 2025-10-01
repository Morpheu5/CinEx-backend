<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/vue3';
import { show, create, edit } from '@/routes/dashboard/gallery';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

defineProps({
    galleries: {
        type: Object,
        required: true,
    },
    filters: {
        type: Object,
        default: () => ({}),
    }
})

const onDelete = (id: number) => {
    if(confirm("This action cannot be undone. Are you sure you want to proceed?")) {
        router.delete(`/gallery/${id}`, {
            preserveScroll: true,
            onSuccess: () => {
                toast("Gallery deleted!");
            }
        })
    }
}
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <h1 class="text-xl py-3">Galleries</h1>
            <Button variant="default">
                <Link :href="create().url" alt="Create new gallery">
                    <fa icon="fa-solid fa-square-plus" /> New
                </Link>
            </Button>
            <table class="w-full my-3 [&>*>tr>*]:px-4 [&>*>tr>*]:py-3">
                <thead class="bg-gray-800 text-left">
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
                            <Link :href="`/dashboard/gallery/${gallery.id}/edit`" :alt="`Edit gallery ${gallery.name}`"><fa icon="fa-solid fa-pen-to-square" /></Link>
                        </Button>
                    </td>
                    <td class="">
                        <Link :href="`/dashboard/gallery/${gallery.id}`">{{ gallery.name }}</Link>
                    </td>
                    <td class="">
                        <Link :href="`/dashboard/photosphere/${gallery.photosphere.id}`">{{ gallery.photosphere.name }}</Link>
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
