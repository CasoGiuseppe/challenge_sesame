<template>
  <details
    :id="id"
    :title="title"
    :open="open"
    aria-labelledby="accordion-summary"
    aria-describedby="accordion-content"
    data-testid="ui-accordion"
    :class="[
      'accordion-info',
      customColor ? 'accordion-info--has-color' : ''
    ]"
    :style="{'--custom-color': customColor ? `#${customColor}` : '#000000' }"
    data-testID="ui-accordion-test"
  >
    <summary
      v-if="$slots['summary']"
      id="accordion-summary"
      class="accordion-info__summary"
      data-testID="ui-summary-test"
    >
      <!-- @slot Summary: slot to show accordion summary title -->
      <slot name="summary" />
    </summary>
    <article
      v-if="$slots['content']"
      id="accordion-content"
      class="accordion-info__content"
      data-testID="ui-content-test"
    >
      <!-- @slot Content: slot to show accordion nested content -->
      <slot name="content" />
    </article>
  </details>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { UniqueId } from '@app/ui/types';
import { ensureValueIsHex } from '@app/ui/validators/useCustomValidator';

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
  },

  /**
  * Set custom color value 
  */
  customColor: {
    type: String as PropType<string>,
    validator: (prop: string) => ensureValueIsHex({ value: prop })
  }
});
</script>
<style src="./AccordionInfo.scss" lang="scss"></style>
