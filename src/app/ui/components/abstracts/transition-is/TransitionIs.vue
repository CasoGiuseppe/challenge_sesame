<template>
  <Transition
    v-if="isNotAGroup"
    :name="type"
    mode="out-in"
    appear
    class="transition-is"
  >
    <slot />
  </Transition>
  <TransitionGroup
    v-else
    :name="type"
    v-bind="$attrs"
    mode="out-in"
    appear
    class="transition-is"
  >
    <slot />
  </TransitionGroup>
</template>
<script setup lang="ts">
import { type PropType, computed } from 'vue';
import { Types } from './types';

const { type, group } = defineProps({
  type: {
    type: String as PropType<Types>,
    default: Types.FROMBOTTOM
  },

  group: {
    type: Boolean as PropType<boolean>,
    default: false
  }
});

const isNotAGroup = computed(() => !group)
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
<style src="./TransitionIs.scss" lang="scss"></style>
