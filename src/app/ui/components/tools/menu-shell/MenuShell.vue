<template>
    <TransitionIs
        v-if="ensureListIsNotEmpty"
        group
        :tag="tag"
        :type="animation"
        :easing="Easing.ELASTIC"
        :timing="Timing.NORMAL"
        :aria-orientation="orientation"
        class="menu-shell"
        :style="customStyle"
    >
        <li 
            v-for="(route, index) of routes"
            :key="route.id"
            :style="{ 'transitionDelay': `${index * 0.15}s` }"
        >
            <slot :property="route" name="navigation"/>
        </li>
    </TransitionIs>
    <template v-else>
        <p class="menu-shell--has-warning">no items was found</p>
    </template>
</template>
<script setup lang="ts">
import { computed, type PropType } from "vue"
import type { UniqueId } from '@app/ui/types'
import type { IRouterNavigation } from "@/app/shared/composables/types"
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue'
import { Types , Easing, Timing } from '@app/ui/components/abstracts/transition-is/types'
import { Orientation, type Style } from "./types"
import { ensureValueCollectionExists } from "@app/ui/validators/useCustomValidator"

const { routes } = defineProps({
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
     routes: {
        type: Array as PropType<Array<IRouterNavigation>>,
        default: () => []
    },

    /**
     * Set the orientation menu [horizontal, vertical]
     */
    orientation: {
        type: String as PropType<Orientation>,
        default: Orientation.VERTICAL,
        validator: (prop: Orientation) => ensureValueCollectionExists({ collection: Orientation, value: prop })
    },

    /**
     * Set the animation type [TransitionIs type]
     */
     animation: {
        type: String as PropType<Types>,
        default: Types.FROMLEFT,
        validator: (prop: Types) => ensureValueCollectionExists({ collection: Types, value: prop })
    },

    /**
     * Set transition list tag type
     */
     tag: {
        type: String as PropType<string>,
        default: 'menu'
    },

     /**
     * Set custom style properties
     */
     customStyle: {
        type: Object as PropType<Style>,
    },
})

const ensureListIsNotEmpty = computed(() => routes.length > 0)
</script>
<style src="./MenuShell.scss" lang="scss" scoped></style>