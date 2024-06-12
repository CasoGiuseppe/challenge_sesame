<template>
  <component :is="is"></component>
</template>
<script setup lang="ts">
import type { UniqueId } from '@/app/ui/types';
import type { PropType } from 'vue';
import { ComponentIs } from './types';
import { ensureValueCollectionExists } from '@/app/ui/validators/useCustomValidator';

defineProps({
  /**
   * Set the unique id of the ui button
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'buttonId'
  },

  /**
   * Set button type [button, anchor]
   */
  is: {
    type: String as PropType<ComponentIs>,
    default: ComponentIs.BUTTON,
    validator: (prop: ComponentIs) => ensureValueCollectionExists({ collection: ComponentIs, value: prop})
  },
})
</script>
