<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/vue3';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

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
            </div>
            <form>
                <div class="flex flex-row py-3">
                    <div class="w-40 font-bold text-right pr-3">City</div>
                    <div><input type="text" name="city"></div>
                </div>
                <div class="flex flex-row py-3">
                    <div class="w-40 font-bold text-right pr-3">Country</div>
                    <div><input type="text" name="country"></div>
                </div>
                <div class="flex flex-row py-3">
                    <div class="w-40 font-bold text-right pr-3">Latitude</div>
                    <div><input type="text" name="lat"></div>
                </div>
                <div class="flex flex-row py-3">
                    <div class="w-40 font-bold text-right pr-3">Longitude</div>
                    <div><input type="text" name="lon"></div>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
