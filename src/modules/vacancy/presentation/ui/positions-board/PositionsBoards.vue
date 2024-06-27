<template>
  <LoadingIs :state="getLoadingState">
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
  </LoadingIs>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import DraggableArea from "@app/ui/components/tools/draggable-area/DraggableArea.vue"
import { Areas } from "@app/ui/components/tools/draggable-area/types"
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue';
import { Types, Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';
import { useVacancyStore } from '@modules/vacancy/presentation/store/vacancy';
import LoadingIs from '@app/ui/components/abstracts/loading-is/LoadingIs.vue';

const { getLoadingState } = storeToRefs(useVacancyStore)
</script>
<style src="./PositionsBoards.scss" lang="scss" scoped></style>