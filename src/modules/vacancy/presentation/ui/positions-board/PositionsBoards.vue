<template>
  <TransitionIs
      group
      tag="ul"
      :type="Types.FROMBOTTOM"
      :easing="Easing.ELASTIC"
      :timing="Timing.FAST"
      class="positions-boards"
  >
    <li
      v-for="index in 4"
      class="positions-boards__col"
      :key="index"
      :style="{ 'transitionDelay': `${index * .2}s` }"
    >
      <DraggableArea
        :area="Areas.INTERVIEW"
      >
        <template #title>title</template>
      </DraggableArea>
    </li>
  </TransitionIs>
</template>
<script setup lang="ts">
import DraggableArea from "@app/ui/components/tools/draggable-area/DraggableArea.vue"
import { Areas } from "@app/ui/components/tools/draggable-area/types"
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue';
import { Types, Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';

</script>
<style src="./PositionsBoards.scss" lang="scss" scoped></style>