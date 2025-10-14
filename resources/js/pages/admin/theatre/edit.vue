<script setup lang="ts">
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/vue3';
import { useForm } from 'vee-validate';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { toast } from 'vue-sonner';
import { route } from 'ziggy-js';

const props = defineProps<{
    theatre: App.Data.TheatreData,
}>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: route('admin'),
    },
    {
        title: 'Theatres',
        href: route('admin.theatre.index'),
    },
    {
        title: props.theatre.name,
        href: route('admin.theatre.show', props.theatre.id),
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
    initialValues: props.theatre,
});

const submit = handleSubmit((values) => {
    router.put(`/theatre/${props.theatre.id}`, values, {
        preserveScroll: true,
        onError: (errors) => {
            toast.error(JSON.stringify(errors));
        },
        onSuccess: () => {
            toast.success('Theatre edited!');
        },
    });
});

const onDelete = () => {
    if (confirm('This action cannot be undone. Are you sure you want to proceed?')) {
        router.delete(`/theatre/${props.theatre.id}`, {
            preserveScroll: true,
            onSuccess: () => {},
        });
    }
};
</script>

<template>
    <Head title="Admin" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="py-3">
                <h1 class="mr-3 inline py-3 text-xl">
                    Editing theatre: <strong>{{ theatre.name }}</strong> (id: {{ theatre.id }})
                </h1>
            </div>
            <form @submit.prevent="submit">
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

                <div class="flex flex-row py-3">
                    <div class="spacer w-30"></div>
                    <Button type="submit" variant="default" class="">Save</Button>
                    <div class="spacer w-full"></div>
                    <Button type="button" @click="onDelete" variant="destructive" class="">Delete</Button>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
