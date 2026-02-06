<script setup lang="ts">
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import EquirectangularPicker from '@/components/EquirectangularPicker.vue'

defineProps<{
    pickerSrc: string | null
    lat: number | null
    lon: number | null
}>();

defineEmits<{
    (e: 'update:lat', v: number): void
    (e: 'update:lon', v: number): void
}>();
</script>

<template>
    <slot name="before" />

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

    <EquirectangularPicker
        :src="pickerSrc"
        :lat="lat"
        :lon="lon"
        @update:lat="(v) => $emit('update:lat', v)"
        @update:lon="(v) => $emit('update:lon', v)"
    />

    <slot name="after" />
w</template>
