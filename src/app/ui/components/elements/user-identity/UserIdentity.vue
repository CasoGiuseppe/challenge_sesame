<template>
    <figure class="user-identity">
        <!-- @slot Image: slot to show user identity photo -->
        <slot name="image" />
    </figure>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types';
import { type PropType } from 'vue';
defineProps({
  /**
   * Set the unique id of the ui user identity
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'userId'
  },
})
</script>
<style src="./UserIdentity.scss" lang="scss"></style>