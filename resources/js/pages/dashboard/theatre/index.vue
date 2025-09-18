<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/vue3';
import { show } from '@/routes/dashboard/theatre';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

const props = defineProps({
    theatres: {
        type: Object,
        required: true,
    },
    filters: {
        type: Object,
        default: () => ({}),
    }
})
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <h1 class="text-xl py-3">Theatres</h1>
            <table class="w-full">
                <thead class="bg-gray-800 text-left">
                    <tr>
                        <th class="px-4 py-3">Name</th>
                        <th class="px-4 py-3 w-48">City</th>
                        <th class="px-4 py-3 w-24">Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="theatre in theatres.data" :key="theatre.id" class="border-1">
                        <td class="px-4 py-3">
                            <Link :href="show.url(theatre.id)">{{ theatre.name }}</Link>
                        </td>
                        <td class="px-4 py-3 w-48">{{ theatre.city }}</td>
                        <td class="px-4 py-3 w-24">{{ theatre.country }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AppLayout>
</template>
