<template>
  <menu
    :class="['tabs-bar', tabs.length > 0 ? '' : 'tabs-bar--is-empty']"
    aria-orientation="horizontal"
    data-testID="ui-tabs-test"
  >
    <TransitionIs
      v-if="tabs.length > 0"
      group
      :easing="Easing.ELASTIC"
      :timing="Timing.FAST"
      tag="ul"
      class="tabs-bar__list"
      data-testID="ui-tabs-list-test"
    >
      <li
        :key="id"
        v-for="({ id, label }, index) of tabs"
        :style="{ transitionDelay: `${index * 0.05}s` }"
      >
        <!-- @slot Tab: slot scope to fill element -->
        <slot :property="{
            id,
            label
        }" name="tab" />
      </li>
    </TransitionIs>
    <template v-else> No tabs was found </template>
  </menu>
</template>
<script setup lang="ts">
import type { UniqueId } from '@/app/ui/types';
import { type PropType } from 'vue';
import type { ITabs } from './types';
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue';
import { Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';

const { tabs } = defineProps({
  /**
   * Set the unique id of the tabs bar ui component
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'tabsBarId'
  },

  /**
   * Set the list of tabs bar
   */
  tabs: {
    type: Array as PropType<Array<ITabs>>,
    default: () => []
  }
});
</script>
<style src="./TabsBar.scss" lang="scss"></style>
