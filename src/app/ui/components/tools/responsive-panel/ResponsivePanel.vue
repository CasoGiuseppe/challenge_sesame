<template>
    <aside
        :id="id"
        :open="open"
        class="responsive-panel"
        data-testID="ui-panel-test"
    >
        <header
            v-if="$slots['header']"
            class="responsive-panel__header"
        >
            <slot name="header" />
            <button
                v-if="$slots['body']"
                class="responsive-panel__close"
                :open="open"
                @click="displayPanel"
            ><span /></button>
        </header>
        <section
            v-if="$slots['body']"
            class="responsive-panel__content"
        >
            <slot name="body" />
        </section>
    </aside>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types';
import { ref, type PropType } from 'vue';

defineProps({
  /**
   * Set the unique id of the ui responsive panel
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'panelId'
  },
})

const open = ref<boolean>(false)
const displayPanel = ():void => { open.value =! open.value }
</script>
<style src="./ResponsivePanel.scss" lang="scss"></style>