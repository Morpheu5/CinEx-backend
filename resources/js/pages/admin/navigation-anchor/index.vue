<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
import type { BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: route('admin'),
    },
    {
        title: 'Navigation Anchors',
        href: route('admin.navigation-anchor.index'),
    },
];

const props = defineProps<{
    anchors: App.Data.NavigationAnchorData[];
    photospheres: App.Data.PhotosphereData[];
}>();

const onDelete = (id: number) => {
    if (confirm('This action cannot be undone. Are you sure you want to proceed?')) {
        router.delete(route('navigation-anchor.destroy', { navigation_anchor: id }), {
            preserveScroll: true,
            onSuccess: () => {
                toast('Navigation anchor deleted!');
            },
        });
    }
};
</script>

<template>
    <Head title="Admin" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="">
                <h1 class="py-3 text-xl">Navigation Anchors</h1>
                <Button asChild>
                    <Link class="" :href="route('admin.navigation-anchor.create')"> <fa icon="fa-solid fa-pen-to-square" /> New </Link>
                </Button>
            </div>

            <table class="my-3 w-full [&>*>tr>*]:px-4 [&>*>tr>*]:py-3">
                <thead>
                    <tr class="bg-slate-200 text-left dark:bg-slate-800">
                        <th class="w-12"></th>
                        <th class="text-left">Name</th>
                        <th class="text-left">Source</th>
                        <th class="text-left">Target</th>
                        <th class="text-left">Lon, Lat</th>
                        <th class="text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="a in props.anchors" :key="a.id" class="border-t">
                        <td>
                            <Button asChild>
                                <Link :href="route('admin.navigation-anchor.edit', a.id)" class="underline">
                                    <fa icon="fa-solid fa-pen-to-square" />
                                </Link>
                            </Button>
                        </td>
                        <td class="">
                            <!--                            <Link :href="route('navigation-anchor.show', a.id)" >{{ a.name }}</Link>-->
                            {{ a.name }}
                        </td>
                        <td class="">
                            <Link :href="route('admin.photosphere.show', a.photosphere_id)">{{ a.photosphere?.name }}</Link>
                        </td>
                        <td class="">
                            <span v-if="a.target"
                                ><Link :href="route('admin.photosphere.show', a.target.id)">{{ a.target.name }}</Link></span
                            >
                            <span v-else>#{{ a.target_photosphere_id }}</span>
                        </td>
                        <td class="">{{ a.longitude }}, {{ a.latitude }}</td>
                        <td class="w-12">
                            <Button
                                type="button"
                                @click="() => onDelete(a.id)"
                                variant="destructive"
                                :alt="`Delete photosphere ${a.name}`"
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
