<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

defineProps({
    photosphere: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="">
                <h1 class="text-xl py-3 inline mr-3">{{ photosphere.name }}</h1>
                <Button variant="outline" asChild>
                    <Link :href="`/dashboard/photosphere/${photosphere.id}/edit`">edit</Link>
                </Button>
            </div>
            <div>
                <h2 class="text-xl py-3 inline mr-3">Galleries</h2>
                <table class="w-full my-3 [&>*>tr>*]:px-4 [&>*>tr>*]:py-3 [&>*>tr>td:nth-child(1)]:w-12">
                    <tbody>
                        <tr v-for="gallery in photosphere.galleries" :key="gallery.id">
                            <td>
                                <Button variant="outline" asChild>
                                    <Link :href="`/dashboard/gallery/${gallery.id}/edit`">
                                        <fa icon="fa-solid fa-pen-to-square" />
                                    </Link>
                                </Button>
                            </td>
                            <td>
                                <div>{{ gallery.name }}</div>
                                <div class="flex flex-row">
                                    <div v-for="photo in gallery.photos" :key="photo.id">
                                        {{ photo.path }}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AppLayout>
</template>
