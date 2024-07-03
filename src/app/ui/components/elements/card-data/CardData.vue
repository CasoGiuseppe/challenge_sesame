<template>
    <article
      :id="id"
      :class="[
        'card-data',
        `${isDragged ? 'card-data--is-dragged' : ''}`
      ]"
      aria-labelledby="ui-card-title"
      aria-describedby="ui-card-content"
      data-testID="ui-card-test"
      :draggable="draggable"
      @dragstart="handleDragStart($event, id)"
      @dragend="handleDragEnd"
    >
      <header class="card-data__header">
        <h2
          id="ui-card-title"
          v-if="$slots['title']"
          class="card-data__title card-data--is-truncate"
        > 
            <!-- @slot Title: slot to show card title -->
            <slot name="title" />
        </h2>
        <button
          v-if="contextualMenu"
          class="card-data__contextual-action"
          aria-label="Open contextual menu"
          data-testID="ui-card-contextual-test"
        >
          <span />
        </button>
      </header>
      <p
        id="ui-card-content"
        v-if="$slots['content']"
        class="card-data__content"
      >
        <!-- @slot Content: slot to show card main content -->
        <slot name="content" />
      </p>

      <footer
        v-if="$slots['footer']"
        class="card-data__footer"
      >
        <!-- @slot Footer: slot to show card footer info -->
        <slot name="footer" />
      </footer>
    </article>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types';
import { computed, ref, type PropType } from 'vue';
const { id } = defineProps({
  /**
   * Set the unique id of the ui card data
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'cardId'
  },

  /**
   * Set action contextual menu visibility
   */
  contextualMenu: {
    type: Boolean as PropType<boolean>,
    default: true
  },

  /**
   * Set draggable state of element
   */
   draggable: {
    type: Boolean as PropType<boolean>,
    default: false
  }
});

const dragged = ref<boolean>(false); 
const isDragged = computed(():boolean => dragged.value) 
const customEmits = defineEmits(['drag-init', 'drag-stop']);

const handleDragStart = (evt: DragEvent, id: string) => {
  if(!evt.dataTransfer) return;
  evt.dataTransfer.effectAllowed = 'move';
  evt.dataTransfer.dropEffect = 'move';
  evt.dataTransfer.setData('applicantID', id);
  dragged.value = true;
  customEmits('drag-init', { id });
}
const handleDragEnd = () => {
  dragged.value = false;
  customEmits('drag-stop', { id });
}
</script>
<style src="./CardData.scss" lang="scss" scoped></style>