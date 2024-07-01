<template>
  <header class="section-header">
    <TransitionIs
        :type="Types.FROMTOP"
        :easing="Easing.ELASTIC"
        :timing="Timing.FAST"
    >
      <h2
        :key="(routeTitle as string) ?? 'titleKey'"
        class="section-header__title"
    >
        {{ translate({ key: `${(routeTitle as string).toUpperCase()}.area` }) }}
      </h2>
    </TransitionIs>
    <UserIdentity id="userIdentity">
      <template #image><img src="https://picsum.photos/200" /></template>
    </UserIdentity>
  </header>
</template>
<script setup lang="ts">
import { watch, ref, inject } from 'vue';
import { useRoute } from 'vue-router';
import { TransitionIs, UserIdentity } from '@app/ui/components/index';
import { Types, Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';
import type { ITranslation } from '@app/shared/composables/interfaces/ITranslation';
import { keyUseTranslations } from '@app/shared/types/symbols';

const route = useRoute();
const { translate } = inject<ITranslation>(keyUseTranslations) as ITranslation;

const routeTitle = ref<string | unknown>('');
watch(
  route,
  (to): void => {
    routeTitle.value = to.meta?.family as string;
  },
  { flush: 'pre', immediate: true, deep: true }
);
</script>
<style src="./SectionHeader.scss" lang="scss" scoped></style>
