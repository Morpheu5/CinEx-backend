<template>
    <dialog ref="dialogEl" class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-5xl rounded-xl bg-black/60 backdrop-blur-sm p-0 shadow-3xl">
        <div class="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div class="text-lg ml-17 font-medium text-slate-100">
                {{ title ?? 'Gallery' }}
            </div>
            <button class="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-300 hover:bg-white/10 hover:text-white" @click="close" alt="Close the gallery">
                <X class="h-5 w-5" aria-hidden="true" />
            </button>
        </div>

        <div class="flex items-stretch">
            <button
                class="w-16 shrink-0 border-r border-white/10 bg-white/5 text-white/80 hover:bg-white/12 hover:text-white disabled:opacity-30"
                :disabled="index <= 0"
                @click="prev"
            >
                <ChevronLeft class="h-8 w-8 mx-auto" aria-hidden="true" alt="Previous picture" />
            </button>

            <div class="flex-1 p-4">
                <div class="mx-auto max-w-4xl text-center">
                    <img v-if="current?.url" :src="current.url" alt="" class="mx-auto max-h-[70vh] w-auto rounded-md" />
                    <div v-if="current?.description" class="mx-auto mt-4 max-w-3xl text-left text-sm text-slate-200">
                        {{ current.description }}
                    </div>
                </div>
            </div>

            <button
                class="w-16 shrink-0 border-l border-white/10 bg-white/5 text-white/80 hover:bg-white/12 hover:text-white disabled:opacity-30"
                :disabled="index >= images.length - 1"
                @click="next"
            >
                <ChevronRight class="h-8 w-8 mx-auto" aria-hidden="true" alt="Next picture" />
            </button>
        </div>
    </dialog>
</template>

<script setup lang="ts">
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next';
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
    background: rgba(0, 0, 0, 0.7);
}
</style>
