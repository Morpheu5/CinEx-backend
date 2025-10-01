<script setup lang="ts">
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import { useForm, useFieldArray } from 'vee-validate';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import { nextTick } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

defineProps<{
    gallery: {
        id: number
        name: string
        photos?: Array<{ id?: number; path: string; caption: string }>
        photosphere: { id: number, name: string }
    },
    photospheres: Array<{ id: number; name: string }>,
}>()

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Photospheres',
        href: '/dashboard/photospheres',
    },
    {
        title: 'Gallery editor',
        href: 'DUDE'
    }
]

const numRequiredLat = z.preprocess(
    (v) => (v === '' || v === null ? undefined : v),
    z.coerce.number().min(-90).max(90) // adjust ranges per field
)
const numRequiredLon = z.preprocess(
    (v) => (v === '' || v === null ? undefined : v),
    z.coerce.number().min(-180).max(180) // adjust ranges per field
)

const GallerySchema = z.object({
    id: z.number().int().positive().optional(), // include if editing existing items
    name: z.string().min(1, 'Name is required'),
    latitude: numRequiredLat,
    longitude: numRequiredLon,
    photosphere_id: z.number().int().positive(),
})

type GalleryItem = z.infer<typeof GallerySchema>;
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="py-3">
                <h1 class="text-xl py-3 inline mr-3">Editing: {{ gallery.name }} ({{ gallery.photosphere.name }})</h1>
            </div>
        </div>
    </AppLayout>
</template>


