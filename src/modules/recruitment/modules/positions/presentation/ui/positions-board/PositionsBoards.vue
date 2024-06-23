<template>
  <ul class="positions-boards">
    <li class="positions-boards__col">
      <DraggableArea
        :area="Areas.INTERVIEW"
      >
        <template #title>title</template>
      </DraggableArea>
    </li>

    <li class="positions-boards__col">
      <DraggableArea
        :area="Areas.INTERVIEW"
      >
        <template #title>title</template>
      </DraggableArea>
    </li>

    <li class="positions-boards__col">
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


</script>
<style src="./PositionsBoards.scss" lang="scss" scoped></style>