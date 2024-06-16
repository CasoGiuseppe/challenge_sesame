<template>
    <article
      class="card-data"
      aria-labelledby="ui-card-title"
    >
      <header class="card-data__header">
        <h2
          v-if="$slots['title']"
          class="card-data__title"
          id="ui-card-title"
        > 
          <!-- @slot Title: slot to show card title -->
          <slot name="title" />
        </h2>
        <button
          v-if="hasAction"
          class="card-data__contextual-action"
          aria-label="Open contextual menu"
        >
          <span />
        </button>
      </header>
    </article>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types';
import type { PropType } from 'vue';
defineProps({
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
  hasAction: {
    type: Boolean as PropType<boolean>,
      default: true
  }
});
</script>
<style src="./CardData.scss" lang="scss"></style>