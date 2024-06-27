<template>
    <section
        v-if="state"
        class="loading-is"
        :data-message="message"
    />
    <slot v-else />
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
defineProps({
    state: {
        type: Boolean as PropType<Boolean>,
        default: false,
    },
    message: {
        type: String as PropType<String>,
        default: 'Please wait...',
    },
})
</script>
<style src="./LoadingIs.scss" lang="scss"></style>