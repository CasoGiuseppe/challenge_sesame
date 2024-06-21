<template>
    <section class="main-navigation">
        <ResponsivePanel id="navigationPanel">
            <template #header>
                <FakeLogo>
                    <template #default>Slot logo</template>
                </FakeLogo>
            </template>
            <template #body>
                <AccordionInfo open>
                    <template #summary>
                        {{ translate({key: 'MENU.role.admin' }) }}
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
                                {{ translate({key: 'MENU.sections.name' }) }}
                            </template>
                            <template #content>
                                <RouterNavigation
                                    id="mainNavigation"
                                    :routes="getRoutesByType({})"
                                >
                                    <template #navigation="{ property: { to, family } }">
                                        <BaseItemMenu
                                            :id="to?.toString()"
                                            :to="{ name: to as string}"
                                            :is="Is.ROUTERLINK"
                                            :selected="routeFamily === family"
                                        >{{ translate({key: `MENU.navigation.${family}` }) }}</BaseItemMenu>
                                    </template>
                                </RouterNavigation>
                            </template>
                        </AccordionInfo>
                    </template>
                </AccordionInfo>
            </template>
        </ResponsivePanel>
    </section>
</template>
<script setup lang="ts">
import { ref, watch } from "vue"
import ResponsivePanel from "@app/ui/components/tools/responsive-panel/ResponsivePanel.vue"
import AccordionInfo from "@app/ui/components/elements/accordion-info/AccordionInfo.vue"
import BaseIcon from "@app/ui/components/base/base-icon/BaseIcon.vue"
import BaseItemMenu from "@app/ui/components/base/base-item-menu/BaseItemMenu.vue"
import FakeLogo from "@app/ui/layouts/fakes/FakeLogo.vue"
import RouterNavigation from "@app/ui/layouts/partials/router-navigation/RouterNavigation.vue"
import useRouterUtilities from '@app/shared/composables/useRouterUtilities';
import { Sizes } from "@app/ui/components/base/base-icon//types"
import { Is } from '@app/ui/components/abstracts/component-is/types';
import useTranslation from '@app/shared/composables/useTranslation';
import { useRoute } from "vue-router"

const route = useRoute()
const { translate } = useTranslation();

const routeFamily = ref<string | unknown>()
const { getRoutesByType } = useRouterUtilities();

watch(route, (to):void => {
    routeFamily.value = to.meta?.family
}, {flush: 'pre', immediate: true, deep: true})

</script>
<style src="./MainNavigation.scss" lang="scss"></style>