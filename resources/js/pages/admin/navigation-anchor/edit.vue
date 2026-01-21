<script setup lang="ts">
import Form from './_Form.vue';
import { Head } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import type { BreadcrumbItem } from '@/types';
import { route } from 'ziggy-js';

const props = defineProps<{
    anchor: App.Data.NavigationAnchorData
    photospheres: { id:number, name:string|null }[]
}>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: route('admin'),
    },
    {
        title: 'Navigation Anchors',
        href: route('admin.navigation-anchor.index'),
    },
    {
        title: props.anchor.name || '',
    }
]

</script>
<template>
    <Head title="Edit Navigation Anchors" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="py-3">
                <h1 class="text-xl">Navigation Anchor: <strong>{{ props.anchor.name }}</strong></h1>
            </div>

            <Form :photospheres="photospheres" :initial="{
                id: props.anchor.id,
                photosphere_id: props.anchor.photosphere_id,
                target_photosphere_id: props.anchor.target_photosphere_id,
                name: props.anchor.name,
                longitude: props.anchor.longitude,
                latitude: props.anchor.latitude
              }"
                  mode="edit"
            />
        </div>
    </AppLayout>
</template>
