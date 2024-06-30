<template>
    <form
        class="create-form"
        novalidate
        :aria-disabled="isDisabled"
        @submit.prevent="sendCreation"
    >
      {{ form.fields }}
      <BaseInput
        v-for="{id, proxy, placeholder} of form.fields"
        :id="id"
        :type="Types.TEXT"
        :proxy-value="proxy"
        :placeholder="placeholder"
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
import { computed, reactive } from "vue";
import BaseInput from "@app/ui/components/base/base-input/BaseInput.vue";
import { Types } from "@app/ui/components/base/base-input/types";
import { uniqueArray } from "@app/shared/utilities";


const form = reactive<Record<string, any>>({ fields: [
  { id: "firstName", validation: { mode: '', invalid: true,  }, proxy: '', placeholder: 'First Name'},
  { id: "lastName", validation: { mode: '', invalid: true,  }, proxy: '', placeholder: 'Last Name'},
  { id: "email", validation: { mode: '', invalid: true,  }, proxy: '', placeholder: 'Email'}
]})

const isDisabled = computed(() => {
  // const validation = []
  // return validation.some((value: boolean) => value)
  return false
})

const updateValue = ({ id, value }: {  id: string, value: string }): void => { form.fields.find((field: any) => field.id === id).proxy = value };
const setInvalid = ({id, mode, value}: {id: string, mode: string, value: string}): void => {
  const field = form.fields.find((field: any) => field.id === id)
  field.validation.mode = mode
  field.validation.invalid = value
}
const sendCreation = () => console.log("Creation")
  // validation.values = uniqueArray({ collection: [...validation.values, { id, mode, value}]})


</script>