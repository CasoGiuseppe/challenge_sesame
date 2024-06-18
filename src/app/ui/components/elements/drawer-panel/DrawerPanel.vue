<template>
  <dialog
    :id="id"
    :drawer
    class="drawer-panel"
    data-testID="ui-modal"
    ref="drawer"
  >drawer</dialog>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types';
import { computed, onMounted, ref, type PropType } from 'vue';
import { Types, Position } from './types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';

const { open, is } = defineProps({
  /**
   * Set the unique id of the drawer panel
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'drawerPanel'
  },

  /**
   * Set drawer type [drawer]
   */
  is: {
    type: String as PropType<Types>,
    default: Types.DRAWER,
    validator: (prop: Types) => ensureValueCollectionExists({ collection: Types, value: prop })
  },

  /**
   * Set drawer position [left, right, center]
   */
   position: {
    type: String as PropType<Position>,
    default: Position.CENTER,
    validator: (prop: Position) => ensureValueCollectionExists({ collection: Position, value: prop })
  },

   /**
   * Set the opne drawer initial state
   */
   open: {
    type: Boolean as PropType<boolean>,
    default: true
  },
});

const drawer = ref<HTMLDialogElement | null>(null)
const show = ():void => drawer.value?.showModal?.();
const isDrawer = computed(():boolean => is === Types.DRAWER)
onMounted(() => {
  open ? show() : null
})
</script>
<style src="./DrawerPanel.scss" lang="scss"></style>
