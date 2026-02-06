<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { Head, router } from '@inertiajs/vue3';
import { useForm, useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import Dropzone from '@/components/Dropzone.vue';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import { computed, reactive } from 'vue';
import { route } from 'ziggy-js';
import { useObjectUrl } from '@vueuse/core';
import type { BreadcrumbItem } from '@/types';
import GalleryForm from './_Form.vue';
import { galleryCreateSchema, type GalleryCreateSchema } from './_schema';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const props = defineProps<{
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
];

const { handleSubmit } = useForm<GalleryCreateSchema>({
    validationSchema: toTypedSchema(galleryCreateSchema),
});

const photosphereId = useField<string | undefined>('photosphere_id');
const latitudeField = useField<number | undefined>('latitude');
const longitudeField = useField<number | undefined>('longitude');

const pendingFiles = reactive<File[]>([]);

const photosphereImageUrl = computed(() => {
    const raw = photosphereId.value.value;
    const id = raw ? Number(raw) : null;
    if (!id) return null;
    return route('photosphere.image', id);
});

function setLatLon(lat: number, lon: number) {
    latitudeField.setValue(lat);
    longitudeField.setValue(lon);
}

function addFiles(files: File[]) {
    for (const f of files) if (f.type.startsWith('image/')) pendingFiles.push(f);
}
function removePending(idx: number) {
    pendingFiles.splice(idx, 1);
}

const submit = handleSubmit((vals) => {
    const fd = new FormData();
    fd.append('photosphere_id', String(vals.photosphere_id));
    fd.append('name', vals.name);
    if (vals.latitude !== undefined) fd.append('latitude', String(vals.latitude));
    if (vals.longitude !== undefined) fd.append('longitude', String(vals.longitude));
    pendingFiles.forEach((f, i) => fd.append(`photos[${i}]`, f));

    router.post(route('api.v1.gallery.store'), fd, {
        forceFormData: true,
        onSuccess: () => toast.success('Gallery created'),
        onError: () => toast.error('Validation failed'),
    });
});
</script>

<template>
    <Head title="Create Gallery" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="py-3">
                <h1 class="mr-3 inline py-3 text-xl">New gallery</h1>
            </div>

            <form class="mt-4 max-w-3xl space-y-6" @submit.prevent="submit">
                <GalleryForm
                    :picker-src="photosphereImageUrl"
                    :lat="latitudeField.value.value ?? null"
                    :lon="longitudeField.value.value ?? null"
                    @update:lat="(v) => latitudeField.setValue(v)"
                    @update:lon="(v) => longitudeField.setValue(v)"
                >
                    <template #before>
                        <FormField name="photosphere_id" v-slot="{ value, handleChange, errorMessage }">
                            <FormItem>
                                <FormLabel>Photosphere</FormLabel>
                                <FormControl>
                                    <select
                                        class="w-full rounded-md border p-2"
                                        :value="value ?? ''"
                                        @change="handleChange(($event.target as HTMLSelectElement).value)"
                                    >
                                        <option value="">Select…</option>
                                        <option v-for="p in props.photospheres" :key="p.id" :value="String(p.id)">
                                            {{ p.name }}
                                        </option>
                                    </select>
                                </FormControl>
                                <FormMessage>{{ errorMessage }}</FormMessage>
                            </FormItem>
                        </FormField>
                    </template>
                </GalleryForm>

                <!-- Photos -->
                <div class="space-y-3">
                    <!-- Use a plain heading or the standalone Label component instead of FormLabel -->
                    <div class="text-sm font-medium">Photos</div>
                    <Dropzone multiple accept="image/*" @files="addFiles" />
                    <div v-if="pendingFiles.length" class="grid grid-cols-2 gap-3 md:grid-cols-4">
                        <div v-for="(f, idx) in pendingFiles" :key="idx" class="space-y-2 rounded border p-2">
                            <img :src="useObjectUrl(f).value" alt="" class="aspect-square w-full rounded object-cover" />
                            <Button type="button" variant="destructive" class="w-full" @click="removePending(idx)"> Remove </Button>
                        </div>
                    </div>
                </div>

                <div class="pt-2">
                    <Button type="submit">Create gallery</Button>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
