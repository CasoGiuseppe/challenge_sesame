<template>
    <label
      :id="id"
      :loading="loading"
      :dirty="dirty"
      class="base-input"
    >
      <TransitionIs
        :type="transType.FROMLEFT"
        :easing="Easing.ELASTIC"
      >
        <!-- @slot Icon: slot to show icon if is necessary -->
        <slot name="icon" v-if="!loading">
            <BaseInput
              v-if="isSearchType"
              name="IconSearch"
            />
        </slot>
      </TransitionIs>
      <input
        data-testID="ui-input"
        :aria-disabled="readonly"
        :aria-readonly="readonly"
        :aria-placeholder="placeholder"
        :readonly="readonly || loading"
        :type="type"
        :pattern="pattern"
        :placeholder="placeholder"
        v-model.lazy="value"
        autocomplete="one-time-code"
        class="base-input__field"
        @input="updateValue"
        @change="changeValue"
      />
    </label>
</template>
<script setup lang="ts">
import type { UniqueId } from '@/app/ui/types';
import { computed, ref, type PropType } from 'vue';
import { Types } from './types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';
import BaseInput from '@app/ui/components/base/base-icon/BaseIcon.vue';
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue';
import { Types as transType, Easing } from '@app/ui/components/abstracts/transition-is/types';

const value = defineModel("proxyValue")
const dirty = ref<boolean>(false)
const { type, loading } = defineProps({
  /**
   * Set the unique id of the ui input
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'inputID'
  },

  /**
   * v-model value
   */
  proxyValue: {
    type: String as PropType<string>
  },

  /**
   * Set the type of input field [text, search]
   */
  type: {
    type: String as PropType<Types>,
    default: Types.TEXT,
    validator: (prop: Types) => ensureValueCollectionExists({ collection: Types, value: prop })
  },

  /**
   * Set the start placeholder value
   */
  placeholder: {
    type: String as PropType<string>
  },

  /**
   * Set allowed input pattern [example: [A-Za-z0-9_]{5,}]
   */
  pattern: {
    type: String as PropType<string>
  },

  /**
   * Handle loading state
   */
  loading: {
    type: Boolean as PropType<boolean>,
    default: false
  },

  /**
   * Handle readonly state
   */
  readonly: {
    type: Boolean as PropType<boolean>,
    default: false
  }
});

const customEmits = defineEmits(["update:modelValue", "change"])
const updateValue = (payload: Event): void => {
    const { value } = payload.target as HTMLInputElement
    if(value.length === 0) {
      dirty.value = false
      return
    }

    dirty.value === false ? (dirty.value = true) : null
    customEmits("update:modelValue", value)
}

const changeValue = (payload: Event): void => {
    const { value } = payload.target as HTMLInputElement
    customEmits("change", value)
}

const isSearchType = computed<boolean>(() =>  type === Types.SEARCH)

</script>
<style src="./BaseInput.scss" lang="scss"></style>
