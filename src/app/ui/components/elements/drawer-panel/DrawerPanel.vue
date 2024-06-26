<template>
  <dialog
    :id="id"
    :drawer="isDrawer"
    out="false"
    data-testID="ui-drawer"
    ref="drawer"
    :class="[
      'drawer-panel',
      `drawer-panel--is-${position}`
    ]"
  >
    <section class="drawer-panel__content">
      <header class="drawer-panel__header">
        <h2
          v-if="$slots['header']"
          class="drawer-panel__title">
            <!-- @slot Header: set drawer title -->
            <slot name="header" />
        </h2>
        <button
          class="drawer-panel__close"
          data-testID="ui-close-button"
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
import { computed, ref, watch, type PropType } from 'vue';
import { Types, Position } from './types';
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
  const target = drawer.value;
  if(!target) return;

  target.setAttribute('out', 'true')
  target.addEventListener("transitionend", (ev) => {
    if(ev.target !== target) return;
    
    target.close()
    target.setAttribute('out', 'false')
    
    setTimeout(() => customEmits('close', { state: false }), 50)
    target.removeEventListener("transitionend", () => {});
  }, true)
}

const isDrawer = computed(():boolean => props.is === Types.DRAWER)

watch(
    () => props.open,
    () => props.open ? show() : null,
    { immediate: true }
)
</script>
<style src="./DrawerPanel.scss" lang="scss" scoped></style>
