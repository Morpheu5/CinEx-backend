<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
import type { BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import { computed, onMounted, ref, watch } from 'vue';

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
        router.delete(route('api.v1.navigation-anchor.destroy', { navigation_anchor: id }), {
            preserveScroll: true,
            onSuccess: () => {
                toast('Navigation anchor deleted!');
            },
        });
    }
};

type SortKey = 'name' | 'source' | 'target';

const STORAGE_KEY = 'admin.navigation-anchors.index.tableState.v1';

const filterName = ref('');
const filterSource = ref('');
const filterTarget = ref('');

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

const visibleAnchors = computed(() => {
    const n = filterName.value.trim().toLowerCase();
    const s = filterSource.value.trim().toLowerCase();
    const t = filterTarget.value.trim().toLowerCase();

    const filtered = props.anchors.filter((a) => {
        const name = (a.name ?? '').toLowerCase();
        const source = (a.photosphere?.name ?? '').toLowerCase();
        const target = (a.target?.name ?? String(a.target_photosphere_id ?? '')).toLowerCase();

        if (n && !name.includes(n)) return false;
        if (s && !source.includes(s)) return false;
        if (t && !target.includes(t)) return false;
        return true;
    });

    if (!sortDir.value) return filtered;

    const dir = sortDir.value === 'asc' ? 1 : -1;

    return [...filtered].sort((a, b) => {
        const av = sortKey.value === 'name'
            ? String(a.name ?? '').toLowerCase()
            : sortKey.value === 'source'
                ? String(a.photosphere?.name ?? '').toLowerCase()
                : String(a.target?.name ?? a.target_photosphere_id ?? '').toLowerCase();

        const bv = sortKey.value === 'name'
            ? String(b.name ?? '').toLowerCase()
            : sortKey.value === 'source'
                ? String(b.photosphere?.name ?? '').toLowerCase()
                : String(b.target?.name ?? b.target_photosphere_id ?? '').toLowerCase();

        return av.localeCompare(bv) * dir;
    });
});

onMounted(() => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;

        const state = JSON.parse(raw) as Partial<{
            filterName: string;
            filterSource: string;
            filterTarget: string;
            sortKey: SortKey;
            sortDir: 'asc' | 'desc' | null;
        }>;

        if (typeof state.filterName === 'string') filterName.value = state.filterName;
        if (typeof state.filterSource === 'string') filterSource.value = state.filterSource;
        if (typeof state.filterTarget === 'string') filterTarget.value = state.filterTarget;

        if (state.sortKey === 'name' || state.sortKey === 'source' || state.sortKey === 'target') {
            sortKey.value = state.sortKey;
        }
        if (state.sortDir === 'asc' || state.sortDir === 'desc' || state.sortDir === null) {
            sortDir.value = state.sortDir;
        }
    } catch {}
});

watch(
    [filterName, filterSource, filterTarget, sortKey, sortDir],
    () => {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                    filterName: filterName.value,
                    filterSource: filterSource.value,
                    filterTarget: filterTarget.value,
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
            <div class="">
                <h1 class="py-3 text-xl">Navigation Anchors</h1>
                <Button asChild>
                    <Link class="" :href="route('admin.navigation-anchor.create')"> <fa icon="fa-solid fa-square-plus" /> New </Link>
                </Button>
            </div>

            <table class="my-3 w-full [&>*>tr>*]:px-4 [&>*>tr>*]:py-3">
                <thead>
                    <tr class="bg-slate-200 text-left dark:bg-slate-800">
                        <th class="w-12"></th>
                        <th>
                            <button type="button" class="inline-flex items-center gap-2" @click="() => setSort('name')">
                                <span>Name</span>
                                <span class="text-xs opacity-60">{{ sortIconFor('name') }}</span>
                            </button>
                        </th>
                        <th>
                            <button type="button" class="inline-flex items-center gap-2" @click="() => setSort('source')">
                                <span>Source</span>
                                <span class="text-xs opacity-60">{{ sortIconFor('source') }}</span>
                            </button>
                        </th>
                        <th>
                            <button type="button" class="inline-flex items-center gap-2" @click="() => setSort('target')">
                                <span>Target</span>
                                <span class="text-xs opacity-60">{{ sortIconFor('target') }}</span>
                            </button>
                        </th>
                        <th class="text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t bg-slate-50 dark:bg-slate-900/40">
                        <td></td>
                        <td>
                            <div class="relative">
                                <input v-model="filterName" type="text" placeholder="Filter…" class="w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm dark:border-slate-700 dark:bg-slate-950" />
                                <button v-if="filterName" type="button" class="absolute inset-y-0 right-2 flex items-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200" @click="filterName = ''">×</button>
                            </div>
                        </td>
                        <td>
                            <div class="relative">
                                <input v-model="filterSource" type="text" placeholder="Filter…" class="w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm dark:border-slate-700 dark:bg-slate-950" />
                                <button v-if="filterSource" type="button" class="absolute inset-y-0 right-2 flex items-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200" @click="filterSource = ''">×</button>
                            </div>
                        </td>
                        <td>
                            <div class="relative">
                                <input v-model="filterTarget" type="text" placeholder="Filter…" class="w-full rounded border border-slate-300 bg-white px-2 py-1 text-sm dark:border-slate-700 dark:bg-slate-950" />
                                <button v-if="filterTarget" type="button" class="absolute inset-y-0 right-2 flex items-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200" @click="filterTarget = ''">×</button>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                    <tr v-for="a in visibleAnchors" :key="a.id" class="border-t">
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
