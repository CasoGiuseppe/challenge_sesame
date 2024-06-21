<template>
    <section
      class="draggable-area"
      :area="area"
    >
        <header
            v-if="$slots['title']"
            class="draggable-area__header"
        >
            <h3 class="draggable-area__title">
                <slot name="title" />
            </h3>
        </header>
    </section>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types'
import type { PropType } from 'vue'
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator'
import { AREAS } from './types'

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
    type: String as PropType<AREAS>,
    default: AREAS.NEW,
    validator: (prop: AREAS) =>
      ensureValueCollectionExists({ collection: AREAS, value: prop })
  },
})
</script>
<style src="./DraggableArea.scss" lang="scss"></style>