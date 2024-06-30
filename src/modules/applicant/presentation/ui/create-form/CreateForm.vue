<template>
    <form
        class="create-form"
        novalidate
        :aria-disabled="isDisabled"
        @submit.prevent="sendCreation"
    >
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
          <template
            v-if="isInvalid(id)"
            #message
          >{{ userError(id) }}</template>
      </BaseInput>

    </form>
</template>
<script setup lang="ts">
import { computed, reactive } from "vue";
import BaseInput from "@app/ui/components/base/base-input/BaseInput.vue";
import { Types } from "@app/ui/components/base/base-input/types";
import type { IForm, IFormField } from "./types";
import useTranslation from '@app/shared/composables/useTranslation';

const { translate } = useTranslation();

const errorsKind = {
  validation: `${translate({key: 'FORM.errors.validation' })}`,
  required: `${translate({key: 'FORM.errors.required' })}`,
}

const form = reactive<IForm>({ fields: [
  { id: "firstName", validation: { mode: '', invalid: true,  }, proxy: '', placeholder: `${translate({key: 'FORM.placeholder.firstname' })}`},
  { id: "lastName", validation: { mode: '', invalid: true,  }, proxy: '', placeholder: `${translate({key: 'FORM.placeholder.lastname' })}`},
  { id: "email", validation: { mode: '', invalid: true,  }, proxy: '', placeholder: `${translate({key: 'FORM.placeholder.email' })}`}
]})

const currentField = computed(() => (id:string):IFormField | undefined => form.fields.find((field: IFormField) => field.id === id));

const isDisabled = computed(() => {
  const validation = form.fields.map((field: IFormField) => field.validation.invalid)
  return validation.some((value: boolean) => value)
})

const isInvalid = computed(() => (id: string) => {
  const field = currentField.value(id)
  if(!field) return false; 
  return field.validation.invalid && field.validation.mode !== '';
})

const userError = computed(() => (id: string) => {
  const field = currentField.value(id)
  if(!field) return false; 
  return errorsKind[field.validation.mode as keyof typeof errorsKind];
}) 

const updateValue = ({ id, value }: {  id: string, value: string }): void => {
  const field = currentField.value(id);
  if(!field) return; 
  field.proxy = value
};

const setInvalid = ({id, mode, value}: {id: string, mode: string, value: boolean}): void => {
  const field = currentField.value(id)
  if(!field) return; 
  field.validation.mode = mode
  field.validation.invalid = value
}

const sendCreation = () => console.log("Creation")

</script>