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
          :cards="cardContentMapped(id)"
          :load-message="translate({ key: `RECRUITMENT.BOARD.AREAS.loading` })"
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
          <template #items="{ property: { id, title, content } }">
              <CardData :id="id" draggable>
                  <template #title>{{ title }}</template>
                  <template #content>{{ content }}</template>
                  <!-- <template #footer>{{ footer }}</template> -->
              </CardData>
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
import type { IApplicantPersistenceData } from '@modules/applicant/data/models/mapper';
import CardData from "@app/ui/components/elements/card-data/CardData.vue";

const iconMapper = {
  [Areas.NEW]: 'IconInbox',
  [Areas.ACCEPTED]: 'IconCheck',
  [Areas.INTERVIEW]: 'IconUser',
  [Areas.SELECTED]: 'IconConfetti',
  [Areas.DISCARDED]: 'IconError'
};

const { isLoading: isVacancyLoad, savedVacancyAreas } = storeToRefs(useVacancyStore);
const { isLoading: isApplicantLoad, filterdApplicantsByArea } = storeToRefs(useApplicantStore)
const { translate } = useTranslation();
const cardContentMapped = (id: string) => {
  return filterdApplicantsByArea.value(id).map(({areaID, name, creator}: IApplicantPersistenceData) => {
    return {
      id: areaID,
      title: name,
      content: creator,
    }
  })
}
</script>
<style src="./VacanciesBoards.scss" lang="scss" scoped></style>
