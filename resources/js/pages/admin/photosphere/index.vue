<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import { route } from 'ziggy-js';
import { computed, onMounted, ref, watch } from 'vue';

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

const props = defineProps({
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

type SortKey = 'name' | 'theatre';

const STORAGE_KEY = 'admin.photospheres.index.tableState.v1';

const filterName = ref('');
const filterTheatre = ref('');

const sortKey = ref<SortKey>('name');
const sortDir = ref<'asc' | 'desc' | null>(null);

const setSort = (key: SortKey) => {
    if (sortKey.value !== key) {
        sortKey.value = key;
        sortDir.value = 'asc';
        return;
    }

    if (sortDir.value === 'asc') sortDir.value = 'desc';
    else if (sortDir.value === 'desc') sortDir.value = null;
    else sortDir.value = 'asc';
};

const sortIconFor = (key: SortKey) => {
    if (sortKey.value !== key || sortDir.value === null) return '↕';
    return sortDir.value === 'asc' ? '↑' : '↓';
};

const visiblePhotospheres = computed(() => {
    const n = filterName.value.trim().toLowerCase();
    const t = filterTheatre.value.trim().toLowerCase();

    const filtered = props.photospheres.filter((p) => {
        const name = (p.name ?? '').toLowerCase();
        const theatre = (p.theatre?.name ?? '').toLowerCase();

        if (n && !name.includes(n)) return false;
        if (t && !theatre.includes(t)) return false;
        return true;
    });

    if (!sortDir.value) return filtered;

    const dir = sortDir.value === 'asc' ? 1 : -1;

    return [...filtered].sort((a, b) => {
        const av = sortKey.value === 'name'
            ? String(a.name ?? '').toLowerCase()
            : String(a.theatre?.name ?? '').toLowerCase();

        const bv = sortKey.value === 'name'
            ? String(b.name ?? '').toLowerCase()
            : String(b.theatre?.name ?? '').toLowerCase();

        return av.localeCompare(bv) * dir;
    });
});

onMounted(() => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;

        const state = JSON.parse(raw) as Partial<{
            filterName: string;
            filterTheatre: string;
            sortKey: SortKey;
            sortDir: 'asc' | 'desc' | null;
        }>;

        if (typeof state.filterName === 'string') filterName.value = state.filterName;
        if (typeof state.filterTheatre === 'string') filterTheatre.value = state.filterTheatre;

        if (state.sortKey === 'name' || state.sortKey === 'theatre') sortKey.value = state.sortKey;
        if (state.sortDir === 'asc' || state.sortDir === 'desc' || state.sortDir === null) {
            sortDir.value = state.sortDir;
        }
    } catch {}
});

watch(
    [filterName, filterTheatre, sortKey, sortDir],
    () => {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                    filterName: filterName.value,
                    filterTheatre: filterTheatre.value,
                    sortKey: sortKey.value,
                    sortDir: sortDir.value,
                })
            );
        } catch {}
    }
);
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
                        <th>
                            <button type="button" class="inline-flex items-center gap-2" @click="() => setSort('name')">
                                <span>Photosphere</span>
                                <span class="text-xs opacity-60">{{ sortIconFor('name') }}</span>
                            </button>
                        </th>
                        <th>
                            <button type="button" class="inline-flex items-center gap-2" @click="() => setSort('theatre')">
                                <span>Theatre</span>
                                <span class="text-xs opacity-60">{{ sortIconFor('theatre') }}</span>
                            </button>
                        </th>
                        <th class="w-12"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-1 bg-slate-50 dark:bg-slate-900/40">
                        <td></td>
                        <td>
                            <div class="relative">
                                <input
                                    v-model="filterName"
                                    type="text"
                                    placeholder="Filter…"
                                    class="w-full rounded border border-slate-300 bg-white px-3 py-1 text-sm dark:border-slate-700 dark:bg-slate-950"
                                />
                                <button
                                    v-if="filterName"
                                    type="button"
                                    class="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                                    @click="filterName = ''"
                                    aria-label="Clear filter"
                                >×</button>
                            </div>
                        </td>
                        <td>
                            <div class="relative">
                                <input
                                    v-model="filterTheatre"
                                    type="text"
                                    placeholder="Filter…"
                                    class="w-full rounded border border-slate-300 bg-white px-3 py-1 text-sm dark:border-slate-700 dark:bg-slate-950"
                                />
                                <button
                                    v-if="filterTheatre"
                                    type="button"
                                    class="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                                    @click="filterTheatre = ''"
                                    aria-label="Clear filter"
                                >×</button>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                    <tr v-for="photosphere in visiblePhotospheres" :key="photosphere.id" class="border-1">
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
