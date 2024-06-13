<template>
  <picture class="base-icon">
    <component
      data-testID="ui-icon"
      v-if="name !== null"
      :is="asyncIcon"
      :id="id"
      :class="[ `base-icon--is-${size}` ]"
    />
  </picture>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
import type { UniqueId } from '@app/ui/types';
import { Sizes } from './types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';
import useAsyncComponent from '@app/shared/composables/useAsyncComponent';

const { create } = useAsyncComponent();
const { name } = defineProps({
  /**
   * Set the unique id of the ui button
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'iconId'
  },

  /**
   * Set icon name to get svg file
   */
  name: {
    type: String as PropType<string>,
      required: true
  },

  /**
   * Set the icon size [L, M]
   */
  size: {
    type: String as PropType<Sizes>,
    default: Sizes.M,
    validator: (prop: Sizes) => ensureValueCollectionExists({ collection: Sizes, value: prop })
  }
})

const asyncIcon = await create({ component: `elements/icons/${name}` })
</script>
<style src="./BaseIcon.scss" lang="scss"></style>
