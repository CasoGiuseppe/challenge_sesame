<template>
  <component
    :is="is"
    :disabled="disabled"
    :aria-disabled="disabled"
    :aria-invalid="disabled"
    :aria-label="ariaLabel"
    :class="[
      'base-button',
      `base-button--is-${type}`
    ]"
  ></component>
</template>
<script setup lang="ts">
import type { UniqueId } from '@/app/ui/types'
import type { PropType } from 'vue'
import { ComponentIs, Types } from './types'
import { ensureValueCollectionExists } from '@/app/ui/validators/useCustomValidator'

defineProps({
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
   * Set the disabled button state
   */
   disabled: {
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
</script>
