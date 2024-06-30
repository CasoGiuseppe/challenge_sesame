<template>
    <form
        class="create-form"
        novalidate
        :aria-disabled="isDisabled"
        @submit.prevent="sendCreation"
    >
      {{ validation }}
      <BaseInput
        id="firstName"
        :type="Types.TEXT"
        :proxy-value="firstName"
        placeholder="firstname"
        required
        pattern="^[a-zA-Z0-9 ]+$"
        @update:modelValue="updateValue"
        @invalid="setInvalid"
      >
          <!-- <template #message v-if="args.message !== null">{{ args.message }}</template> -->
      </BaseInput>
    </form>
</template>
<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import BaseInput from "@app/ui/components/base/base-input/BaseInput.vue";
import { Types } from "@app/ui/components/base/base-input/types";
import { uniqueArray } from "@app/shared/utilities";


const validation = reactive<Record<string, any>>({ values: [] })
const isDisabled = computed(() => {
  // const validation = []
  // return validation.some((value: boolean) => value)
  return false
})
const firstName = ref<string>();

const updateValue = (value: string): void => { firstName.value = value };
const sendCreation = () => console.log("Creation")
const setInvalid = ({id, mode, value}: {id: string, mode: string, value: string}): void => {
  validation.values = uniqueArray({ collection: [...validation.values, { id, mode, value}]})
}


</script>