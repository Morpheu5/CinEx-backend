<template>
    <dialog ref="dialogEl" class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-5xl rounded-xl bg-white p-0 shadow-xl">
        <div class="flex items-center justify-between border-b px-4 py-3">
            <div class="text-sm font-medium text-slate-700">
                {{ title ?? 'Gallery' }}
            </div>
            <button class="rounded-md px-2 py-1 text-slate-500 hover:bg-slate-100" @click="close">
                Close
            </button>
        </div>

        <div class="flex items-stretch">
            <button
                class="w-16 shrink-0 border-r text-slate-500 hover:bg-slate-50 disabled:opacity-30"
                :disabled="index <= 0"
                @click="prev"
            >
                ‹
            </button>

            <div class="flex-1 p-6">
                <div class="mx-auto max-w-4xl text-center">
                    <img v-if="current?.url" :src="current.url" alt="" class="mx-auto max-h-[70vh] w-auto rounded-lg" />
                    <div v-if="current?.description" class="mx-auto mt-4 max-w-3xl text-left text-sm text-slate-700">
                        {{ current.description }}
                    </div>
                </div>
            </div>

            <button
                class="w-16 shrink-0 border-l text-slate-500 hover:bg-slate-50 disabled:opacity-30"
                :disabled="index >= images.length - 1"
                @click="next"
            >
                ›
            </button>
        </div>
    </dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

export interface GalleryImage {
    url: string;
    description?: string;
}

const dialogEl = ref<HTMLDialogElement | null>(null);
const images = ref<GalleryImage[]>([]);
const index = ref(0);
const title = ref<string | null>(null);

const current = computed(() => images.value[index.value] ?? null);

const open = (payload: { title?: string; images: GalleryImage[]; startIndex?: number }) => {
    title.value = payload.title ?? null;
    images.value = payload.images ?? [];
    index.value = payload.startIndex ?? 0;
    dialogEl.value?.showModal();
};

const close = () => dialogEl.value?.close();
const prev = () => (index.value = Math.max(0, index.value - 1));
const next = () => (index.value = Math.min(images.value.length - 1, index.value + 1));

defineExpose({
    open,
    close,
});
</script>

<style scoped>
dialog::backdrop {
    background: rgba(0, 0, 0, 0.6);
}
</style>
