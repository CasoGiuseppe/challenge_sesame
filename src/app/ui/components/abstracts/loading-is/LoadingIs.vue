<template>
  <TransitionIs
    :type="Types.OPACITY"
    :easing="Easing.OUT"
    :timing="Timing.FAST"
  >
    <section
        v-if="state"
        class="loading-is"
        :type="is"
        :data-message="message"
    />
    <slot v-else />
  </TransitionIs>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
import { Is } from './types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue';
import { Types, Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';

defineProps({
  /**
   * Set the type of custom animation [default, layer]
   */
  is: {
    type: String as PropType<Is>,
    default: Is.DEFAULT,
    validator: (prop: Is) => ensureValueCollectionExists({ collection: Is, value: prop })
  },

  /**
   * Set the loading state to show/hide the spinner
   */
  state: {
    type: Boolean as PropType<Boolean>,
    default: false
  },

  /**
   * Set the custom message
   */
  message: {
    type: String as PropType<String>,
    default: 'Please wait...'
  }
});
</script>
<style src="./LoadingIs.scss" lang="scss"></style>
