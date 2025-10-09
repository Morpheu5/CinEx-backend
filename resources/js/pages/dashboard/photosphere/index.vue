<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Photospheres',
        href: route('dashboard.photosphere.index'),
    }
];

defineProps({
    photospheres: Array<App.Data.PhotosphereData>,
})

const onDelete = (id: number) => {
    if(confirm("This action cannot be undone. Are you sure you want to proceed?")) {
        router.delete(route('photosphere.destroy', { photosphere: id }), {
            preserveScroll: true,
            onSuccess: () => {
                toast("Photosphere deleted!");
            }
        })
    }
}
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <h1 class="text-xl py-3">Photospheres</h1>
            <Button variant="default">
                <a :href="route('dashboard.photosphere.create')" title="Create new photosphere">
                    <fa icon="fa-solid fa-square-plus" /> New
                </a>
            </Button>
            <table class="w-full my-3 [&>*>tr>*]:px-4 [&>*>tr>*]:py-3">
                <thead class="bg-slate-200 dark:bg-slate-800 text-left">
                    <tr>
                        <th class="w-12"></th>
                        <th class="">Photosphere</th>
                        <th class="w-12"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="photosphere in photospheres" :key="photosphere.id" class="border-1">
                        <td class="w-12">
                            <Button variant="link">
                                <a :href="route('dashboard.photosphere.edit', photosphere.id)" :title="`Edit photosphere ${photosphere.name}`"><fa icon="fa-solid fa-pen-to-square" /></a>
                            </Button>
                        </td>
                        <td class="">
                            <a :href="route('dashboard.photosphere.show', photosphere.id)">{{ photosphere.name }}</a>
                        </td>
                        <td class="w-12">
                            <Button type="button" @click="() => onDelete(photosphere.id)" variant="destructive" :alt="`Delete photosphere ${photosphere.name}`">
                                <fa icon="fa-solid fa-trash-can" />
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AppLayout>
</template>
