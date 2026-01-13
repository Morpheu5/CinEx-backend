<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import { route } from 'ziggy-js'
import Form from './_Form.vue'

const props = defineProps<{
    theatres: Array<{ id: number; name: string }>
}>()

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: route('admin'),
    },
    {
        title: 'Photospheres',
        href: route('admin.photosphere.index'),
    }
]
</script>

<template>
    <Head title="Photospheres" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="py-3">
                <h1 class="text-xl py-3 inline mr-3">New photosphere</h1>
            </div>

            <Form mode="create" :theatres="theatres" />
        </div>
    </AppLayout>
</template>
