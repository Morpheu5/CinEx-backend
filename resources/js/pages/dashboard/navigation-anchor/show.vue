<script setup lang="ts">
const props = defineProps<{ anchor: any }>();
</script>
<template>
    <div class="space-y-2">
        <h1 class="text-2xl font-semibold">{{ props.anchor.name }}</h1>
        <p>Source: #{{ props.anchor.photosphereId }}</p>
        <p>Target: #{{ props.anchor.target?.id ?? props.anchor.targetPhotosphereId }} — {{ props.anchor.target?.name }}</p>
        <p>Lon/Lat: {{ props.anchor.longitude }}, {{ props.anchor.latitude }}</p>
    </div>
</template>
