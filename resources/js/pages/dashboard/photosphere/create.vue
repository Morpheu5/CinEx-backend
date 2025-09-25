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
import { Head, router } from '@inertiajs/vue3';
import { useForm, useFieldArray } from 'vee-validate';
import { toast } from 'vue-sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

const breadcrumbs: BreadcrumbItem[] = [
{
    title: 'Dashboard',
    href: dashboard().url,
},
];

const props = defineProps<{
    theatres: Array<{ id: number; name: string }>
}>()

const numRequiredLat = z.preprocess(
  (v) => (v === '' || v === null ? undefined : v),
  z.coerce.number().min(-90).max(90) // adjust ranges per field
);
const numRequiredLon = z.preprocess(
  (v) => (v === '' || v === null ? undefined : v),
  z.coerce.number().min(-180).max(180) // adjust ranges per field
);

const GallerySchema = z.object({
    id: z.number().int().positive().optional(), // include if editing existing items
    name: z.string().min(1, 'Name is required'),
    latitude: numRequiredLat,
    longitude: numRequiredLon,
});

const PhotosphereCreateSchema = z.object({
    theatre_id: z.coerce.number().int().positive('Select a theatre'),
    name: z.string().min(1, 'Name is required'),
    file: z.instanceof(File).nullable().optional(),
    // path is not used on create UI; keep optional if you ever send it
    path: z.string().nullable().optional(),
    galleries: z.array(GallerySchema).default([]),
})
type FormValues = z.infer<typeof PhotosphereCreateSchema>
    
    const { defineField, handleSubmit } = useForm<FormValues>({
        validationSchema: toTypedSchema(PhotosphereCreateSchema),
        initialValues: {
            theatre_id: -1 as number, // placeholder; coerced by Zod
            name: '',
            file: null,
            path: null,
            galleries: [],
        },
    })
    const [name, nameProp] = defineField('name')
    const [theatreID, theatreIDProp] = defineField('theatre_id')
    const { fields: galleryRows, push: addGallery, remove: removeGallery } = useFieldArray<FormValues>('galleries')
    
    const onSubmit = handleSubmit((values) => {
        router.post(`/photosphere`, { ...values }, {
            forceFormData: true, // needed for file + nested arrays
            preserveScroll: true,
            preserveState: false,
            onError: (errors) => {
                toast.error(JSON.stringify(errors))
            },
            onSuccess: () => {
                toast.success("Photosphere updated!");
            }
        })
    })
</script>

<template>
    <Head title="Dashboard" />
    
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="py-3">
                <h1 class="text-xl py-3 inline mr-3">New photosphere:</h1>
            </div>
            <form @submit.prevent="onSubmit">
                <FormField name="theatre_id">
                    <FormItem class="flex flex-row py-3">
                        <FormLabel class="w-24" id="theatre_id">Theatre</FormLabel>
                        <FormControl>
                            <select
                            v-bind="theatreIDProp"
                            v-model="theatreID"
                            aria-labelledby="theatre_id"
                            class="mt-1 block w-full border rounded p-2"
                            placeholder="Select a theatre..."
                            >
                            <option value="-1" disabled>Select a theatre...</option>
                            <option v-for="t in props.theatres" :key="t.id" :value="t.id">
                                {{ t.name }}
                            </option>
                        </select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>
            
            <FormField name="name">
                <FormItem class="flex flex-row py-3">
                    <FormLabel class="w-24" id="name">Name</FormLabel>
                    <FormControl>
                        <Input type="text" v-bind="nameProp" v-model="name" aria-labelledby="name" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>
            
            <FormField name="file" v-slot="{ handleChange, errorMessage }">
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
            
            <!-- Galleries -->
            <div class="mt-6 border-t pt-4">
                <div class="flex items-center justify-between mb-2">
                    <h2 class="text-lg font-semibold">Galleries</h2>
                    <Button type="button" variant="secondary" @click="addGallery({ name: '', latitude: '', longitude: '' } as any)">
                        + Add gallery
                    </Button>
                </div>
                
                <div v-if="galleryRows.length === 0" class="text-sm text-muted-foreground mb-2">
                    No galleries yet. Add one.
                </div>
                
                <div v-for="(row, i) in galleryRows" :key="row.key" class="rounded-lg border p-3 mb-3">
                    <!-- name -->
                    <FormField :name="`galleries.${i}.name`" v-slot="{ componentField, errorMessage }">
                        <FormItem class="flex flex-row py-2">
                            <FormLabel class="w-24">Name</FormLabel>
                            <FormControl class="flex-1">
                                <Input
                                type="text"
                                :aria-label="`Gallery ${i+1} name`"
                                :modelValue="componentField.value"
                                @update:modelValue="componentField.onChange"
                                @blur="componentField.onBlur"
                                />
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
                                type="number" step="any" inputmode="decimal"
                                :aria-label="`Gallery ${i+1} latitude`"
                                :modelValue="componentField.value"
                                @update:modelValue="componentField.onChange"
                                @blur="componentField.onBlur"
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
                                type="number" step="any" inputmode="decimal"
                                :aria-label="`Gallery ${i+1} longitude`"
                                :modelValue="componentField.value"
                                @update:modelValue="componentField.onChange"
                                @blur="componentField.onBlur"
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
            
            <div class="py-3 flex flex-row">
                <div class="spacer w-30"></div>
                <Button type="submit" variant="default" class="">Save</Button>
            </div>
        </form>
    </div>
</AppLayout>
</template>
