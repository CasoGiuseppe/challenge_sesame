<template>
  <RouterLink
    v-if="isInternalLink"
    v-bind="reactiveProp"
    :to="to"
    :class="reactiveClass.filter(res => res !== null)"
  >
    <Transition
      name="change-button-state"
      mode="out-in"
    >
      <span
        :key="isLoadingKey"
        class="base-button__label"
      >
        <slot>Wait please</slot>
      </span>
    </Transition>
  </RouterLink>
  <component
    v-else
    :is="is"
    v-bind="reactiveProp"
    :class="reactiveClass.filter(res => res !== null)"
  >
    <Transition
      name="change-button-state"
      mode="out-in"
    >
      <span
        :key="isLoadingKey"
        class="base-button__label"
      >
        <slot>Wait please</slot>
      </span>
    </Transition>
  </component>
</template>
<script setup lang="ts">
import type { UniqueId } from '@/app/ui/types'
import { computed, type PropType } from 'vue'
import { ComponentIs, Sizes, Types, type RouterTo } from './types'
import { ensureValueCollectionExists } from '@/app/ui/validators/useCustomValidator'

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
    type: String as PropType<ComponentIs>,
    default: ComponentIs.ROUTERLINK,
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

   /**
   * Set the router-to object for navigation
   */
    to: {
      type: Object as PropType<RouterTo>,
      default: () => ({ path: "/" })
  },
})

const isLoadingKey = computed(() => props.loading ? 'loading' : 'default')
const isInternalLink = computed(() => props.is === ComponentIs.ROUTERLINK )

const reactiveProp = computed({
    get: () => {
        return {
            id: props.id,
            disabled: props.disabled,
            'aria-disabled':props.disabled,
            'aria-invalid':props.disabled,
            'aria-label':props.ariaLabel,
            'data-testID': "ui-button-test",
            ...(props.to && { to: props.to })
         }
    },
    set:() => {}
})

const reactiveClass = computed({
    get: () => {
        return [
            'base-button',
            `base-button--is-${props.type}`,
            `base-button--is-${props.size}`,
            `${props.loading ? 'base-button--has-loading' : null}`
        ]
    },
    set:() => {}
})
</script>
<style src="./BaseButton.scss" lang="scss"></style>
