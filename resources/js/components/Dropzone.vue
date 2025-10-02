<template>
    <div
        class="cursor-pointer rounded-xl border-2 border-dashed p-6 text-center select-none"
        @dragover.prevent="onDragOver"
        @dragleave.prevent="onDragLeave"
        @drop.prevent="onDrop"
        :class="dragging ? 'border-primary/60 bg-primary/5' : 'border-muted-foreground/30'"
        @click="pick"
    >
        <input ref="input" type="file" :multiple="multiple" :accept="accept" class="hidden" @change="onChange" />
        <slot>
            <p class="text-sm">Drag & drop photos here, or click to browse</p>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ multiple?: boolean; accept?: string }>();
const emit = defineEmits<{ (e: 'files', files: File[]): void }>();

const input = ref<HTMLInputElement | null>(null);
const dragging = ref(false);

function pick() {
    input.value?.click();
}
function onChange(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.files) emit('files', Array.from(target.files));
    target.value = '';
}
function onDragOver() {
    dragging.value = true;
}
function onDragLeave() {
    dragging.value = false;
}
function onDrop(e: DragEvent) {
    dragging.value = false;
    if (e.dataTransfer?.files?.length) emit('files', Array.from(e.dataTransfer.files));
}
</script>
