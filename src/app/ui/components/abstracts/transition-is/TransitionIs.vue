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
import { Types, Easing, Timing } from './types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';

const { type, group } = defineProps({
  type: {
    type: String as PropType<Types>,
    default: Types.FROMBOTTOM,
    validator: (prop: Types) =>
      ensureValueCollectionExists({ collection: Types, value: prop })
  },

  group: {
    type: Boolean as PropType<boolean>,
    default: false
  },

  easing: {
    type: String as PropType<Easing>,
    default: Easing.OUT,
    validator: (prop: Easing) =>
      ensureValueCollectionExists({ collection: Easing, value: prop })
  },

  timing: {
    type: String as PropType<Timing>,
    default: Timing.NORMAL,
    validator: (prop: Timing) =>
      ensureValueCollectionExists({ collection: Timing, value: prop })
  }
});

const isNotAGroup = computed(() => !group)
</script>
<style lang="scss">
@include create-animation(
  $name: 'from-top',
  $from: translateY(-50%),
  $to: translateY(-50%),
  $duration: v-bind(timing),
  $duration-out: var(--outAnimationTime),
  $ease: v-bind(easing)
);

@include create-animation(
  $name: 'from-bottom',
  $from: translateY(20%),
  $to: translateY(20%),
  $duration: v-bind(timing),
  $duration-out: var(--outAnimationTime),
  $ease: v-bind(easing)
);

@include create-animation(
  $name: 'from-left',
  $from: translateX(-50%),
  $to: translateX(-50%),
  $duration: v-bind(timing),
  $duration-out: var(--outAnimationTime),
  $ease: v-bind(easing)
);

@include create-animation(
  $name: 'from-right',
  $from: translateX(50%),
  $to: translateX(50%),
  $duration: v-bind(timing),
  $duration-out: var(--outAnimationTime),
  $ease: v-bind(easing)
);
</style>
<style src="./TransitionIs.scss" lang="scss"></style>
