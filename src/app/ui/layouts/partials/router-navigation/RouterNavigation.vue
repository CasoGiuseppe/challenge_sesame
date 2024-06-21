<template>
    <TransitionIs
        v-if="ensureListIsNotEmpty"
        group
        tag="menu"
        :type="Types.FROMLEFT"
        :easing="Easing.ELASTIC"
        :timing="Timing.NORMAL"
        class="router-navigation"
    >
        <li 
            v-for="({to, translation, family }, index) of list"
            :key="to"
            :style="{ 'transitionDelay': `${index * 0.02}s` }"
        >
            <slot :property="{ to, translation, family }" name="navigation"/>
        </li>
    </TransitionIs>
    <template v-else>
        <p class="router-navigation--has-warning">no items was found</p>
    </template>
</template>
<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { UniqueId } from '@app/ui/types';
import type { IRouterNavigation } from "@/app/shared/composables/types";
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue';
import { Types , Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';

const { list } = defineProps({
    /**
     * Set the unique id of the navigation tool
     */
     id: {
        type: String as PropType<UniqueId>,
        default: 'RouterNavigationId'
    },

    /**
     * Set the list of navigation items
     */
     list: {
        type: Array as PropType<Array<IRouterNavigation>>,
        default: () => []
    },
})

const ensureListIsNotEmpty = computed(() => list.length > 0)
</script>
<style src="./RouterNavigation.scss" lang="scss"></style>