<script setup lang="ts">
import { computed, toRef } from 'vue'
import { useObjectUrl } from '@vueuse/core'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { route } from 'ziggy-js';

// Props: either pass `file` (pending) OR `photo` (existing)
const props = defineProps<{
    file?: File
    photo?: { id: number; path: string; description: string }
    showDescription?: boolean
}>()

const emit = defineEmits<{
    (e: 'remove'): void
    (e: 'description-change', value: string): void
}>()

// reactive URL depending on which prop is passed
const localUrl = props.file ? useObjectUrl(toRef(props, 'file')) : null
const imageUrl = computed(() =>
    props.file
        ? localUrl?.value
        : props.photo
            ? route('photo.image', props.photo.id) // props.photo.path
            : ''
)

const onDescriptionInput = (e: Event) => {
    emit('description-change', (e.target as HTMLInputElement).value)
}
</script>

<template>
    <div class="space-y-2 rounded border p-2">
        <img
            v-if="imageUrl"
            :src="imageUrl"
            class="aspect-square w-full rounded object-cover"
            alt=""
        />

        <Input
            v-if="showDescription && photo"
            :model-value="photo.description ?? ''"
            @change="onDescriptionInput"
            placeholder="Description…"
        />

        <Button type="button" variant="destructive" class="w-full" @click="$emit('remove')">
            Remove
        </Button>
    </div>
</template>
