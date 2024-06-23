<template>
  <ul class="positions-boards">
    <li
      v-for="index in 4"
      class="positions-boards__col"
      :key="index"
      :style="{ 'animationDelay': `${index * .2}s` }"
    >
      <DraggableArea
        :area="Areas.INTERVIEW"
      >
        <template #title>title</template>
      </DraggableArea>
    </li>
  </ul>
</template>
<script setup lang="ts">
import DraggableArea from "@app/ui/components/tools/draggable-area/DraggableArea.vue"
import { Areas } from "@app/ui/components/tools/draggable-area/types"
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue';
import { Types, Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';

const Enter = () => console.log("Enter");
</script>
<style src="./PositionsBoards.scss" lang="scss" scoped></style>