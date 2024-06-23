<template>
    <header class="section-header">
        <RouterLink :to="{ name: 'positions'}">position</RouterLink>
        <RouterLink :to="{ name: 'applicants'}">applicants</RouterLink>
        <RouterLink :to="{ name: 'createApplicant'}">create</RouterLink>
        <TransitionIs
            :type="Types.FROMTOP"
            :easing="Easing.ELASTIC"
            :timing="Timing.FAST"
        >
            <h2
                :key="routeTitle as string ?? 'titleKey'"
                class="section-header__title"
            >
                {{ translate({key: `${(routeTitle as string).toUpperCase()}.area` }) }}
            </h2>
        </TransitionIs>
        <UserIdentity id="userIdentity">
            <template #image><img src="https://picsum.photos/200" /></template>
        </UserIdentity>
    </header>
</template>
<script setup lang="ts">
import { watch, ref } from "vue"
import UserIdentity from "@app/ui/components/elements/user-identity/UserIdentity.vue"
import useTranslation from '@app/shared/composables/useTranslation';
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue'
import { Types , Easing, Timing } from '@app/ui/components/abstracts/transition-is/types'
import { useRoute } from "vue-router";

const { translate } = useTranslation();
const route = useRoute()

const routeTitle = ref<string | unknown>('')
watch(route, (to):void => {
    routeTitle.value = to.meta?.family as string
}, {flush: 'pre', immediate: true, deep: true})
</script>
<style src="./SectionHeader.scss" lang="scss" scoped></style>