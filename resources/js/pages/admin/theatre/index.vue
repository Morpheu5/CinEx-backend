<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { route } from 'ziggy-js'

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

defineProps<{
    theatres: Array<App.Data.TheatreData>,
}>()

const onDelete = (id: number) => {
    if(confirm("This action cannot be undone. Are you sure you want to proceed?")) {
        router.delete(route('api.v1.theatre.destroy', id), {
            preserveScroll: true,
            onSuccess: () => {

            }
        })
    }
}
</script>

<template>
    <Head title="Admin" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <h1 class="text-xl py-3">Theatres</h1>
            <Button variant="default">
                <a :href="route('admin.theatre.create')" title="Create new theatre">
                    <fa icon="fa-solid fa-square-plus" /> New
                </a>
            </Button>
            <table class="w-full my-3 [&>*>tr>*]:px-4 [&>*>tr>*]:py-3">
                <thead class="bg-slate-200 dark:bg-slate-800 text-left">
                    <tr>
                        <th class="w-12"></th>
                        <th class="">Name</th>
                        <th class="w-48">City</th>
                        <th class="w-24">Country</th>
                        <th class="w-12"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="theatre in theatres" :key="theatre.id" class="border-1">
                        <td class="w-12">
                            <Button variant="link">
                                <a :href="route('admin.theatre.edit', theatre.id)" :alt="`Edit theatre ${theatre.name}`"><fa icon="fa-solid fa-pen-to-square" /></a>
                            </Button>
                        </td>
                        <td class="">
                            <a :href="route('admin.theatre.show', theatre.id)">{{ theatre.name }}</a>
                        </td>
                        <td class="w-48">{{ theatre.city }}</td>
                        <td class="w-24">{{ theatre.country }}</td>
                        <td class="w-12">
                            <Button type="button" @click="() => onDelete(theatre.id)" variant="destructive" :alt="`Delete theatre ${theatre.name}`">
                                <fa icon="fa-solid fa-trash-can" />
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AppLayout>
</template>
