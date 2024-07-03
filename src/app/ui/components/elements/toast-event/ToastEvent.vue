<template>
  <component
    ref="toast"
    :is="tag"
    :id="id"
    :class="[
      'toast-event',
      `toast-event--is-${type}`,
      `${exit ? 'toast-event--is-exit': ''}`
    ]"
    data-testID="ui-toast-message"
  >
    <section class="toast-event__body">
      <!-- @slot Default: slot to show toast body -->
      <slot />
    </section>
  </component>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, type PropType } from 'vue';
import type { UniqueId } from '@app/ui/types';
import { Tags, Types, type IContdown } from './types';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';
import { timeout as delay } from "@app/shared/utilities";

const { timer, id } = defineProps({
  /**
   * Set the unique id of the ui button
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'toastId'
  },
  /**
   * Set the toast type [success, error]
   */
  type: {
    type: String as PropType<Types>,
    default: Types.SUCCESS,
    validator: (prop: Types) => ensureValueCollectionExists({ collection: Types, value: prop })
  },
  /**
   * Set tag type
   */
  tag: {
    type: String as PropType<Tags>,
    default: Tags.DIALOG,
    validator: (prop: Tags) => ensureValueCollectionExists({ collection: Tags, value: prop })
  },
  /**
   * Set timing to hide toast
   */
  timer: {
    type: Object as PropType<IContdown>,
    default: () => {
      return { active: false, duration: 3000 };
    }
  }
});

const exit = ref<boolean>(false);
const toast = ref<HTMLElement | null>(null);
const emits = defineEmits(['close']);
const startTimer = async () => {
  if (!timer?.active) return;
  await delay(timer.duration)  // simulate delay
  handleClose()
};

const handleClose = () => {
  if (!toast.value) return;
  exit.value = true;
  toast.value.addEventListener('animationend', () => emits('close', { id }));
}

onMounted(() => startTimer());
</script>
<style lang="scss" src="./ToastEvent.scss"></style>
