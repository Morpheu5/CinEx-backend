<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: route('admin'),
    },
    {
        title: 'Photospheres',
        href: route('admin.photosphere.index'),
    },
];

defineProps({
    photospheres: Array<App.Data.PhotosphereData>,
});

const onDelete = (id: number) => {
    if (confirm('This action cannot be undone. Are you sure you want to proceed?')) {
        router.delete(route('api.v1.photosphere.destroy', { photosphere: id }), {
            preserveScroll: true,
            onSuccess: () => {
                toast('Photosphere deleted!');
            },
        });
    }
};
</script>

<template>
    <Head title="Admin" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <h1 class="py-3 text-xl">Photospheres</h1>
            <Button asChild>
                <Link :href="route('admin.photosphere.create')" title="Create new photosphere"><fa icon="fa-solid fa-square-plus" /> New</Link>
            </Button>
            <table class="my-3 w-full [&>*>tr>*]:px-4 [&>*>tr>*]:py-3">
                <thead class="bg-slate-200 text-left dark:bg-slate-800">
                    <tr>
                        <th class="w-12"></th>
                        <th class="">Photosphere</th>
                        <th class="">Theatre</th>
                        <th class="w-12"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="photosphere in photospheres" :key="photosphere.id" class="border-1">
                        <td class="w-12">
                            <Button>
                                <a :href="route('admin.photosphere.edit', photosphere.id)" :title="`Edit photosphere ${photosphere.name}`"
                                ><fa icon="fa-solid fa-pen-to-square"
                                /></a>
                            </Button>
                        </td>
                        <td class="">
                            <a :href="route('admin.photosphere.show', photosphere.id)">{{ photosphere.name }}</a>
                        </td>
                        <td class="">
                            <a :href="route('admin.theatre.show', photosphere.theatre_id)">{{ photosphere.theatre?.name }}</a>
                        </td>
                        <td class="w-12">
                            <Button
                                type="button"
                                @click="() => onDelete(photosphere.id)"
                                variant="destructive"
                                :alt="`Delete photosphere ${photosphere.name}`"
                            >
                                <fa icon="fa-solid fa-trash-can" />
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AppLayout>
</template>
