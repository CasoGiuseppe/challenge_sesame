<template>
    <component
        :is="is"
        class="base-tab"
    >
        <!-- @slot Default: slot to show tab label -->
        <slot></slot>
    </component>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
defineProps({
  /**
   * Set commponent type
   */
  is: {
    type: String as PropType<string>,
    default: 'li'
  }
});
</script>
