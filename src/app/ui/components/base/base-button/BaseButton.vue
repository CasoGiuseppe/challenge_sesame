<template>
  <component
    :is="is"
    :disabled="disabled"
    :aria-disabled="disabled"
    :aria-invalid="disabled"
    :aria-label="ariaLabel"
    :class="[
      'base-button',
      `base-button--is-${type}`,
      `base-button--is-${size}`,
      `base-button--has-${loading}`
    ]"
  >
    <span :key="isLoadingKey">
      <slot />
    </span>
  </component>
</template>
<script setup lang="ts">
import type { UniqueId } from '@/app/ui/types'
import { computed, type PropType } from 'vue'
import { ComponentIs, Sizes, Types } from './types'
import { ensureValueCollectionExists } from '@/app/ui/validators/useCustomValidator'

const { loading } = defineProps({
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
    validator: (prop: ComponentIs) =>
      ensureValueCollectionExists({ collection: ComponentIs, value: prop })
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
})

const isLoadingKey = computed(() => loading ? 'loading' : 'default')
</script>
<style src="./BaseButton.scss" lang="scss"></style>
