<template>
  <Transition
    v-if="isNotAGroup"
    :name="type"
    mode="out-in"
    appear
    class="transition-is"
    @after-enter="removeBehaviour"
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
    @after-enter="afterEnter"
    @before-enter="beforeEnter"
  >
    <slot />
  </TransitionGroup>
</template>
<script setup lang="ts">
import { type PropType, computed } from 'vue';
import { Types, Easing, Timing } from './types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';

const { type, group } = defineProps({
  /**
   * Set the type of custom animation [from-bottom, from-left, from-right, from-top]
   */
  type: {
    type: String as PropType<Types>,
    default: Types.FROMBOTTOM,
    validator: (prop: Types) =>
      ensureValueCollectionExists({ collection: Types, value: prop })
  },

  /**
   * Set if transition handle a group of elements
   */
  group: {
    type: Boolean as PropType<boolean>,
    default: false
  },

  /**
   * Set easing type
   */
  easing: {
    type: String as PropType<Easing>,
    default: Easing.OUT,
    validator: (prop: Easing) =>
      ensureValueCollectionExists({ collection: Easing, value: prop })
  },

  /**
   * Set the animation velocity
   */
  timing: {
    type: String as PropType<Timing>,
    default: Timing.NORMAL,
    validator: (prop: Timing) =>
      ensureValueCollectionExists({ collection: Timing, value: prop })
  },

  /**
   * Set delay type
   */
   delay: {
    type: String as PropType<String>,
    default: '0s',
  },
});

const isNotAGroup = computed(() => !group)
const removeBehaviour = (el:Element) => {
  el.classList.remove('transition-is')
  el.removeAttribute('style')
}

const emits = defineEmits(['enter', 'before']);
const afterEnter = (el:Element) => emits('enter', { el: el })
const beforeEnter = (el: Element) => emits('before', { el: el })
</script>
<style lang="scss">
@include create-animation(
  $name: 'opacity',
  $from: translateY(0),
  $to: translateY(0),
  $duration: v-bind(timing),
  $duration-out: var(--outAnimationTime),
  $ease: v-bind(easing),
  $delay: v-bind(delay)
);

@include create-animation(
  $name: 'from-top',
  $from: translateY(-50%),
  $to: translateY(-50%),
  $duration: v-bind(timing),
  $duration-out: var(--outAnimationTime),
  $ease: v-bind(easing),
  $delay: v-bind(delay)
);

@include create-animation(
  $name: 'from-bottom',
  $from: translateY(20%),
  $to: translateY(20%),
  $duration: v-bind(timing),
  $duration-out: var(--outAnimationTime),
  $ease: v-bind(easing),
  $delay: v-bind(delay)
);

@include create-animation(
  $name: 'from-left',
  $from: translateX(-50%),
  $to: translateX(-50%),
  $duration: v-bind(timing),
  $duration-out: var(--outAnimationTime),
  $ease: v-bind(easing),
  $delay: v-bind(delay)
);

@include create-animation(
  $name: 'from-right',
  $from: translateX(50%),
  $to: translateX(50%),
  $duration: v-bind(timing),
  $duration-out: var(--outAnimationTime),
  $ease: v-bind(easing),
  $delay: v-bind(delay)
);
</style>
<style src="./TransitionIs.scss" lang="scss"></style>
