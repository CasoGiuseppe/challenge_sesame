<template>
  <dialog
    :id="id"
    :drawer="isDrawer"
    data-testID="ui-drawer"
    ref="drawer"
    :class="[
      'drawer-panel',
      `drawer-panel--is-${position}`
    ]"
  >
    <section
      class="drawer-panel__content"
      v-on-click-outside="close"
    >
      <header class="drawer-panel__header">
        <h2
          v-if="$slots['header']"
          class="drawer-panel__title">
            <!-- @slot Header: set drawer title -->
            <slot name="header" />
        </h2>
        <button
          class="drawer-panel__close"
          @click="close"
        />
      </header>
      <!-- @slot Body: slot to display drawer content -->
      <slot name="body" />
    </section>
  </dialog>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types';
import { computed, onMounted, ref, watch, type PropType } from 'vue';
import { Types, Position } from './types';
import { vOnClickOutside } from "@vueuse/components"
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';

const props = defineProps({
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
    default: false
  },
});

const customEmits = defineEmits(["close", "open"])
const drawer = ref<HTMLDialogElement | null>(null)
const show = ():void => drawer.value?.showModal?.();
const close = ():void => {
  drawer.value?.close()
  setTimeout(() => customEmits('close', { state: false }), 50)
  
}
const isDrawer = computed(():boolean => props.is === Types.DRAWER)

watch(
    () => props.open,
    (v: any) => props.open ? show() : null
)

onMounted(() => props.open ? show() : null )


</script>
<style src="./DrawerPanel.scss" lang="scss"></style>
