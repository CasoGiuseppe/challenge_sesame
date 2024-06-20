<template>
    <template v-if="ensureListIsNotEmpty">
        <menu class="router-navigation">
            <li 
                v-for="{to, translation} of list"
                :key="to"
            >
                <slot :property="{ to, translation }" name="navigation"/>
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
import BaseItemMenu from "@app/ui/components/base/base-item-menu/BaseItemMenu.vue"
import type { IRouterNavigation } from './types';

const { list } = defineProps({
    /**
     * Set the unique id of the navigation tool
     */
     id: {
        type: String as PropType<UniqueId>,
        default: 'FieldSetId'
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