<script setup lang="ts">
import Form from './_Form.vue';
import { Head } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import type { BreadcrumbItem } from '@/types';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: route('admin'),
    },
    {
        title: 'Navigation Anchors',
        href: route('admin.navigation-anchor.index'),
    }
]

defineProps<{ photospheres: { id: number; name: string | null }[] }>();
</script>
<template>
    <Head title="Create" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="py-3">
                <h1 class="text-xl">New Navigation Anchor</h1>
            </div>

            <Form :photospheres="photospheres" mode="create" />
        </div>
    </AppLayout>
</template>
