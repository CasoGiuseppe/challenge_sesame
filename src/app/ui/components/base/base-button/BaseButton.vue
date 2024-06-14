<template>
  <ComponentIs
    :id="id"
    :disabled="disabled"
    :aria-disabled="disabled"
    :aria-invalid="disabled"
    :aria-label="ariaLabel"
    :aria-loading="loading"
    :is="is"
    :loading="loading"
    :class="[
      'base-button',
      `base-button--is-${type}`,
      `base-button--is-${size}`,
    ]"
    data-testID="ui-button-test"
    @click="handleEmitClick"
  >
    <TransitionIs>
      <span
        :key="isLoadingKey"
        class="base-button__label"
        data-testID="ui-button-test-label"
      >
        <slot>{{ fallback }}</slot>
      </span>
    </TransitionIs>
  </ComponentIs>
</template>
<script setup lang="ts">
import type { UniqueId } from '@/app/ui/types';
import { computed, ref, type PropType } from 'vue';
import { Sizes, Types, type RouterTo } from './types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';
import { Is } from '@app/ui/components/abstracts/component-is/types';
import ComponentIs from '@app/ui/components/abstracts/component-is/ComponentIs.vue';
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue';

const props = defineProps({
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
   * Set the loading button state
   */
  loading: {
    type: Boolean as PropType<boolean>,
    default: false
  },

  /**
   * Set the aria accesibility label
   */
  ariaLabel: {
    type: String as PropType<string>,
    default: 'component aria label'
  },

  /**
   * Set the router-to object for navigation
   */
  to: {
    type: Object as PropType<RouterTo>,
    default: () => ({ path: '/' })
  }
});

const fallback = ref<string>('Please wait');
const isLoadingKey = computed(() => (props.loading ? 'loading' : 'default'));
const isTypeLink = computed(() => (props.is === Is.ROUTERLINK));

const emits = defineEmits(['send']);
const handleEmitClick = () => {
  if(isTypeLink.value) return 
  emits('send')
};
</script>
<style src="./BaseButton.scss" lang="scss"></style>