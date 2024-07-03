<template>
  <section class="side-navigation">
    <ResponsivePanel id="navigationPanel">
      <template #header>
        <FakeLogo>
          <template #default>Slot logo</template>
        </FakeLogo>
      </template>
      <template #body>
        <AccordionInfo open>
          <template #summary>
            {{ translate({ key: 'ROLES.admin' }) }}
          </template>
          <template #content>
            <AccordionInfo id="navigationMenu" open customColor="6961ff">
              <template #summary>
                <BaseIcon id="IconRate" name="IconRate" :size="Sizes.M" />
                {{ translate({ key: 'AREAS.talent' }) }}
              </template>
              <template #content>
                <MenuShell
                  id="mainNavigation"
                  tag="menu"
                  :routes="routesNavigation"
                  :customStyle="{ paddingLeft: '7px' }"
                >
                  <template #navigation="{ property: { id, to, family } }">
                    <BaseItemMenu
                      :id="id"
                      :to="{ name: to as string }"
                      :is="Is.ROUTERLINK"
                      :selected="currentRoute === family"
                      >{{
                        translate({ key: `${(family as string).toUpperCase()}.area` })
                      }}</BaseItemMenu
                    >
                  </template>
                </MenuShell>
              </template>
            </AccordionInfo>
          </template>
        </AccordionInfo>
      </template>
      <template #footer>
        <LanguageHandle id="chhoseLanguage">
          <template #default>
            {{ translate({ key: 'LANGUAGE.message' }) }}
          </template>

        </LanguageHandle>
      </template>
    </ResponsivePanel>
  </section>
</template>
<script setup lang="ts">
import { computed, ref, watch, inject } from 'vue';
import { useRoute } from 'vue-router';
import {
  ResponsivePanel,
  AccordionInfo,
  BaseIcon,
  BaseItemMenu,
  FakeLogo,
  MenuShell,
  LanguageHandle
} from '@app/ui/components/index';
import { Sizes } from '@app/ui/components/base/base-icon//types';
import { Is } from '@app/ui/components/abstracts/component-is/types';
import type { IRouterNavigation } from '@app/shared/composables/types';
import {
  type ITranslation,
  type IRouterUtilities
} from '@app/shared/composables';
import { keyUseTranslations, keyUseRouterUtilities } from '@app/shared/types/symbols';

const { translate } = inject<ITranslation>(keyUseTranslations) as ITranslation;
const { getRoutesByType } = inject<IRouterUtilities>(keyUseRouterUtilities) as IRouterUtilities;

const route = useRoute();
const currentRoute = ref<string | unknown>();

const routesNavigation = computed((): IRouterNavigation[] => {
  return getRoutesByType({}).map(({ name, meta: { family, to: redirect } = {} }) => {
    return {
      id: name?.toString() as string,
      to: (redirect as string) ?? name,
      family
    };
  });
});

watch(
  route,
  ({ meta: { family } }): void => {
    currentRoute.value = family;
  },
  { flush: 'pre', immediate: true, deep: true }
);
</script>
<style src="./SideNavigation.scss" lang="scss" scoped></style>
