<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { type BreadcrumbItem } from '@/types'
import { Head } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import Form from './_Form.vue'

const props = defineProps<{
    photosphere: App.Data.PhotosphereData,
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
    },
    {
        title: props.photosphere.name,
    }
]
</script>

<template>
    <Head title="Admin" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="py-3">
                <h1 class="text-xl py-3 inline mr-3">Editing photosphere: <strong>{{ photosphere.name }}</strong> ({{ photosphere.theatre?.name }})</h1>
            </div>

            <Form mode="edit" :theatres="theatres" :photosphere="photosphere" />
        </div>
    </AppLayout>
</template>
