<template>
    <section v-if="state">
        loading
    </section>
    <slot v-else />
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
defineProps({
    state: {
        type: Boolean as PropType<Boolean>,
        default: false,
    },
})
</script>