<template>
  <Transition :name="type" mode="out-in">
    <slot />
  </Transition>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import { Types } from './types';

const { type } = defineProps({
  type: {
    type: String as PropType<Types>,
    default: Types.FROMBOTTOM
  }
});
</script>
<style lang="scss">
@include create-animation(
  $name: 'from-bottom',
  $from: translateY(20%),
  $to: translateY(-20%),
  $duration: var(--animationTime),
  $duration-out: 0.2s
);

@include create-animation(
  $name: 'from-left',
  $from: translateX(-50%),
  $to: translateX(-50%),
  $duration: var(--animationTime),
  $duration-out: 0.2s
);

@include create-animation(
  $name: 'from-right',
  $from: translateX(50%),
  $to: translateX(50%),
  $duration: var(--animationTime),
  $duration-out: 0.2s
);
</style>
