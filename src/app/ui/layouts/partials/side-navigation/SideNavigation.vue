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
                        {{ translate({key: 'ROLES.admin' }) }}
                    </template>
                    <template #content>
                        <AccordionInfo
                            id="navigationMenu"
                            open
                            customColor="6961ff"
                        >
                            <template #summary>
                                <BaseIcon
                                    id="IconRate"
                                    name="IconRate"
                                    :size="Sizes.M"
                                />
                                {{ translate({key: 'AREAS.talent' }) }}
                            </template>
                            <template #content>
                                <MenuShell
                                    id="mainNavigation"
                                    :routes="routesNavigation"
                                    :customStyle="{ paddingLeft : '7px' }"
                                >
                                    <template #navigation="{ property: { id, to, family } }">
                                        <BaseItemMenu
                                            :id="id"
                                            :to="{ name: to as string}"
                                            :is="Is.ROUTERLINK"
                                            :selected="currentRoute === family"
                                        >{{ translate({key: `${(family as string).toUpperCase()}.area` }) }}</BaseItemMenu>
                                    </template>
                                </MenuShell>
                            </template>
                        </AccordionInfo>
                    </template>
                </AccordionInfo>
            </template>
        </ResponsivePanel>
    </section>
</template>
<script setup lang="ts">
import { computed, ref, watch } from "vue"
import ResponsivePanel from "@app/ui/components/tools/responsive-panel/ResponsivePanel.vue"
import AccordionInfo from "@app/ui/components/elements/accordion-info/AccordionInfo.vue"
import BaseIcon from "@app/ui/components/base/base-icon/BaseIcon.vue"
import BaseItemMenu from "@app/ui/components/base/base-item-menu/BaseItemMenu.vue"
import FakeLogo from "@app/ui/layouts/fakes/FakeLogo.vue"
import MenuShell from "@app/ui/components/tools/menu-shell/MenuShell.vue"
import useRouterUtilities from '@app/shared/composables/useRouterUtilities';
import { Sizes } from "@app/ui/components/base/base-icon//types"
import { Is } from '@app/ui/components/abstracts/component-is/types';
import useTranslation from '@app/shared/composables/useTranslation';
import { useRoute } from "vue-router"
import type { IRouterNavigation } from "@app/shared/composables/types"

const { translate } = useTranslation();
const route = useRoute()
const currentRoute = ref<string | unknown>()

const { getRoutesByType } = useRouterUtilities();
const routesNavigation = computed(():IRouterNavigation[] => {
    return getRoutesByType({}).map(({name, meta: { family } = {}}) => {
        return {
            id: name?.toString() as string,
            to: name,
            family
        }
    })
})

watch(route, ({ meta: { family }}):void => {
    currentRoute.value = family
}, {flush: 'pre', immediate: true, deep: true})

</script>
<style src="./SideNavigation.scss" lang="scss" scoped></style>