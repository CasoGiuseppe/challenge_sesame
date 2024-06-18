<template>
  <dialog>drawer</dialog>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types';
import { type PropType } from 'vue';
import { Types } from './types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';

defineProps({
  id: {
    type: String as PropType<UniqueId>,
    default: 'drawerPanel'
  },

  is: {
    type: String as PropType<Types>,
    default: Types.DRAWER,
    validator: (prop: Types) => ensureValueCollectionExists({ collection: Types, value: prop })
  }
});
</script>
<style src="./DrawerPanel.scss" lang="scss"></style>
