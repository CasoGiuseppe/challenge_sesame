<template>
  <LoadingIs
    :state="isVacancyLoad"
    :message="translate({ key: `RECRUITMENT.BOARD.loading` })"
  >
    <TransitionIs
      group
      tag="ul"
      :type="Types.FROMBOTTOM"
      :easing="Easing.ELASTIC"
      :timing="Timing.FAST"
      class="vacancies-boards"
    >
      <li
        v-for="({ id, name }, index) in savedVacancyAreas"
        class="vacancies-boards__col"
        :key="id"
        :style="{ transitionDelay: `${index * 0.2}s` }"
      >
        <DraggableArea
          :id="id"
          :area="Areas[name.toUpperCase() as keyof typeof Areas]"
          :loading="isApplicantLoad"
        >
          <template #title>{{
            translate({ key: `RECRUITMENT.BOARD.AREAS.${name.toLocaleLowerCase()}` })
          }}</template>
          <template #icon>
            <BaseIcon
              :size="Sizes.L"
              :name="iconMapper[Areas[name.toUpperCase() as keyof typeof Areas]]"
            />
          </template>
        </DraggableArea>
      </li>
    </TransitionIs>
  </LoadingIs>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import DraggableArea from '@app/ui/components/tools/draggable-area/DraggableArea.vue';
import { Areas } from '@app/ui/components/tools/draggable-area/types';
import TransitionIs from '@app/ui/components/abstracts/transition-is/TransitionIs.vue';
import { Types, Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';
import LoadingIs from '@app/ui/components/abstracts/loading-is/LoadingIs.vue';
import useTranslation from '@app/shared/composables/useTranslation';
import BaseIcon from '@app/ui/components/base/base-icon/BaseIcon.vue';
import { Sizes } from '@app/ui/components/base/base-icon/types';
import { useVacancyStore } from '@modules/vacancy/presentation/store/vacancy';
import { useApplicantStore } from '@modules/applicant/presentation/store/applicant';

const iconMapper = {
  [Areas.NEW]: 'IconInbox',
  [Areas.ACCEPTED]: 'IconCheck',
  [Areas.INTERVIEW]: 'IconUser',
  [Areas.SELECTED]: 'IconConfetti',
  [Areas.DISCARDED]: 'IconError'
};

const { isLoading: isVacancyLoad, savedVacancyAreas } = storeToRefs(useVacancyStore);
const { isLoading: isApplicantLoad } = storeToRefs(useApplicantStore)
const { translate } = useTranslation();
</script>
<style src="./VacanciesBoards.scss" lang="scss" scoped></style>
