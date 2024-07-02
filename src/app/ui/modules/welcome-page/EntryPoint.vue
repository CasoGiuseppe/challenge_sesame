<template>
  <section class="welcome-page">
    <h2 class="welcome-page__title">{{ translate({ key: 'WELCOME.title' }) }}</h2>
    <p class="welcome-page__message">{{ translate({ key: 'WELCOME.message' }) }}</p>
    <BaseButton
      id="start"
      :type="Types.PRIMARY"
      :size="Sizes.SMALL"
      :is="Is.ROUTERLINK"
      :to="{ name: 'positions' }"
    >
      <template #default>{{ translate({ key: 'WELCOME.action' }) }}</template>
    </BaseButton>
  </section>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import type { ITranslation } from '@app/shared/composables';
import { keyUseTranslations } from '@app/shared/types/symbols';
import { BaseButton } from '@app/ui/components';
import { Types, Sizes } from '@app/ui/components/base/base-button/types';
import { Is } from '@app/ui/components/abstracts/component-is/types';

const { translate } = inject<ITranslation>(keyUseTranslations) as ITranslation;
</script>
<style lang="scss">
.welcome-page {
  @apply flex justify-center items-center flex-col h-full gap-sm;

  &__title {
    @apply text-xlg font-bold text-logo-600;
  }

  &__message {
    @apply text-logo-400;
  }
}
</style>
