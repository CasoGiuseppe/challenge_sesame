<template>
  <ComponentIs
    :key="is"
    :is="is"
    :aria-current="selected"
    :selected="selected"
    class="base-tab"
    data-testID="ui-tab-test"
    @click="handleEmitClick"
  >
    <!-- @slot Default: slot to show tab label -->
    <slot></slot>
  </ComponentIs>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
import type { UniqueId } from '@app/ui/types';
import ComponentIs from '@app/ui/components/abstracts/component-is/ComponentIs.vue';
import { Is } from '@app/ui/components/abstracts/component-is/types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';

const { id } = defineProps({
  /**
   * Set the unique id of the ui tab
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'tabId'
  },

  /**
   * Set commponent type
   */
   is: {
    type: String as PropType<Is>,
    default: Is.BUTTON,
    validator: (prop: Is) =>
      ensureValueCollectionExists({ collection: Is, value: prop })
  },

  /**
     * Handle selected state
     */
     selected: {
        type: Boolean as PropType<boolean>,
        default: false
    }
});

const emits = defineEmits(['send']);
const handleEmitClick = () => emits('send', { id });
</script>

<style src="./BaseTab.scss" lang="scss" scoped></style>
