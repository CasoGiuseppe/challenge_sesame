<template>
  <section class="entry-point">
    <TabsShell>
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
              {{ translate({ key: `MENU.navigation.${id}` }) }}
            </BaseTab>
          </template>
        </MenuShell>
      </template>
    </TabsShell>

    <section class="entry-point__board">
      <RouterView v-slot="{ Component }">
          <TransitionIs
              :type="transitionType.FROMBOTTOM"
              :easing="Easing.ELASTIC"
              :timing="Timing.FAST"
          >
              <component :is="Component" />
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
