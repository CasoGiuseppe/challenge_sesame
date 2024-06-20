<template>
    <section class="main-navigation">
        <ResponsivePanel id="navigationPanel">
            <template #header>header</template>
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
                                    :list="getRoutesByType({})"
                                >
                                    <template #navigation="{ property: { to, translation, family } }">
                                        <BaseItemMenu
                                            :id="to?.toString()"
                                            :to="{ name: to as string}"
                                            :is="Is.ROUTERLINK"
                                            :selected="routeFamily === family"
                                        >{{ translate({key: `MENU.navigation.${translation}` }) }}</BaseItemMenu>
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
import { ref } from "vue"
import ResponsivePanel from "@app/ui/components/tools/responsive-panel/ResponsivePanel.vue"
import AccordionInfo from "@app/ui/components/elements/accordion-info/AccordionInfo.vue"
import BaseIcon from "@app/ui/components/base/base-icon/BaseIcon.vue"
import BaseItemMenu from "@app/ui/components/base/base-item-menu/BaseItemMenu.vue"
import RouterNavigation from "@app/ui/layouts/partials/router-navigation/RouterNavigation.vue"
import useRouterUtilities from '@app/shared/composables/useRouterUtilities';
import { Sizes } from "@app/ui/components/base/base-icon//types"
import { Is } from '@app/ui/components/abstracts/component-is/types';
import useTranslation from '@app/shared/composables/useTranslation';
import { useRoute } from "vue-router"

const route = useRoute()
const { translate } = useTranslation();

const routeFamily = ref<string | unknown>(route.meta.family)
const { getRoutesByType } = useRouterUtilities();

</script>
<style src="./MainNavigation.scss" lang="scss"></style>