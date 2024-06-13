<template>
  <label
    :id="id"
    :loading="loading"
    :dirty="dirty"
    class="base-input"
  >
    <input
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
    />
  </label>
</template>
<script setup lang="ts">
import type { UniqueId } from '@/app/ui/types';
import { ref, type PropType } from 'vue';
import { Types } from './types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';

const value = defineModel("proxyValue")
const dirty = ref<boolean>(false)
const { proxyValue } = defineProps({
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

const customEmits = defineEmits(["update:modelValue",])
const updateValue = (payload: Event) => {
    const { value } = payload.target as HTMLInputElement
    if(value.length === 0) {
      dirty.value = false
      return
    }

    dirty.value === false ? (dirty.value = true) : null
    customEmits("update:modelValue", value)
}

</script>
<style src="./BaseInput.scss" lang="scss"></style>
