<script setup lang="ts">
import Dropzone from '@/components/Dropzone.vue';
import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/AppLayout.vue';
import { Head, router } from '@inertiajs/vue3';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { toast } from 'vue-sonner';
import * as z from 'zod';
import { reactive } from 'vue';
import { route } from 'ziggy-js';
import FileThumb from '@/components/FileThumb.vue';
import type { BreadcrumbItem } from '@/types';

const props = defineProps<{
    gallery: App.Data.GalleryData;
    photospheres: Array<App.Data.PhotosphereData>;
}>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: route('admin'),
    },
    {
        title: 'Galleries',
        href: route('admin.gallery.index'),
    },
    {
        title: `${props.gallery.name} (photosphere: ${props.gallery.photosphere?.name})`,
        href: route('admin.gallery.show', props.gallery.id),
    },
];

const schema = z.object({
    name: z.string().min(1).max(255),
    latitude: z.preprocess((v) => (v === '' ? undefined : v), z.number().min(-90).max(90).optional()),
    longitude: z.preprocess((v) => (v === '' ? undefined : v), z.number().min(-180).max(180).optional()),
});

type FormValues = z.infer<typeof schema>;
const { handleSubmit } = useForm<FormValues>({
    validationSchema: toTypedSchema(schema),
    initialValues: {
        name: props.gallery.name,
        latitude: props.gallery.latitude ?? undefined,
        longitude: props.gallery.longitude ?? undefined,
    },
});

// buffer for new uploads
const pendingFiles = reactive<File[]>([]);
function addFiles(files: File[]) {
    for (const f of files) if (f.type.startsWith('image/')) pendingFiles.push(f);
}
function removePending(idx: number) {
    pendingFiles.splice(idx, 1);
}

const submit = handleSubmit((vals) => {
    const fd = new FormData();
    fd.append('name', vals.name);
    if (vals.latitude !== undefined) fd.append('latitude', String(vals.latitude));
    if (vals.longitude !== undefined) fd.append('longitude', String(vals.longitude));
    pendingFiles.forEach((f, i) => fd.append(`photos[${i}]`, f));

    fd.append('_method', 'PUT');
    router.post(route('api.v1.gallery.store', props.gallery.id), fd, {
        forceFormData: true,
        preserveState: false,
        preserveScroll: true,
        onSuccess: () => {
            pendingFiles.splice(0);
            toast.success('Gallery updated');
        },
        onError: (errors) => toast.error('Update failed<br />' + JSON.stringify(errors)),
    });
});

function updateDescription(photo: object, description: string) {
    router.put(
        route('api.v1.photo.update', { photo, description: description }),
        { description },
        {
            onSuccess: () => toast.success('Description saved'),
            onError: () => toast.error('Could not save description'),
            preserveScroll: true,
            preserveState: true,
        },
    );
}

function removePhoto(photoId: number) {
    if (confirm('This action cannot be undone. Are you sure you want to proceed?')) {
        router.delete(route('api.v1.photo.destroy', { photo: photoId }), {
            onSuccess: () => toast.success('Photo removed'),
            onError: () => toast.error('Delete failed'),
        });
    }
}
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <Head :title="`Edit Gallery — ${props.gallery.name}`" />

        <div class="p-4">
            <h1 class="mr-3 inline py-3 text-xl">Gallery editor</h1>
        </div>

        <form class="ml-4 max-w-4xl space-y-6" @submit.prevent="submit">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <FormField name="name" v-slot="{ componentField, errorMessage }">
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl><Input v-bind="componentField" /></FormControl>
                        <FormMessage>{{ errorMessage }}</FormMessage>
                    </FormItem>
                </FormField>
                <FormField name="latitude" v-slot="{ componentField, errorMessage }">
                    <FormItem>
                        <FormLabel>Latitude</FormLabel>
                        <FormControl><Input v-bind="componentField" type="number" step="any" /></FormControl>
                        <FormMessage>{{ errorMessage }}</FormMessage>
                    </FormItem>
                </FormField>
                <FormField name="longitude" v-slot="{ componentField, errorMessage }">
                    <FormItem>
                        <FormLabel>Longitude</FormLabel>
                        <FormControl><Input v-bind="componentField" type="number" step="any" /></FormControl>
                        <FormMessage>{{ errorMessage }}</FormMessage>
                    </FormItem>
                </FormField>
            </div>

            <div class="space-y-3">
                <label>Add Photos</label>
                <Dropzone multiple accept="image/*" @files="addFiles" />
                <div v-if="pendingFiles.length" class="grid grid-cols-2 gap-3 md:grid-cols-5">
                    <FileThumb v-for="(f, idx) in pendingFiles" :key="idx" :file="f" @remove="removePending(idx)" />
                </div>
            </div>

            <div class="pt-2">
                <Button type="submit">Save</Button>
            </div>
        </form>

        <div class="mt-10 px-4">
            <h2 class="mb-3 text-lg font-semibold">Existing Photos</h2>
            <div class="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
                <FileThumb
                    v-for="photo in props.gallery.photos"
                    :key="photo.id"
                    :photo="photo"
                    show-description
                    @description-change="(val) => updateDescription(photo, val)"
                    @remove="removePhoto(photo.id)"
                    editable
                />
            </div>
        </div>
    </AppLayout>
</template>
