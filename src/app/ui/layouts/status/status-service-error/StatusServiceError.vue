<template>
  <section class="service-error">
    <h2 v-if="errorCode" class="service-error__code">{{ errorCode }}</h2>
    <p>{{ translate({ key: 'ERRORS.generic' }) }}</p>
    <BaseButton
      id="back"
      :type="Types.PRIMARY"
      :size="Sizes.SMALL"
      :is="Is.ROUTERLINK"
      :to="{ name: 'welcome' }"
    >
      <template #default>{{ translate({ key: 'ACCION.backToStart' }) }}</template>
    </BaseButton>
  </section>
</template>
<script setup lang="ts">
import { watch, ref, inject } from 'vue';
import { useRoute } from 'vue-router';
import type { ITranslation } from '@app/shared/composables';
import { keyUseTranslations } from '@app/shared/types/symbols';
import { BaseButton } from '@app/ui/components';
import { Types, Sizes } from '@app/ui/components/base/base-button/types';
import { Is } from '@app/ui/components/abstracts/component-is/types';

const { translate } = inject<ITranslation>(keyUseTranslations) as ITranslation;
const route = useRoute();
const errorCode = ref<string | unknown>(undefined);
watch(
  route,
  (to): void => {
    errorCode.value = to.params.code;
  },
  { flush: 'pre', immediate: true, deep: true }
);
</script>
<style lang="scss">
.service-error {
  @apply flex justify-center items-center h-full flex-col gap-sm;
  @apply text-warning-100;

  &__code {
    @apply font-bold text-xlg;
  }
}
</style>
