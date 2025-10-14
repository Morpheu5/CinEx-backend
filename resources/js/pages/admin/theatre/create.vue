<script setup lang="ts">
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel, FormMessage,
} from '@/components/ui/form';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/vue3';
import { useForm } from 'vee-validate';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { route } from 'ziggy-js'
import * as z from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: route('admin'),
    },
    {
        title: 'Theatres',
        href: route('admin.theatre.index'),
    },
];

const numRequiredLat = z.preprocess(
    (v) => (v === '' || v === null ? undefined : v),
    z.coerce.number().min(-90).max(90) // adjust ranges per field
);
const numRequiredLon = z.preprocess(
    (v) => (v === '' || v === null ? undefined : v),
    z.coerce.number().min(-180).max(180) // adjust ranges per field
);

const schema = z.object({
    name: z.string().nonempty(),
    city: z.string().nonempty(),
    country: z.string().nonempty(),
    latitude: numRequiredLat,
    longitude: numRequiredLon,
})

type TheatreSchema = z.infer<typeof schema>;
const { handleSubmit } = useForm<TheatreSchema>({
    validationSchema: toTypedSchema(schema),
});

const onSubmit = handleSubmit((values) => {
    router.post(route('api.v1.theatre.store'), values, {
        preserveScroll: true,
        onError: (errors) => {
            console.log(errors)
        },
        onSuccess: () => {
            console.log("Awesome!", { values })
        }
    })
})
</script>

<template>
    <Head title="Admin" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="py-3">
                <h1 class="text-xl py-3 inline mr-3">New theatre</h1>
            </div>
            <form @submit="onSubmit">
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
                    <Button type="submit" variant="default" class="">Save</Button>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
