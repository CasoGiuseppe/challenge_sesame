<template>
  <section class="entry-point">
    <TabsShell>
      <template #default>
        <MenuShell
          id="tabsNavigation"
          tag="menu"
          :routes="routesNavigation"
          :orientation="Orientation.HORIZONTAL"
          :animation="Types.FROMBOTTOM"
        >
          <template #navigation="{ property: { id, to, family } }">
            <BaseTab
              :id="id"
              :is="Is.ROUTERLINK"
              :to="{ name: to as string }"
              :selected="(currentRoute as string).includes(id)"
              :loading="loadingMapper.states[id]"
            >
              {{ translate({ key: `${(family as string).toUpperCase()}.${id}` }) }}
            </BaseTab>
          </template>
        </MenuShell>
      </template>
    </TabsShell>

    <section class="entry-point__form">
      <BaseInput
        id="searchInput"
        :type="inputTypes.SEARCH"
        :placeholder="translate({ key: `FORM.placeholder.search` })"
        pattern="^[a-zA-Z0-9 ]+$"
      />
      <BaseButton
        id="addApplicant"
        :type="buttonTypes.PRIMARY"
        :size="Sizes.SMALL"
        :is="Is.ROUTERLINK"
        :to="{ name: 'createApplicant' }"
      >
        <template #default>{{ translate({ key: `RECRUITMENT.FORM.ADD.action` }) }}</template>
      </BaseButton>
    </section>

    <section class="entry-point__board">
      <RouterView v-slot="{ Component, route: { meta: { family } } }">
        <component :is="Component" :key="family" />
      </RouterView>
    </section>

    <RouterView v-slot="{ Component }" name="aside">
      <component :is="Component" />
    </RouterView>
  </section>
</template>
<script setup lang="ts">
import { watch, ref, computed, reactive, type ComputedRef, inject } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import TabsShell from '@app/ui/components/tools/tabs-shell/TabsShell.vue';
import BaseTab from '@app/ui/components/base/base-tab/BaseTab.vue';
import MenuShell from '@app/ui/components/tools/menu-shell/MenuShell.vue';
import BaseInput from '@app/ui/components/base/base-input/BaseInput.vue';
import BaseButton from '@app/ui/components/base/base-button/BaseButton.vue';
import { Types as buttonTypes, Sizes } from '@app/ui/components/base/base-button/types';
import { Types as inputTypes } from '@app/ui/components/base/base-input/types';
import { Orientation } from '@app/ui/components/tools/menu-shell/types';
import { Is } from '@app/ui/components/abstracts/component-is/types';
import { Types } from '@app/ui/components/abstracts/transition-is/types';
import type { IRouterNavigation } from '@app/shared/composables/types';
import { useApplicantStore } from '@modules/applicant/presentation/store/applicant';
import { useVacancyStore } from '@modules/vacancy/presentation/store/vacancy';
import type { ITranslation } from '@app/shared/composables/interfaces/ITranslation';
import type { IRouterUtilities } from '@app/shared/composables/interfaces/IRouterUtilities';
import { keyUseTranslations, keyUseRouterUtilities } from '@app/shared/types/symbols';

const { translate } = inject<ITranslation>(keyUseTranslations) as ITranslation;
const { getRoutesByType } = inject<IRouterUtilities>(keyUseRouterUtilities) as IRouterUtilities;

const route = useRoute();

const currentRoute = ref<string | unknown>();
const routesNavigation = computed((): IRouterNavigation[] => {
  return getRoutesByType({ type: 'recruitment' })
    .map(({ name, meta: { family } = {} }) => {
      return {
        id: name?.toString() as string,
        to: name,
        family
      };
    })
    .reverse();
});

const { isLoading: isVacancyLoad } = storeToRefs(useVacancyStore);
const { isLoading: isApplicantLoad } = storeToRefs(useApplicantStore);
const loadingMapper = reactive<{ states: { [key: string]: ComputedRef<boolean> } }>({
  states: {
    applicants: computed(() => isApplicantLoad.value),
    positions: computed(() => isVacancyLoad.value)
  }
});

watch(
  route,
  ({ path }): void => { currentRoute.value = path },
  { flush: 'pre', immediate: true, deep: true }
);
</script>
<style src="./EntryPoint.scss" lang="scss" scoped></style>
