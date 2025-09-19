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
    theatre: {
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
                <h1 class="text-xl py-3 inline mr-3">{{ theatre.name }}</h1>
                <Button variant="outline" :href="`/dashboard/theatre/`" asChild>
                    <Link :href="`/dashboard/theatre/${theatre.id}/edit`">edit</Link>
                </Button>
            </div>
            <div class="flex flex-row py-3">
                <div class="w-40 font-bold text-right pr-3">City</div>
                <div>{{ theatre.city }}, {{ theatre.country }}</div>
            </div>
            <div class="flex flex-row py-3">
                <div class="w-40 font-bold text-right pr-3">Latitude</div>
                <div>{{ theatre.latitude }}</div>
            </div>
            <div class="flex flex-row py-3">
                <div class="w-40 font-bold text-right pr-3">Longitude</div>
                <div>{{ theatre.longitude }}</div>
            </div>
            <div class="flex flex-row py-3">
                <div class="w-40 font-bold text-right pr-3">Maps</div>
                <div>
                    <span><a :href='`https://www.google.com/maps/place/Cinema/@${ theatre.latitude },${ theatre.longitude },20z`'>Google Maps</a></span>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
