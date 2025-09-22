<script setup lang="ts">
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/vue3';
import { useForm } from 'vee-validate';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
// import { toTypedSchema } from '@vee-validate/zod';
// import * as z from 'zod';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

const props = defineProps({
    theatre: {
        type: Object,
        required: true,
    }
})

const { defineField, handleSubmit } = useForm()
const [ name, nameProp ] = defineField('name');
const [ city, cityProp ] = defineField('city');
const [ country, countryProp ] = defineField('country');
const [ latitude, latitudeProp ] = defineField('latitude');
const [ longitude, longitudeProp ] = defineField('longitude');

const onSubmit = handleSubmit((values) => {
    router.post(`/theatre`, values, {
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
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="py-3">
                <h1 class="text-xl py-3 inline mr-3">New theatre:</h1>
            </div>
            <form @submit="onSubmit">
                <FormField name="name">
                    <FormItem class="flex flex-row py-3">
                        <FormLabel class="w-24" id="name">Name</FormLabel>
                        <FormControl>
                            <Input type="text" v-bind="nameProp" v-model="name" aria-labelledby="name" />
                        </FormControl>
                    </FormItem>
                </FormField>

                <FormField name="city">
                    <FormItem class="flex flex-row py-3">
                        <FormLabel class="w-24" id="city">City</FormLabel>
                        <FormControl>
                            <Input type="text" v-bind="cityProp" v-model="city" aria-labelledby="city" />
                        </FormControl>
                    </FormItem>
                </FormField>

                <FormField name="country">
                    <FormItem class="flex flex-row py-3">
                        <FormLabel class="w-24" id="country">Country</FormLabel>
                        <FormControl>
                            <Input type="text" v-bind="countryProp" v-model="country" aria-labelledby="country" />
                        </FormControl>
                    </FormItem>
                </FormField>

                <FormField name="latitude">
                    <FormItem class="flex flex-row py-3">
                        <FormLabel class="w-24" id="latitude">Latitude</FormLabel>
                        <FormControl>
                            <Input type="text" v-bind="latitudeProp" v-model="latitude" aria-labelledby="latitude" />
                        </FormControl>
                    </FormItem>
                </FormField>

                <FormField name="longitude">
                    <FormItem class="flex flex-row py-3">
                        <FormLabel class="w-24" id="longitude">Longitude</FormLabel>
                        <FormControl>
                            <Input type="text" v-bind="longitudeProp" v-model="longitude" aria-labelledby="longitude" />
                        </FormControl>
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
