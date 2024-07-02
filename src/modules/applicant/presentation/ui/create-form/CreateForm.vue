<template>
    <form
        class="create-form"
        novalidate
        :aria-disabled="isDisabled"
        @submit.prevent="sendCreation"
    >
      <p
        v-if="$slots['description']"
        class="create-form__description"
      >
        <slot name="description" />
      </p>
      <BaseInput
        v-for="{ id, type, proxy, placeholder, pattern, icon } of form.fields"
        :key="id"
        :id="id"
        :type="type"
        :proxy-value="proxy"
        :placeholder="placeholder"
        :pattern="pattern"
        :min="3"
        :readonly="isCreated"
        required
        fullsize
        @update:modelValue="updateValue"
        @invalid="setValidation"
      >
          <template #icon>
            <BaseIcon :name="icon" />
          </template>
          <template
            v-if="isInvalid(id)"
            #message
          >{{ userError(id) }}</template>
      </BaseInput>
      <BaseButton
        id="createApplicant"
        :type="buttonTypes.PRIMARY"
        :size="Sizes.DEFAULT"
        :disabled="isDisabled"
        :loading="isCreated"
      >
          <template #default>{{ translate({ key: `${isCreated ? 'ACCION.loading' : 'ACCION.create'}` }) }}</template>
      </BaseButton>
    </form>
</template>
<script setup lang="ts">
import { computed, reactive, inject } from "vue";
import { storeToRefs } from 'pinia';
import { useRoute } from "vue-router";

import { BaseInput, BaseIcon, BaseButton } from '@app/ui/components/index';

import { Types as buttonTypes, Sizes } from "@app/ui/components/base/base-button/types"
import { Types } from "@app/ui/components/base/base-input/types";
import type { IForm, IFormField } from "./types";

import { dependencies } from '@modules/core/dependencies';
import { useApplicantStore } from '@modules/applicant/presentation/store/applicant';
import { useVacancyStore } from '@modules/vacancy/presentation/store/vacancy';
import { type ITranslation } from '@app/shared/composables';
import { keyUseTranslations } from '@app/shared/types/symbols';

const { isCreated } = storeToRefs(useApplicantStore)
const { defaultStatusID } = storeToRefs(useVacancyStore)
const { translate } = inject<ITranslation>(keyUseTranslations) as ITranslation;
const route = useRoute();

const errorsKind = {
  validation: `${translate({key: 'FORM.errors.validation' })}`,
  required: `${translate({key: 'FORM.errors.required' })}`,
}

const form = reactive<IForm>({ fields: [
  {
      id: "firstName",
      type: Types.TEXT,
      validation: { mode: '', invalid: true,  },
      proxy: '',
      pattern: '^[a-zA-Z0-9 ]+$',
      placeholder: `${translate({key: 'FORM.placeholder.firstname' })}`,
      icon: 'IconUser'
  },
  {
      id: "lastName",
      type: Types.TEXT,
      validation: { mode: '', invalid: true,  },
      proxy: '',
      pattern: '^[a-zA-Z0-9 ]+$',
      placeholder: `${translate({key: 'FORM.placeholder.lastname' })}`,
      icon: 'IconUser'
  },
  {
    id: "email",
    type: Types.EMAIL,
    validation: { mode: '', invalid: true,  },
    proxy: '',
    pattern: '^[\\w%\\+\\-]+(\\.[\\w%\\+\\-]+)*@[\\w%\\+\\-]+(\\.[\\w%\\+\\-]+)+$',
    placeholder: `${translate({key: 'FORM.placeholder.email' })}`,
    icon: 'IconMail'
  }
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

const setValidation = ({id, mode, value}: {id: string, mode: string, value: boolean}): void => {
  const field = currentField.value(id)
  if(!field) return; 
  field.validation.mode = mode
  field.validation.invalid = value
}

const sendCreation = () => {
  if(isDisabled.value) return;
  
  const applicants = dependencies.provideApplicantPloc()
  applicants.createApplicant({
    firstName: currentField.value('firstName')?.proxy ?? 'test',
    lastName: currentField.value('lastName')?.proxy ?? 'test',
    ...(currentField.value('email') && {email: currentField.value('email')?.proxy}),
    statusId: route.params.area as string ?? defaultStatusID.value
  });
}
</script>
<style src="./CreateForm.scss" lang="scss" scoped></style>