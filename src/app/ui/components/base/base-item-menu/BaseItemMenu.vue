<template>
    <ComponentIs
        :key="is"
        :id="id"
        :is="is"
        :selected="selected"
        :to="to"
        :disabled="disabled"
        :aria-disabled="disabled"
        aria-labelledby="ui-item-label"
        class="base-item-menu"
        data-testID="ui-item-test"
    >
        <!-- @slot Default: slot to show item label -->
        <slot id="ui-item-label" />
    </ComponentIs>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types';
import { type PropType } from 'vue';
import ComponentIs from '@app/ui/components/abstracts/component-is/ComponentIs.vue';
import { Is } from '@app/ui/components/abstracts/component-is/types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';
import type { RouterTo } from './types';

const props = defineProps({
  /**
   * Set the unique id of the ui menu item
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'buttonId'
  },

  /**
   * Set button type [button, router-link]
   */
  is: {
    type: String as PropType<Is>,
    default: Is.BUTTON,
    validator: (prop: Is) =>
      ensureValueCollectionExists({ collection: Is, value: prop })
  },

  /**
   * Set item selected state
   */
  selected: {
    type: Boolean as PropType<Boolean>,
    default: false
  },

  /**
   * Set the disabled item state
   */
   disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },

  /**
   * Set the router-to object for navigation
   */
   to: {
    type: Object as PropType<RouterTo>,
    default: () => ({ path: '/' })
  }
})
</script>
<style src="./BaseItemMenu.scss" lang="scss"></style>