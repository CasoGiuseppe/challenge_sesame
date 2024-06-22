<template>
  <section class="position-board">
    <TabsShell>
      <template #default>
        <RouterNavigation
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
                    {{ translate({key: `MENU.navigation.${id}` }) }}
                </BaseTab>
            </template>
        </RouterNavigation>
      </template>
    </TabsShell>
  </section>
</template>
<script setup lang="ts">
import { watch, ref, computed } from "vue"
import TabsShell from "@app/ui/components/tools/tabs-shell/TabsShell.vue"
import BaseTab from "@app/ui/components/base/base-tab/BaseTab.vue"
import RouterNavigation from "@app/ui/layouts/partials/router-navigation/RouterNavigation.vue"
import { Orientation } from "@app/ui/layouts/partials/router-navigation/types"
import { Is } from '@app/ui/components/abstracts/component-is/types';
import { Types } from '@app/ui/components/abstracts/transition-is/types';
import { useRoute } from "vue-router";
import useRouterUtilities from '@app/shared/composables/useRouterUtilities';
import type { IRouterNavigation } from "@app/shared/composables/types"
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
