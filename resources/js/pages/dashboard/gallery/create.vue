<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { Head, router } from '@inertiajs/vue3'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import Dropzone from '@/components/Dropzone.vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { toast } from 'vue-sonner'
import { reactive } from 'vue';
import { route } from 'ziggy-js';
import { useObjectUrl } from '@vueuse/core';

const props = defineProps<{
    photospheres: Array<{ id: number; name: string }>
}>()

const schema = z.object({
    photosphere_id: z.coerce.number().int().positive(),
    name: z.string().min(1).max(255),
    latitude: z.preprocess(v => (v === '' ? undefined : v), z.number().min(-90).max(90).optional()),
    longitude: z.preprocess(v => (v === '' ? undefined : v), z.number().min(-180).max(180).optional()),
})

const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(schema),
})

const pendingFiles = reactive<File[]>([])

function addFiles(files: File[]) {
    for (const f of files) if (f.type.startsWith('image/')) pendingFiles.push(f)
}
function removePending(idx: number) {
    pendingFiles.splice(idx, 1)
}

const submit = handleSubmit(vals => {
    const fd = new FormData()
    fd.append('photosphere_id', String(vals.photosphere_id))
    fd.append('name', vals.name)
    if (vals.latitude !== undefined) fd.append('latitude', String(vals.latitude))
    if (vals.longitude !== undefined) fd.append('longitude', String(vals.longitude))
    pendingFiles.forEach((f, i) => fd.append(`photos[${i}]`, f))

    router.post(route('gallery.store'), fd, {
        forceFormData: true,
        onSuccess: () => toast.success('Gallery created'),
        onError: () => toast.error('Validation failed'),
    })
})
</script>

<template>
    <AppLayout>
        <Head title="Create Gallery" />
        <form class="space-y-6 max-w-3xl" @submit.prevent="submit">
            <!-- Photosphere -->
            <FormField name="photosphere_id" v-slot="{ field, errorMessage }">
                <FormItem>
                    <FormLabel>Photosphere</FormLabel>
                    <FormControl>
                        <select v-bind="field" class="w-full border rounded-md p-2">
                            <option value="">Select…</option>
                            <option v-for="p in props.photospheres" :key="p.id" :value="p.id">
                                {{ p.name }}
                            </option>
                        </select>
                    </FormControl>
                    <FormMessage>{{ errorMessage }}</FormMessage>
                </FormItem>
            </FormField>

            <!-- Name -->
            <FormField name="name" v-slot="{ field, errorMessage }">
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input v-bind="field" />
                    </FormControl>
                    <FormMessage>{{ errorMessage }}</FormMessage>
                </FormItem>
            </FormField>

            <!-- Lat / Lon -->
            <div class="grid grid-cols-2 gap-4">
                <FormField name="latitude" v-slot="{ field, errorMessage }">
                    <FormItem>
                        <FormLabel>Latitude</FormLabel>
                        <FormControl>
                            <Input v-bind="field" type="number" step="any" />
                        </FormControl>
                        <FormMessage>{{ errorMessage }}</FormMessage>
                    </FormItem>
                </FormField>

                <FormField name="longitude" v-slot="{ field, errorMessage }">
                    <FormItem>
                        <FormLabel>Longitude</FormLabel>
                        <FormControl>
                            <Input v-bind="field" type="number" step="any" />
                        </FormControl>
                        <FormMessage>{{ errorMessage }}</FormMessage>
                    </FormItem>
                </FormField>
            </div>

            <!-- Photos -->
            <div class="space-y-3">
                <!-- Use a plain heading or the standalone Label component instead of FormLabel -->
                <div class="text-sm font-medium">Photos</div>
                <Dropzone multiple accept="image/*" @files="addFiles" />
                <div v-if="pendingFiles.length" class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div v-for="(f,idx) in pendingFiles" :key="idx" class="border rounded p-2 space-y-2">
                        <img :src="useObjectUrl(f).value" alt="" class="w-full aspect-square object-cover rounded" />
                        <Button type="button" variant="destructive" class="w-full" @click="removePending(idx)">
                            Remove
                        </Button>
                    </div>
                </div>
            </div>

            <div class="pt-2">
                <Button type="submit">Create Gallery</Button>
            </div>
        </form>
    </AppLayout>
</template>
