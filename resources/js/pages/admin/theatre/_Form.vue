<script setup lang="ts">
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

defineProps<{
    submitLabel?: string
}>();
</script>

<template>
    <FormField name="name" v-slot="{ componentField, errorMessage }">
        <FormItem class="flex flex-row py-3">
            <FormLabel class="w-24" id="name">Name</FormLabel>
            <FormControl>
                <Input type="text" v-bind="componentField" aria-labelledby="name" />
            </FormControl>
            <FormMessage>{{ errorMessage }}</FormMessage>
        </FormItem>
    </FormField>

    <FormField name="city" v-slot="{ componentField, errorMessage }">
        <FormItem class="flex flex-row py-3">
            <FormLabel class="w-24" id="city">City</FormLabel>
            <FormControl>
                <Input type="text" v-bind="componentField" aria-labelledby="city" />
            </FormControl>
            <FormMessage>{{ errorMessage }}</FormMessage>
        </FormItem>
    </FormField>

    <FormField name="country" v-slot="{ componentField, errorMessage }">
        <FormItem class="flex flex-row py-3">
            <FormLabel class="w-24" id="country">Country</FormLabel>
            <FormControl>
                <Input type="text" v-bind="componentField" aria-labelledby="country" />
            </FormControl>
            <FormMessage>{{ errorMessage }}</FormMessage>
        </FormItem>
    </FormField>

    <FormField name="latitude" v-slot="{ componentField, errorMessage }">
        <FormItem class="flex flex-row py-3">
            <FormLabel class="w-24" id="latitude">Latitude</FormLabel>
            <FormControl>
                <Input type="text" v-bind="componentField" aria-labelledby="latitude" />
            </FormControl>
            <FormMessage>{{ errorMessage }}</FormMessage>
        </FormItem>
    </FormField>

    <FormField name="longitude" v-slot="{ componentField, errorMessage }">
        <FormItem class="flex flex-row py-3">
            <FormLabel class="w-24" id="longitude">Longitude</FormLabel>
            <FormControl>
                <Input type="text" v-bind="componentField" aria-labelledby="longitude" />
            </FormControl>
            <FormMessage>{{ errorMessage }}</FormMessage>
        </FormItem>
    </FormField>

    <div class="py-3 flex flex-row">
        <div class="spacer w-30"></div>
        <slot name="actions">
            <button type="submit">
                {{ submitLabel ?? 'Save' }}
            </button>
        </slot>
    </div>
</template>
