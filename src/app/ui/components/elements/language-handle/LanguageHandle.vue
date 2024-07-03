<template>
  <section class="language-handle">
    <slot />
    <ul class="language-handle__list">
      <li v-for="({ id, label }, index) of cards">
        <!-- @slot Language: slot-scope to show languages -->
        <slot :property="{ id, label }" name="Language" />
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types';
import { inject, type PropType } from 'vue';
import type { ILanguages } from './types';
import type { ITranslation } from '@app/shared/composables';
import { keyUseTranslations } from '@app/shared/types/symbols';

const { translate } = inject<ITranslation>(keyUseTranslations) as ITranslation;

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
  cards: {
    type: Array as PropType<Array<ILanguages>>,
    default: () => []
  }
});
</script>
<style src="./LanguageHandle.scss" lang="scss" scoped></style>
