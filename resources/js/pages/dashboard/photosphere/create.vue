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
    photosphere: {
        type: Object,
        required: true,
    },
    theatres: {
        type: Array
    },
})

const { defineField, handleSubmit } = useForm()
const [ name, nameProp ] = defineField('name');
const [ theatreID, theatreIDProp ] = defineField('theatre_id');

const onSubmit = handleSubmit((values) => {
    debugger;
    router.post(`/photosphere`, values, {
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
                <h1 class="text-xl py-3 inline mr-3">New photosphere:</h1>
            </div>
            <form @submit="onSubmit">
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
                                <option v-for="t in props.theatres" :key="t.id" :value="t.id">
                                {{ t.name }}
                                </option>
                            </select>
                        </FormControl>
                    </FormItem>
                </FormField>

                <FormField name="name">
                    <FormItem class="flex flex-row py-3">
                        <FormLabel class="w-24" id="name">Name</FormLabel>
                        <FormControl>
                            <Input type="text" v-bind="nameProp" v-model="name" aria-labelledby="name" />
                        </FormControl>
                    </FormItem>
                </FormField>

                <FormField name="file" v-slot="{ handleChange }">
                    <FormItem class="flex flex-row py-3">
                        <FormLabel class="w-24" id="file">File</FormLabel>
                        <FormControl>
                            <Input type="file" @change="handleChange" aria-labelledby="file" />
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
