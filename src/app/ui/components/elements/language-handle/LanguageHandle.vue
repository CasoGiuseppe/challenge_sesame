<template>
  <aside class="language-handle">
    <slot />
    <ul class="language-handle__locales">
      <li
        :key="id"
        v-for="{ id, label } of locales"
      >
        <!-- @slot Language: slot-scope to show languages -->
        <slot :property="{ id, label }" name="locales" />
      </li>
    </ul>
  </aside>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types';
import { type PropType } from 'vue';
import type { ILanguages } from './types';

defineProps({
  /**
   * Set the unique id of the ui languages tool
   */
   id: {
    type: String as PropType<UniqueId>,
    default: 'languagesId'
  },

  /**
   * Set the list of laguages
   */
  locales: {
    type: Array as PropType<Array<ILanguages>>,
    default: () => []
  }
});
</script>
<style src="./LanguageHandle.scss" lang="scss" scoped></style>
