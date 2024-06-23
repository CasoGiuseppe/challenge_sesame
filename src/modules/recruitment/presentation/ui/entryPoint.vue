<template>
  <section class="entry-point" :key="currentRoute as string">
    <TabsShell >
      <template #default>
        <MenuShell
          id="tabsNavigation"
          :routes="routesNavigation"
          :orientation="Orientation.HORIZONTAL"
          :animation="Types.FROMBOTTOM"
        >
          <template #navigation="{ property: { id, to, family } }">
            <BaseTab
              :id="id"
              :is="Is.ROUTERLINK"
              :to="{ name: to as string}"
              :selected="id === currentRoute"
            >
              {{ translate({ key: `${(family as string).toUpperCase()}.MENU.${id}` }) }}
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
      >
          <template #default>{{ translate({ key: `ACCION.add` }) }}</template>
      </BaseButton>
    </section>

    <section class="entry-point__board">
      <RouterView v-slot="{ Component, route: { path } }">
          <TransitionIs
            :type="transitionType.FROMBOTTOM"
            :easing="Easing.OUT"
            :timing="Timing.FAST"
          >
              <component
                :is="Component"
                :key="path"
              />
          </TransitionIs>
      </RouterView>
    </section>

    <RouterView v-slot="{ Component }" name="aside">
      <component :is="Component" />
    </RouterView>
  </section>
</template>
<script setup lang="ts">
import { watch, ref, computed } from "vue"
import TabsShell from "@app/ui/components/tools/tabs-shell/TabsShell.vue"
import BaseTab from "@app/ui/components/base/base-tab/BaseTab.vue"
import MenuShell from "@app/ui/components/tools/menu-shell/MenuShell.vue"
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue';
import BaseInput from "@app/ui/components/base/base-input/BaseInput.vue";
import BaseButton from "@app/ui/components/base/base-button/BaseButton.vue";

import { Types as buttonTypes, Sizes } from "@app/ui/components/base/base-button/types"
import { Types as inputTypes } from "@app/ui/components/base/base-input/types"
import { Types as transitionType , Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';
import { Orientation } from "@app/ui/components/tools/menu-shell/types"
import { Is } from '@app/ui/components/abstracts/component-is/types';
import { Types } from '@app/ui/components/abstracts/transition-is/types';
import type { IRouterNavigation } from "@app/shared/composables/types"

import { useRoute } from "vue-router";
import useRouterUtilities from '@app/shared/composables/useRouterUtilities';
import useTranslation from '@app/shared/composables/useTranslation';

const { translate } = useTranslation();

const route = useRoute()
const { getRoutesByType } = useRouterUtilities();

const currentRoute = ref<string | unknown>()
  const routesNavigation = computed(():IRouterNavigation[] => {
    return getRoutesByType({ type: 'recruitment' }).map(({name, meta: { family } = {}}) => {
        return {
            id: name?.toString() as string,
            to: name,
            family
        }
    })
})

watch(route, ({ name }):void => {
  currentRoute.value = name
}, {flush: 'pre', immediate: true, deep: true})
</script>
<style src="./EntryPoint.scss" lang="scss" scoped></style>
