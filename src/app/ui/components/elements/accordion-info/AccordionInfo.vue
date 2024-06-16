<template>
  <details
    :id="id"
    :title="title"
    :open="open"
    aria-labelledby="accordion-summary"
    aria-describedby="accordion-content"
    data-testid="ui-accordion"
    class="accordion-info"
  >
    <summary
      v-if="$slots['summary']"
      id="accordion-summary"
      class="accordion-info__summary"
    >
      <!-- @slot Summary: slot to show accordion summary title -->
      <slot name="summary" />
    </summary>
    <article
      v-if="$slots['content']"
      id="accordion-content"
      class="accordion-info__content"
    >
      <!-- @slot Content: slot to show accordion nested content -->
      <slot name="content" />
    </article>
  </details>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { UniqueId } from '@app/ui/types';

defineProps({
  /**
   * Set the unique id of the ui accordion
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'AccordionID'
  },
  /**
   * Set the aria accesibility label
   */
  title: {
    type: String as PropType<string>,
    default: 'Accordion title'
  },

  /**
   * Set accordion state
   */
  open: {
    type: Boolean as PropType<boolean>,
    default: false
  }
});
</script>
<style src="./AccordionInfo.scss" lang="scss"></style>
