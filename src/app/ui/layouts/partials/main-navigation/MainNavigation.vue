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
                        <AccordionInfo open customColor="6961ff">
                            <template #summary>
                                <BaseIcon name="IconRate" :size="Sizes.M" />
                                {{ translate({key: 'MENU.sections.name' }) }}
                            </template>
                            <template #content>
                                <BaseItemMenu>item menu</BaseItemMenu>
                            </template>
                        </AccordionInfo>
                    </template>
                </AccordionInfo>
            </template>
        </ResponsivePanel>
    </section>
</template>
<script setup lang="ts">
import ResponsivePanel from "@app/ui/components/tools/responsive-panel/ResponsivePanel.vue"
import AccordionInfo from "@app/ui/components/elements/accordion-info/AccordionInfo.vue"
import BaseIcon from "@app/ui/components/base/base-icon/BaseIcon.vue"
import BaseItemMenu from "@app/ui/components/base/base-item-menu/BaseItemMenu.vue"
import { Sizes } from "@app/ui/components/base/base-icon//types"

import useTranslation from '@app/shared/composables/useTranslation';
const { translate } = useTranslation();

</script>
<style src="./MainNavigation.scss" lang="scss"></style>