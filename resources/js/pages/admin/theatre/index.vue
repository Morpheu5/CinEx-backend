<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { route } from 'ziggy-js';

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

const props = defineProps<{
    theatres: Array<App.Data.TheatreData>;
}>();

const onDelete = (id: number) => {
    if (confirm('This action cannot be undone. Are you sure you want to proceed?')) {
        router.delete(route('api.v1.theatre.destroy', id), {
            preserveScroll: true,
            onSuccess: () => {},
        });
    }
};

type SortKey = 'name' | 'city' | 'country';

const STORAGE_KEY = 'admin.theatres.index.tableState.v1';

const filterName = ref('');
const filterCity = ref('');
const filterCountry = ref('');

const sortKey = ref<SortKey>('name');
const sortDir = ref<'asc' | 'desc' | null>(null);

const setSort = (key: SortKey) => {
    if (sortKey.value !== key) {
        sortKey.value = key;
        sortDir.value = 'asc';
        return;
    }

    if (sortDir.value === 'asc') {
        sortDir.value = 'desc';
    } else if (sortDir.value === 'desc') {
        sortDir.value = null;
    } else {
        sortDir.value = 'asc';
    }
};

const sortIconFor = (key: SortKey) => {
    if (sortKey.value !== key || sortDir.value === null) return '↕';
    return sortDir.value === 'asc' ? '↑' : '↓';
};

const visibleTheatres = computed(() => {
    const n = filterName.value.trim().toLowerCase();
    const c = filterCity.value.trim().toLowerCase();
    const co = filterCountry.value.trim().toLowerCase();

    const filtered = props.theatres.filter((t) => {
        const name = (t.name ?? '').toLowerCase();
        const city = (t.city ?? '').toLowerCase();
        const country = (t.country ?? '').toLowerCase();

        if (n && !name.includes(n)) return false;
        if (c && !city.includes(c)) return false;
        if (co && !country.includes(co)) return false;
        return true;
    });

    if (!sortDir.value) return filtered;

    const dir = sortDir.value === 'asc' ? 1 : -1;
    const key = sortKey.value;

    return [...filtered].sort((a, b) => {
        const av = String((a as any)[key] ?? '').toLowerCase();
        const bv = String((b as any)[key] ?? '').toLowerCase();
        return av.localeCompare(bv) * dir;
    });
});

onMounted(() => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;

        const state = JSON.parse(raw) as Partial<{
            filterName: string;
            filterCity: string;
            filterCountry: string;
            sortKey: SortKey;
            sortDir: 'asc' | 'desc' | null;
        }>;

        if (typeof state.filterName === 'string') filterName.value = state.filterName;
        if (typeof state.filterCity === 'string') filterCity.value = state.filterCity;
        if (typeof state.filterCountry === 'string') filterCountry.value = state.filterCountry;

        if (state.sortKey === 'name' || state.sortKey === 'city' || state.sortKey === 'country') {
            sortKey.value = state.sortKey;
        }
        if (state.sortDir === 'asc' || state.sortDir === 'desc' || state.sortDir === null) {
            sortDir.value = state.sortDir;
        }
    } catch {
        // ignore corrupted storage
    }
});

watch(
    [filterName, filterCity, filterCountry, sortKey, sortDir],
    () => {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                    filterName: filterName.value,
                    filterCity: filterCity.value,
                    filterCountry: filterCountry.value,
                    sortKey: sortKey.value,
                    sortDir: sortDir.value,
                })
            );
        } catch {
            // ignore quota/private mode errors
        }
    },
    { deep: false }
);
</script>

<template>
    <Head title="Admin" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <h1 class="py-3 text-xl">Theatres</h1>
            <Button asChild>
                <Link :href="route('admin.theatre.create')" title="Create new theatre"> <fa icon="fa-solid fa-square-plus" /> New </Link>
            </Button>
            <table class="my-3 w-full [&>*>tr>*]:px-4 [&>*>tr>*]:py-3">
                <thead class="bg-slate-200 text-left dark:bg-slate-800">
                    <tr>
                        <th class="w-12"></th>
                        <th>
                            <button type="button" class="inline-flex items-center gap-2" @click="() => setSort('name')">
                                <span>Name</span>
                                <span class="text-xs opacity-60">{{ sortIconFor('name') }}</span>
                            </button>
                        </th>
                        <th class="w-48">
                            <button type="button" class="inline-flex items-center gap-2" @click="() => setSort('city')">
                                <span>City</span>
                                <span class="text-xs opacity-60">{{ sortIconFor('city') }}</span>
                            </button>
                        </th>
                        <th class="w-24">
                            <button type="button" class="inline-flex items-center gap-2" @click="() => setSort('country')">
                                <span>Country</span>
                                <span class="text-xs opacity-60">{{ sortIconFor('country') }}</span>
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
                                    class="w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm dark:border-slate-700 dark:bg-slate-950"
                                />
                                <button
                                    v-if="filterName"
                                    type="button"
                                    class="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                                    @click="filterName = ''"
                                    aria-label="Clear filter"
                                >
                                    ×
                                </button>
                            </div>
                        </td>
                        <td>
                            <div class="relative">
                                <input
                                    v-model="filterCity"
                                    type="text"
                                    placeholder="Filter…"
                                    class="w-full rounded border border-slate-300 bg-white px-3 py-1 text-sm dark:border-slate-700 dark:bg-slate-950"
                                />
                                <button
                                    v-if="filterCity"
                                    type="button"
                                    class="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                                    @click="filterCity = ''"
                                    aria-label="Clear filter"
                                >
                                    ×
                                </button>
                            </div>
                        </td>
                        <td>
                            <div class="relative">
                                <input
                                    v-model="filterCountry"
                                    type="text"
                                    placeholder="Filter…"
                                    class="w-full rounded border border-slate-300 bg-white px-3 py-1 text-sm dark:border-slate-700 dark:bg-slate-950"
                                />
                                <button
                                    v-if="filterCountry"
                                    type="button"
                                    class="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                                    @click="filterCountry = ''"
                                    aria-label="Clear filter"
                                >
                                    ×
                                </button>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                    <tr v-for="theatre in visibleTheatres" :key="theatre.id" class="border-1">
                        <td class="w-12">
                            <Button>
                                <a :href="route('admin.theatre.edit', theatre.id)" :alt="`Edit theatre ${theatre.name}`"
                                    ><fa icon="fa-solid fa-pen-to-square"
                                /></a>
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
