<template>
    <template v-if="ensureListIsNotEmpty">
        <menu class="router-navigation">
            <li 
                v-for="{to, translation, family } of list"
                :key="to"
            >
                <slot :property="{ to, translation, family }" name="navigation"/>
            </li>
        </menu>
    </template>
    <template v-else>
        <p class="router-navigation--has-warning">no items was found</p>
    </template>
</template>
<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { UniqueId } from '@app/ui/types';
import type { IRouterNavigation } from "@/app/shared/composables/types";

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