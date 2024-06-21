<template>
    <section
      :area="area"
      :dragging="dragging"
      class="draggable-area"
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
        <ul
          :id="id"
          @dragover="handleDragOver"
          @dragenter="handleDragEnter"
          @dragleave="handleDragLeave"
          @drop="handleDrop"
          class="draggable-area__active-zone"
        >
          
      </ul>
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

const customEmits = defineEmits(['drag-enter', 'drag-leave', 'drop-end', 'drag-over']);
const dragging = ref<boolean>(false); 
const handleDragOver = (payload:Event):void => {
  const { id } = payload.target as HTMLInputElement;
  customEmits('drag-over', { id })
}

const handleDragEnter = (payload: Event):void => {
  const { id } = payload.target as HTMLInputElement;
  dragging.value = true
  customEmits('drag-enter', { id })
}

const handleDragLeave = (payload: Event):void => {
  const { id } = payload.target as HTMLInputElement;
  dragging.value = false
  customEmits('drag-leave', { id })
}

const handleDrop = (payload: Event) => {
  payload.preventDefault()
  const { id } = payload.target as HTMLInputElement;
  customEmits('drop-end', { id })

}

</script>
<style src="./DraggableArea.scss" lang="scss"></style>