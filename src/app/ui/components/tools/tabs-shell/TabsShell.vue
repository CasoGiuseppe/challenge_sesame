<template>
  <section
    :id="id"
    class="tabs-shell"
    data-testID="ui-tabs-test"
  >
    <slot />
  </section>
</template>
<script setup lang="ts">
import type { UniqueId } from '@/app/ui/types';
import { type PropType } from 'vue';

defineProps({
  /**
   * Set the unique id of the tabs bar ui component
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'tabsBarId'
  },
});
</script>
<style src="./TabsShell.scss" lang="scss" scoped></style>
