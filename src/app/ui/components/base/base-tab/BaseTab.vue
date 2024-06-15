<template>
  <ComponentIs
    :key="is"
    :is="is"
    class="base-tab"
    data-testID="ui-button-test"
    :selected="selected"
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

defineProps({
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
</script>

<style src="./BaseTab.scss" lang="scss"></style>
