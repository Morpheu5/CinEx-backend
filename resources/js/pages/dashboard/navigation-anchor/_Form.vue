<script setup lang="ts">
import { router } from '@inertiajs/vue3'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { toast } from 'vue-sonner'
import { z } from 'zod'

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

/** Props */
const props = defineProps<{
    mode: 'create' | 'edit'
    photospheres: { id: number; name: string | null }[]
    initial?: {
        id?: number
        photosphere_id?: number | string
        target_photosphere_id?: number | string
        name?: string
        longitude?: number | string
        latitude?: number | string
    }
}>()

/** Zod schema (IDs coerced to numbers; cross-field check at object level) */
const schema = z
    .object({
        photosphere_id: z.coerce.number().int().positive(),
        target_photosphere_id: z.coerce.number().int().positive(),
        name: z.string().min(1).max(191),
        longitude: z.coerce.number().gte(-180).lte(180),
        latitude: z.coerce.number().gte(-90).lte(90),
    })
    .superRefine((data, ctx) => {
        if (data.target_photosphere_id === data.photosphere_id) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['target_photosphere_id'],
                message: 'Target must be different from source',
            })
        }
    })

type FormInput = z.infer<typeof schema>

/** Vee-Validate form */
const { handleSubmit, setFieldValue } = useForm<FormInput>({
    validationSchema: toTypedSchema(schema),
    initialValues: {
        photosphere_id: String(props.initial?.photosphere_id) ?? '',
        target_photosphere_id: String(props.initial?.target_photosphere_id) ?? '',
        name: props.initial?.name ?? '',
        longitude: props.initial?.longitude ?? '',
        latitude: props.initial?.latitude ?? '',
    } as any,
})

/** Submit */
const onSubmit = handleSubmit((values) => {
    if (props.mode === 'create') {
        router.post(route('dashboard.navigation-anchor.store'), values, {
            preserveScroll: true,
            onSuccess: () => toast.success('Navigation anchor created'),
            onError: () => toast.error('Failed to create navigation anchor'),
        })
    } else if (props.initial?.id) {
        router.put(route('dashboard.navigation-anchor.update', props.initial.id), values, {
            preserveScroll: true,
            onSuccess: () => toast.success('Navigation anchor updated'),
            onError: () => toast.error('Failed to update navigation anchor'),
        })
    }
})

/** Optional: quick JSON ingest helper */
function ingestJson(raw: string) {
    try {
        const j = JSON.parse(raw)
        ;(['photosphere_id','target_photosphere_id','name','longitude','latitude'] as const).forEach((k) => {
            if (j[k] !== undefined) setFieldValue(k, j[k])
        })
        toast.success('Fields populated from JSON')
    } catch {
        toast.error('Invalid JSON')
    }
}
</script>

<template>
    <form class="space-y-6" @submit.prevent="onSubmit">
        <!-- Source Photosphere (native select) -->
        <FormField name="photosphere_id" v-slot="{ value, handleChange, handleBlur }">
            <FormItem>
                <FormLabel>Source Photosphere</FormLabel>
                <FormControl>
                    <select
                        class="w-full rounded border px-3 py-2"
                        :value="value ?? ''"
                        @change="(e:any) => handleChange(e.target.value)"
                        @blur="handleBlur"
                    >
                    <option value="" disabled>Select source</option>
                    <option
                        v-for="p in photospheres"
                        :key="p.id"
                        :value="String(p.id)"
                    >
                        {{ p.name ?? `#${p.id}` }}
                    </option>
                    </select>
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <!-- Target Photosphere (native select) -->
        <FormField name="target_photosphere_id" v-slot="{ value, handleChange, handleBlur }">
            <FormItem>
                <FormLabel>Target Photosphere</FormLabel>
                <FormControl>
                    <select
                        class="w-full rounded border px-3 py-2"
                        :value="value ?? ''"
                        @change="(e:any) => handleChange(e.target.value)"
                        @blur="handleBlur"
                    >
                        <option value="" disabled>Select target</option>
                        <option
                            v-for="p in photospheres"
                            :key="p.id"
                            :value="String(p.id)"
                        >
                            {{ p.name ?? `#${p.id}` }}
                        </option>
                    </select>
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <!-- Name -->
        <FormField name="name" v-slot="{ componentField }">
            <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input placeholder="Anchor label (e.g., North exit)" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <!-- Coordinates -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField name="longitude" v-slot="{ componentField }">
                <FormItem>
                    <FormLabel>Longitude</FormLabel>
                    <FormControl>
                        <Input type="number" step="0.0000001" inputmode="decimal" v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>

            <FormField name="latitude" v-slot="{ componentField }">
                <FormItem>
                    <FormLabel>Latitude</FormLabel>
                    <FormControl>
                        <Input type="number" step="0.0000001" inputmode="decimal" v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>
        </div>

        <!-- Dev helper -->
        <details class="rounded border p-3">
            <summary class="cursor-pointer text-sm">Quick paste JSON (optional)</summary>
            <div class="mt-3 space-y-2">
                <p class="text-xs text-muted-foreground">
                    Accepts: <code>{"name","longitude","latitude","photosphere_id","target_photosphere_id"}</code>
                </p>
                <textarea
                    class="w-full rounded border p-2 text-sm"
                    rows="4"
                    placeholder='{"name":"North exit","longitude":11.876,"latitude":45.407,"photosphere_id":1,"target_photosphere_id":2}'
                    @change="(e: any) => { ingestJson(e.target.value); e.target.value = '' }"
                />
            </div>
        </details>

        <div class="flex justify-end gap-2">
            <Button type="submit" variant="default">
                {{ mode === 'create' ? 'Create' : 'Save' }}
            </Button>
        </div>
    </form>
</template>
