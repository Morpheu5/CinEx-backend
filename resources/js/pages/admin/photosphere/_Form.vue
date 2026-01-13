<script setup lang="ts">
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/vue3';
import { useForm, useFieldArray } from 'vee-validate';
import { toast } from 'vue-sonner';
import { nextTick, watch } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { route } from 'ziggy-js';

const props = defineProps<{
    mode: 'create' | 'edit';
    theatres: Array<{ id: number; name: string }>;
    photosphere?: App.Data.PhotosphereData;
}>();

function normalizeGalleries(input: unknown): Array<{ id?: number; name: string; latitude: number; longitude: number }> {
    if (!input) return [];

    // 1) already an array
    if (Array.isArray(input)) {
        return input
            .map((g: any) => ({
                id: g?.id,
                name: g?.name ?? '',
                latitude: g?.latitude,
                longitude: g?.longitude,
            }))
            .filter((g) => g.name !== '' || Number.isFinite(g.latitude) || Number.isFinite(g.longitude));
    }

    // 2) Spatie DataCollection-style: { data: [...] }
    const maybe = input as any;
    if (Array.isArray(maybe.data)) return normalizeGalleries(maybe.data);

    return [];
}

// Common numeric helpers (kept close to existing logic)
const numRequiredLat = z.preprocess(
    (v) => (v === '' || v === null ? undefined : v),
    z.coerce.number().min(-90).max(90),
);
const numRequiredLon = z.preprocess(
    (v) => (v === '' || v === null ? undefined : v),
    z.coerce.number().min(-180).max(180),
);

const GallerySchema = z.object({
    id: z.number().int().positive().optional(),
    name: z.string().min(1, 'Name is required'),
    latitude: numRequiredLat,
    longitude: numRequiredLon,
});

type GalleryItem = z.infer<typeof GallerySchema>;

// One schema for both create/edit; the controller accepts these keys in both flows.
const PhotosphereSchema = z.object({
    theatre_id: z.preprocess(
        (v) => (v === '' || v === null ? undefined : v),
        z.coerce.number({ invalid_type_error: 'Please select a theatre' })
            .int()
            .positive('Please select a theatre'),
    ),
    name: z.string().min(1, 'Name is required'),
    path: z.string().nullable().optional(),
    file: z.instanceof(File).nullable().optional(),
    galleries: z.array(GallerySchema).default([]),
});

type FormValues = z.infer<typeof PhotosphereSchema>;

const { handleSubmit, setFieldValue, values } = useForm<FormValues>({
    validationSchema: toTypedSchema(PhotosphereSchema),
    initialValues: {
        theatre_id: props.photosphere?.theatre_id ?? ('' as unknown as number),
        name: props.photosphere?.name ?? '',
        path: props.mode === 'edit' ? (props.photosphere?.path ?? null) : null,
        file: null,
        galleries: props.mode === 'edit'
            ? (normalizeGalleries((props.photosphere as any)?.galleries) as any)
            : ([] as any),
    },
});

const { fields: galleryRows, push: addGallery, remove: removeGallery } = useFieldArray<GalleryItem>('galleries');

// On create, pre-select theatre if there's only one
watch(
    () => props.theatres,
    (list) => {
        if (props.mode !== 'create') return;
        if (Array.isArray(list) && list.length === 1) {
            setFieldValue('theatre_id', String(list[0].id) as unknown as number);
        }
    },
    { immediate: true },
);

const onSubmit = handleSubmit((newValues) => {
    if (props.mode === 'create') {
        router.post(route('api.v1.photosphere.store'), newValues, {
            forceFormData: true,
            preserveScroll: true,
            preserveState: false,
            onError: (errors) => toast.error(JSON.stringify(errors)),
            onSuccess: () => toast.success('Photosphere created!'),
        });
        return;
    }

    if (!props.photosphere?.id) {
        toast.error('Missing photosphere id');
        return;
    }

    router.post(
        route('api.v1.photosphere.update', props.photosphere.id),
        { ...newValues, _method: 'put' },
        {
            forceFormData: true,
            preserveScroll: true,
            preserveState: false,
            onError: (errors) => toast.error(JSON.stringify(errors)),
            onSuccess: () => toast.success('Photosphere updated!'),
        },
    );
});

const removePath = async () => {
    setFieldValue('path', '');
    await nextTick();
};
</script>

<template>
    <form @submit.prevent="onSubmit">
        <FormField name="theatre_id" v-slot="{ field, errorMessage }">
            <FormItem class="flex flex-row py-3">
                <FormLabel class="w-24" id="theatre_id">Theatre</FormLabel>
                <FormControl>
                    <select
                        v-bind="field"
                        :value="values.theatre_id"
                        aria-labelledby="theatre_id"
                        class="mt-1 block w-full rounded border p-2"
                    >
                        <option value="" disabled>Select a theatre...</option>
                        <option v-for="t in theatres" :key="t.id" :value="t.id">{{ t.name }}</option>
                    </select>
                </FormControl>
                <FormMessage>{{ errorMessage }}</FormMessage>
            </FormItem>
        </FormField>

        <FormField name="name" v-slot="{ field, errorMessage }">
            <FormItem class="flex flex-row py-3">
                <FormLabel class="w-24" id="name">Name</FormLabel>
                <FormControl>
                    <Input type="text" v-bind="field" aria-labelledby="name" />
                </FormControl>
                <FormMessage>{{ errorMessage }}</FormMessage>
            </FormItem>
        </FormField>

        <!-- File / Path (edit keeps your existing remove-path flow) -->
        <FormField v-if="mode === 'create' || !values.path" key="file" name="file" v-slot="{ handleChange, errorMessage }">
            <FormItem class="flex flex-row py-3">
                <FormLabel class="w-24" id="file">File</FormLabel>
                <FormControl>
                    <Input
                        type="file"
                        @change="(e: Event) => {
                            const f = (e.target as HTMLInputElement).files?.[0] ?? null
                            handleChange(f)
                        }"
                        aria-labelledby="file"
                    />
                </FormControl>
                <FormMessage>{{ errorMessage }}</FormMessage>
            </FormItem>
        </FormField>

        <FormField v-else key="path" name="path" v-slot="{ field, errorMessage }">
            <FormItem class="flex flex-row py-3">
                <FormLabel class="w-24" id="path">Path</FormLabel>
                <FormControl class="flex items-center gap-3">
                    <Button type="button" @click="removePath" variant="destructive">
                        <fa icon="fa-solid fa-trash-can" />
                    </Button>
                    <span class="break-all py-1">{{ values.path }}</span>
                    <input v-bind="field" type="hidden" />
                </FormControl>
                <FormMessage>{{ errorMessage }}</FormMessage>
            </FormItem>
        </FormField>

        <!-- Galleries -->
        <div class="mt-6 border-t pt-4">
            <div class="mb-2 flex items-center justify-between">
                <h2 class="text-lg font-semibold">Galleries</h2>
                <Button
                    type="button"
                    variant="secondary"
                    @click="addGallery({ name: '', latitude: NaN, longitude: NaN } as any)"
                >
                    + Add gallery
                </Button>
            </div>

            <div v-if="galleryRows.length === 0" class="mb-2 text-sm text-muted-foreground">
                No galleries yet. Add one.
            </div>

            <div v-for="(row, i) in galleryRows" :key="row.key" class="mb-3 rounded-lg border p-3">
                <!-- name -->
                <FormField :name="`galleries.${i}.name`" v-slot="{ componentField, errorMessage }">
                    <FormItem class="flex flex-row py-2">
                        <FormLabel class="w-24">Name</FormLabel>
                        <FormControl class="flex-1">
                            <Input type="text" :aria-label="`Gallery ${i + 1} name`" v-bind="componentField" />
                        </FormControl>
                        <FormMessage>{{ errorMessage }}</FormMessage>
                    </FormItem>
                </FormField>

                <!-- latitude -->
                <FormField :name="`galleries.${i}.latitude`" v-slot="{ componentField, errorMessage }">
                    <FormItem class="flex flex-row py-2">
                        <FormLabel class="w-24">Latitude</FormLabel>
                        <FormControl class="flex-1">
                            <Input
                                type="number"
                                step="any"
                                inputmode="decimal"
                                :aria-label="`Gallery ${i + 1} latitude`"
                                v-bind="componentField"
                            />
                        </FormControl>
                        <FormMessage>{{ errorMessage }}</FormMessage>
                    </FormItem>
                </FormField>

                <!-- longitude -->
                <FormField :name="`galleries.${i}.longitude`" v-slot="{ componentField, errorMessage }">
                    <FormItem class="flex flex-row py-2">
                        <FormLabel class="w-24">Longitude</FormLabel>
                        <FormControl class="flex-1">
                            <Input
                                type="number"
                                step="any"
                                inputmode="decimal"
                                :aria-label="`Gallery ${i + 1} longitude`"
                                v-bind="componentField"
                            />
                        </FormControl>
                        <FormMessage>{{ errorMessage }}</FormMessage>
                    </FormItem>
                </FormField>

                <div class="flex justify-end">
                    <Button type="button" variant="destructive" @click="removeGallery(i)">Remove</Button>
                </div>
            </div>
        </div>

        <div class="flex flex-row py-3">
            <div class="spacer w-30"></div>
            <Button type="submit" variant="default">Save</Button>
        </div>
    </form>
</template>
