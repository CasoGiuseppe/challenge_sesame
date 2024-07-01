<template>
  <ComponentIs
    :key="is"
    :is="is"
    :aria-current="selected"
    :selected="selected"
    :loading="isLoading"
    :disabled="isLoading"
    class="base-tab"
    data-testID="ui-tab-test"
    @click="handleEmitClick"
  >
    <!-- @slot Default: slot to show tab label -->
    <slot></slot>
  </ComponentIs>
</template>
<script setup lang="ts">
import { computed, type ComputedRef, type PropType } from 'vue';
import { ComponentIs } from '@app/ui/components/index';
import type { UniqueId } from '@app/ui/types';
import { Is } from '@app/ui/components/abstracts/component-is/types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';

const props = defineProps({
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
  },

  /**
   * Handle loading state
   */
   loading: {
      type: Boolean as PropType<ComputedRef<boolean> | boolean>,
      default: false
  }
});

const isLoading = computed(() => props.loading)
const emits = defineEmits(['send']);
const handleEmitClick = () => emits('send', { id: props.id });
</script>

<style src="./BaseTab.scss" lang="scss"></style>
