<template>
  <ComponentIs
    :key="is"
    :id="id"
    :disabled="disabled"
    :selected="selected"
    :aria-disabled="disabled"
    :aria-invalid="disabled"
    aria-labelledby="ui-button-label"
    :aria-loading="loading"
    :is="is"
    :loading="loading"
    :to="to"
    :class="[
      'base-button',
      `base-button--is-${type}`,
      `base-button--is-${size}`,
      `${fullsize ? `base-button--is-fullsize` : ''}`
    ]"
    data-testID="ui-button-test"
    @click="handleEmitClick"
  >
    <TransitionIs
      :easing="Easing.ELASTIC"
      :timing="Timing.FAST"
    >
      <span
        id="ui-button-label"
        :key="isLoadingKey"
        class="base-button__label"
        data-testID="ui-button-test-label"
      >
        <!-- @slot Default: slot to show button label -->
        <slot>{{ fallback }}</slot>
      </span>
    </TransitionIs>
  </ComponentIs>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types';
import { computed, ref, type PropType } from 'vue';
import { ComponentIs, TransitionIs } from '@app/ui/components/index';
import { Is } from '@app/ui/components/abstracts/component-is/types';
import { Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';
import { Sizes, Types, type RouterTo } from './types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';

const props = defineProps({
  /**
   * Set the unique id of the ui button
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
   * Set the button type family [primary, secondary]
   */
  type: {
    type: String as PropType<Types>,
    default: Types.PRIMARY,
    validator: (prop: Types) => ensureValueCollectionExists({ collection: Types, value: prop })
  },

  /**
   * Set the button size type [small, default]
   */
  size: {
    type: String as PropType<Sizes>,
    default: Sizes.DEFAULT,
    validator: (prop: Sizes) => ensureValueCollectionExists({ collection: Sizes, value: prop })
  },

  /**
   * Set the disabled button state
   */
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },

  /**
   * Set the selected button state
   */
   selected: {
    type: Boolean as PropType<boolean>,
    default: false
  },

  /**
   * Set the loading button state
   */
  loading: {
    type: Boolean as PropType<boolean>,
    default: false
  },

  /**
   * Set the router-to object for navigation
   */
  to: {
    type: Object as PropType<RouterTo>,
    default: () => ({ path: '/' })
  },

  /**
   * Set the fullsize width button state
   */
   fullsize: {
    type: Boolean as PropType<boolean>,
    default: false
  },
});

const fallback = ref<string>('Please wait');
const isLoadingKey = computed(() => (props.loading ? 'loading' : 'default'));
const isTypeLink = computed(() => (props.is === Is.ROUTERLINK));

const customEmits = defineEmits(['send']);
const handleEmitClick = () => {
  if(isTypeLink.value) return 
  customEmits('send', { id: props.id })
};
</script>
<style src="./BaseButton.scss" lang="scss"></style>
