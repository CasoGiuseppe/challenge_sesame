<template>
  <menu
    :class="[
      'tabs-bar',
      tabsExists ? '' : 'tabs-bar--is-empty',
    ]">
    <ul
      v-if="tabsExists"
      class="tabs-bar__list">
    </ul>
    <template v-else>
      No tabs was found
    </template>
  </menu>
</template>
<script setup lang="ts">
import type { UniqueId } from '@/app/ui/types';
import { computed, type PropType } from 'vue';
import type { ITabs } from './types';

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

const tabsExists = computed(() => tabs.length > 0)
</script>
<style src="./TabsBar.scss" lang="scss"></style>
