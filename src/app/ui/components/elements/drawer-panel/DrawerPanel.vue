<template>
  <aside
    :id="id"
    :edit="edit"
    class="drawer-panel"
    data-testID="ui-modal"
    
  >drawer</aside>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types';
import { type PropType } from 'vue';

defineProps({
  /**
   * Set the unique id of the drawer panel
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'drawerPanel'
  },

   /**
   * Set the opne drawer edit state
   */
   edit: {
    type: Boolean as PropType<boolean>,
    default: true
  },
});
</script>
<style src="./DrawerPanel.scss" lang="scss"></style>
