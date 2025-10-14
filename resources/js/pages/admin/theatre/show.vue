<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { route } from 'ziggy-js';

const props = defineProps<{
    theatre: App.Data.TheatreData
}>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: route('admin'),
    },
    {
        title: 'Theatres',
        href: route('admin.theatre.index'),
    },
    {
        title: props.theatre.name,
        href: route('admin.theatre.show', props.theatre.id),
    },
];

</script>

<template>
    <Head title="Admin" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="my-3">
                <h1 class="text-xl py-3 inline mr-3">{{ theatre.name }}</h1>
            </div>

            <Button asChild>
                <a :href="route('admin.theatre.edit', theatre.id)"><fa icon="fa-solid fa-pen-to-square" /> Edit</a>
            </Button>

            <div class="my-3">
                <div class="flex flex-row py-3">
                    <div class="w-24 font-bold text-right pr-3">City</div>
                    <div>{{ theatre.city }}, {{ theatre.country }}</div>
                </div>
                <div class="flex flex-row py-3">
                    <div class="w-24 font-bold text-right pr-3">Latitude</div>
                    <div>{{ theatre.latitude }}</div>
                </div>
                <div class="flex flex-row py-3">
                    <div class="w-24 font-bold text-right pr-3">Longitude</div>
                    <div>{{ theatre.longitude }}</div>
                </div>
                <div class="flex flex-row py-3">
                    <div class="w-24 font-bold text-right pr-3">Maps</div>
                    <div>
                        <span><a :href='`https://www.google.com/maps/place/Cinema/@${ theatre.latitude },${ theatre.longitude },20z`'>Google Maps</a></span>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
