<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/vue3';
import { show, create, edit } from '@/routes/dashboard/theatre';
import { Button } from '@/components/ui/button';
import { route } from 'ziggy-js'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
];

defineProps({
    theatres: {
        type: Object,
        required: true,
    },
    filters: {
        type: Object,
        default: () => ({}),
    }
})

const onDelete = (id: number) => {
    if(confirm("This action cannot be undone. Are you sure you want to proceed?")) {
        router.delete(`/theatre/${id}`, {
            preserveScroll: true,
            onSuccess: () => {

            }
        })
    }
}
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <h1 class="text-xl py-3">Theatres</h1>
            <Button variant="default">
                <Link :href="create().url" alt="Create new theatre">
                    <fa icon="fa-solid fa-square-plus" /> New
                </Link>
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
                    <tr v-for="theatre in theatres.data" :key="theatre.id" class="border-1">
                        <td class="w-12">
                            <Button variant="link">
                                <Link :href="edit(theatre.id).url" :alt="`Edit theatre ${theatre.name}`"><fa icon="fa-solid fa-pen-to-square" /></Link>
                            </Button>
                        </td>
                        <td class="">
                            <Link :href="show.url(theatre.id)">{{ theatre.name }}</Link>
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
