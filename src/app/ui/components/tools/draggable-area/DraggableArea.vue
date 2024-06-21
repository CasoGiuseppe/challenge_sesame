<template>
    <section
      class="draggable-area"
      :area="area"
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
          class="draggable-area__active">
        </section>
    </section>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types'
import type { PropType } from 'vue'
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator'
import { Areas } from './types'

const props = defineProps({
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
</script>
<style src="./DraggableArea.scss" lang="scss"></style>