<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { route } from 'ziggy-js';

const props = defineProps<{
    photosphere: App.Data.PhotosphereData,
}>()

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Photospheres',
        href: route('dashboard.photosphere.index'),
    },
    {
        title: props.photosphere.name,
        href: route('dashboard.photosphere.show', props.photosphere.id),
    },
];

</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div>
                <h1 class="mr-3 inline py-3 text-xl">{{ photosphere.name }}</h1>
                <Button asChild>
                    <a :href="route('dashboard.photosphere.edit', photosphere.id)">
                        <fa icon="fa-solid fa-pen-to-square" /> Edit
                    </a>
                </Button>
            </div>
            <div class="p-4">
                <img :src="route('photosphere.image', photosphere.id)" :alt="`Photosphere: ${photosphere.name}`" />
            </div>
            <div class="mt-4">
                <h2 class="mr-3 inline py-3 text-xl">Galleries</h2>
                <table class="my-3 w-full [&>*>tr>*]:px-4 [&>*>tr>*]:py-3 [&>*>tr>td:nth-child(1)]:w-12">
                    <tbody>
                        <tr v-for="gallery in photosphere.galleries" :key="gallery.id">
                            <td>
                                <Button variant="outline" asChild>
                                    <a :href="route('dashboard.gallery.edit', gallery.id)"><fa icon="fa-solid fa-pen-to-square" /></a>
                                </Button>
                            </td>
                            <td>
                                <div><a :href="route('dashboard.gallery.show', gallery.id)">{{ gallery.name }}</a></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AppLayout>
</template>
