<template>
    <article
      class="card-data"
      aria-labelledby="ui-card-title"
      aria-describedby="ui-card-content"
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
        >
          <span />
        </button>
      </header>
      <p
        id="ui-card-content"
        v-if="$slots['content']"
        class="card-data__content"
      >
        <slot name="content" />
      </p>

      <footer
        v-if="$slots['footer']"
        class="card-data__footer"
      >
        <slot name="footer" />
      </footer>
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
  contextualMenu: {
    type: Boolean as PropType<boolean>,
      default: true
  }
});
</script>
<style src="./CardData.scss" lang="scss"></style>