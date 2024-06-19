<template>
    <ComponentIs
        :key="is"
        :id="id"
        aria-labelledby="ui-item-label"
        :is="is"
        class="base-item-menu"
        data-testID="ui-item-test"
    >
        item menu
    </ComponentIs>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types';
import { type PropType } from 'vue';
import ComponentIs from '@app/ui/components/abstracts/component-is/ComponentIs.vue';
import { Is } from '@app/ui/components/abstracts/component-is/types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';

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
})
</script>