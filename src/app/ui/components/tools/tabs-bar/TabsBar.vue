<template>
  <menu :class="['tabs-bar', tabsExists ? '' : 'tabs-bar--is-empty']">
    <TransitionIs
      v-if="tabsExists"
      group
      tag="ul"
      class="tabs-bar__list"
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
import { computed, type PropType } from 'vue';
import type { ITabs } from './types';
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue';

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

const tabsExists = computed(() => tabs.length > 0);
</script>
<style src="./TabsBar.scss" lang="scss"></style>
