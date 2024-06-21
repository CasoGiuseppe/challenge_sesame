<template>
    <section
      class="draggable-area"
      :area="area"
      :dragging="dragging"
    >
        <header
            v-if="$slots['title']"
            class="draggable-area__header"
        >
            <slot name="icon" />
            <h3 class="draggable-area__title">
                <slot name="title" />
            </h3>
        </header>
        <section
          class="draggable-area__active-zone"
          @dragover="handleDragOver"
          @dragenter="handleDragEnter"
          @dragleave="handleDragLeave"
        >
        </section>
    </section>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types'
import { ref, type PropType } from 'vue'
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator'
import { Areas } from './types'

defineProps({
  /**
   * Set the unique id of the ui dragArea
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'dragAreaId'
  },

  /**
   * Set area type [new, interview, hired, failed]
   */
  area: {
    type: String as PropType<Areas>,
    default: Areas.NEW,
    validator: (prop: Areas) =>
      ensureValueCollectionExists({ collection: Areas, value: prop })
  },
})

const dragging = ref<boolean>(false); 
const handleDragOver = (e:Event):void => e.preventDefault()
const handleDragEnter = ():boolean => dragging.value = true
const handleDragLeave = ():boolean => {
  console.log('ciccio')
  return dragging.value = false
}

</script>
<style src="./DraggableArea.scss" lang="scss"></style>