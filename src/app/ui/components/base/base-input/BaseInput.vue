<template>
  <label class="base-input">
    <input />
  </label>
</template>
<script setup lang="ts">
import type { UniqueId } from '@/app/ui/types';
import type { PropType } from 'vue';
import { Types } from './types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';

const props = defineProps({
  /**
   * Set the unique id of the ui input
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'inputID'
  },

  /**
   * v-model value
   */
  proxyValue: {
    type: String as PropType<string>
  },

  /**
   * Set the type of input field [text, search]
   */
  type: {
    type: String as PropType<Types>,
    default: Types.TEXT,
    validator: (prop: Types) => ensureValueCollectionExists({ collection: Types, value: prop })
  }
});
</script>
