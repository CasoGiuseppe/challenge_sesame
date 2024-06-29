<template>
  <section
    :area="area"
    :dragging="dragging"
    :id="id"
    class="draggable-area"
  >
    <header
      v-if="$slots['title']"
      class="draggable-area__header"
    >
      <!-- @slot Icon: slot to show icon section -->
      <slot name="icon" />
      <h3 class="draggable-area__title">
        <!-- @slot Title: slot to show title label -->
        <slot name="title" />
      </h3>
    </header>
    <LoadingIs
      :state="loading"
      :is="Is.LAYER"
      :message="translate({ key: `RECRUITMENT.BOARD.AREAS.loading` })"
    >
      <TransitionIs
        group
        tag="ul"
        :type="Types.FROMLEFT"
        :easing="Easing.ELASTIC"
        :timing="Timing.NORMAL"
        @dragover="handleDragOver"
        @dragenter="handleDragEnter"
        @dragleave="handleDragLeave"
        @drop="handleDrop"
        class="draggable-area__active-zone"
      >
        <li
          :key="id"
          v-for="({ id, title, content, footer }, index) of cards"
          :style="{ transitionDelay: `${index * 0.05}s` }"
        >
          <!-- @slot Items: slot-scope to show cards -->
          <slot :property="{ id, title, content, footer }" name="items" />
        </li>
      </TransitionIs>
    </LoadingIs>
  </section>
</template>
<script setup lang="ts">
import type { UniqueId } from '@app/ui/types';
import { onMounted, ref, type PropType } from 'vue';
import { ensureValueCollectionExists } from '@app/ui/validators/useCustomValidator';
import { Areas, type ICardItem } from './types';
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue';
import { Types, Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';
import LoadingIs from '@app/ui/components/abstracts/loading-is/LoadingIs.vue';
import useTranslation from '@app/shared/composables/useTranslation';
import { Is } from '@app/ui/components/abstracts/loading-is/types';

const { cards, id } = defineProps({
  /**
   * Set the unique id of the ui dragArea
   */
  id: {
    type: String as PropType<UniqueId>,
    default: 'dragAreaId'
  },

  /**
   * Set area type [new, interview, hired, failed]
   */
  area: {
    type: String as PropType<Areas>,
    default: Areas.NEW,
    validator: (prop: Areas) => ensureValueCollectionExists({ collection: Areas, value: prop })
  },

  /**
   * Set the list of card items
   */
  cards: {
    type: Array as PropType<Array<ICardItem>>,
    default: () => []
  },

  /**
   * Set loading state
   */
   loading: {
    type: Boolean as PropType<Boolean>,
    default: false
  },
});

const customEmits = defineEmits(['drag-enter', 'drag-leave', 'drop-end', 'drag-over', 'load']);
const dragging = ref<boolean>(false);
const handleDragOver = (payload: Event): void => {
  const { id } = payload.target as HTMLInputElement;
  customEmits('drag-over', { id });
};

const handleDragEnter = (payload: Event): void => {
  const { id } = payload.target as HTMLInputElement;
  dragging.value = true;
  customEmits('drag-enter', { id });
};

const handleDragLeave = (payload: Event): void => {
  const { id } = payload.target as HTMLInputElement;
  dragging.value = false;
  customEmits('drag-leave', { id });
};

const handleDrop = (payload: Event) => {
  payload.preventDefault();
  const { id } = payload.target as HTMLInputElement;
  customEmits('drop-end', { id });
};

const { translate } = useTranslation();
onMounted(() => customEmits('load', { id }))
</script>
<style src="./DraggableArea.scss" lang="scss" scoped></style>
