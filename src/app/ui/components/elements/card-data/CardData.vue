<template>
    <article class="card-data">
        card
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
});
</script>
<style src="./CardData.scss" lang="scss"></style>