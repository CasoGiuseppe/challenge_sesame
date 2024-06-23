<template>
    <RouterLink
        v-if="isInternalLink"
        v-bind="$attrs"
        :to="$attrs.to ?? { path: '/'}"
        class="component-is"
    >
        <slot />
    </RouterLink>
    <component
        v-else
        :is="is"
        class="component-is"
    >
        <slot />
    </component>
</template>
<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { Is } from './types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';

const { is } = defineProps({
    is: {
        type: String as PropType<Is>,
        default: Is.BUTTON,
        validator: (prop: Is) => ensureValueCollectionExists({ collection: Is, value: prop })
    },
})
const isInternalLink = computed(() => is === Is.ROUTERLINK )
</script>
<style src="./ComponentIs.scss" lang="scss"></style>