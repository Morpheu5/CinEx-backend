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
import { toast } from 'vue-sonner';
import { nextTick, computed } from 'vue';
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
        type: Array,
        required: true,
    },
})

const { defineField, handleSubmit, setFieldValue } = useForm({
    initialValues: {
        ...props.photosphere,
        path: props.photosphere.path ?? '',
    },
})
const [ name, nameProp ] = defineField('name');
const [ path, pathProp ] = defineField('path');
const [ theatreID, theatreIDProp ] = defineField('theatre_id');

const onSubmit = handleSubmit((values) => {
    router.post(
        `/photosphere/${props.photosphere.id}`, { ...values, _method: 'put' },
        {
            preserveScroll: true,
            preserveState: false,
            onError: (errors) => {
                toast.error(JSON.stringify(errors))
            },
            onSuccess: () => {
                toast.success("Photosphere updated!");
            }
        }
    )
})

const removePath = async () => {
    setFieldValue('path', '')
    await nextTick()
}
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="py-3">
                <h1 class="text-xl py-3 inline mr-3">Editing: {{ photosphere.name }} ({{ photosphere.theatre.name }})</h1>
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
                            >
                                <option value="-1" disabled>Select a theatre...</option>
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

                <FormField v-if="!path" key="file" name="file" v-slot="{ handleChange }">
                    <FormItem class="flex flex-row py-3">
                        <FormLabel class="w-24" id="file">File</FormLabel>
                        <FormControl>
                            <Input
                                type="file"
                                @change="(e: Event) => handleChange((e.target as HTMLInputElement).files?.[0] ?? null)"
                                aria-labelledby="file"
                            />
                        </FormControl>
                    </FormItem>
                </FormField>

                <FormField v-else key="path" name="path">
                    <FormItem class="flex flex-row py-3">
                        <FormLabel class="w-24" id="path">Path</FormLabel>
                        <FormControl>
                            <Button type="button" @click="removePath" variant="destructive">
                                <fa icon="fa-solid fa-trash-can" />
                            </Button>
                            <span class="py-1 break-all">{{ path }}</span>
                            <input v-bind="pathProp" type="hidden" />
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
