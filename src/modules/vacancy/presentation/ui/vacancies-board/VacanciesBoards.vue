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
        :id="id"
        :key="id"
        :style="{ transitionDelay: `${index * 0.2}s` }"
      >
        <DraggableArea
          :id="id"
          :area="Areas[name.toUpperCase() as keyof typeof Areas]"
          :loading="isApplicantLoad"
          :cards="cardContentMapped(id)"
          :load-message="translate({ key: `RECRUITMENT.BOARD.AREAS.loading` })"
          @drop-end="dropEnd"
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
          <template #fallback>
            <span>{{
              translate({
                key: `RECRUITMENT.BOARD.AREAS.fallback`,
                options: {
                  area: translate({ key: `RECRUITMENT.BOARD.AREAS.${name.toLocaleLowerCase()}` })
                }
              })
            }}</span>
            <BaseButton
              id="addApplicant"
              :type="buttonTypes.SECONDARY"
              :size="buttonSizes.SMALL"
              :is="Is.ROUTERLINK"
              :to="{ name: 'createApplicant', params: { area: id } }"
            >
              <template #default>{{ translate({ key: `ACCION.add` }) }}</template>
            </BaseButton>
          </template>
          <template #items="{ property: { id, title, content, footer } }">
            <CardData
              :id="id"
              draggable
            >
              <template #title>{{ title }}</template>
              <template #content>{{
                translate({ key: `RECRUITMENT.INFO.createBy`, options: { user: content } })
              }}</template>
              <template #footer>
                <BaseIcon name="IconClock" />
                {{
                  compareDates({ input: footer as string })
                    ? translate({ key: `RECRUITMENT.INFO.today` })
                    : footer
                }}
              </template>
            </CardData>
          </template>
        </DraggableArea>
      </li>
    </TransitionIs>
  </LoadingIs>
</template>
<script setup lang="ts">
import { inject, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

import {
  DraggableArea,
  TransitionIs,
  LoadingIs,
  BaseIcon,
  CardData,
  BaseButton
} from '@app/ui/components/index';

import { Areas } from '@app/ui/components/tools/draggable-area/types';
import { Types, Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';
import { Sizes } from '@app/ui/components/base/base-icon/types';
import {
  Types as buttonTypes,
  Sizes as buttonSizes
} from '@app/ui/components/base/base-button/types';
import { Is } from '@app/ui/components/abstracts/component-is/types';

import { useVacancyStore } from '@modules/vacancy/presentation/store/vacancy';
import { useApplicantStore } from '@modules/applicant/presentation/store/applicant';
import type { IApplicantPersistenceData } from '@modules/applicant/data/models/mapper';
import { compareDates } from '@app/shared/utilities';
import { type ITranslation } from '@app/shared/composables';
import { keyUseTranslations } from '@app/shared/types/symbols';

const iconMapper = {
  [Areas.NEW]: 'IconInbox',
  [Areas.ACCEPTED]: 'IconCheck',
  [Areas.INTERVIEW]: 'IconUser',
  [Areas.SELECTED]: 'IconConfetti',
  [Areas.DISCARDED]: 'IconError'
};

const route = useRoute();
const { translate } = inject<ITranslation>(keyUseTranslations) as ITranslation;
const { isLoading: isVacancyLoad, savedVacancyAreas } = storeToRefs(useVacancyStore);
const { isLoading: isApplicantLoad, filterdApplicantsByArea } = storeToRefs(useApplicantStore);
const { setDraggingID } = useVacancyStore;

const cardContentMapped = (id: string) => {
  return filterdApplicantsByArea
    .value(id)
    .map(({ areaID, name, creator, createAt }: IApplicantPersistenceData) => {
      return {
        id: areaID,
        title: name,
        content: creator,
        footer: createAt
      };
    });
};

const scrollIntoView = ():void => {
  const area = route?.params?.area;
  if (!area) return;
  document.getElementById(area as string)?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
};

const dropEnd = ({evt, area}: {evt:DragEvent, area: string}): void => {
  console.log(evt.dataTransfer?.getData('applicantID'))
  console.log(area)
}
const dragLeave = ({ id }: { id: string }): void => { return }
onMounted(() => scrollIntoView())
</script>
<style src="./VacanciesBoards.scss" lang="scss" scoped></style>
