<template>
  <LoadingIs
    :state="isApplicantLoad"
    :message="translate({ key: `RECRUITMENT.BOARD.loading` })"
  >
    <TransitionIs
      group
      tag="ul"
      :type="Types.FROMBOTTOM"
      :easing="Easing.OUT"
      :timing="Timing.NORMAL"
      class="applicants-boards"
    >
      <li
        v-for="({ id, title, footer }, index) in applicantCardMapped()"
        class="applicants-boards__item"
        :id="id"
        :key="id"
        :style="{ transitionDelay: `${index * 0.1}s` }"
      >
        <CardData
          :id="id"
          :key="id"
        >
          <template #title>{{ title }}</template>
          <template #footer>
            <BaseIcon name="IconClock" />
            {{
              compareDates({ input: footer as string })
                ? translate({ key: `RECRUITMENT.INFO.today` })
                : footer
            }}
          </template>
        </CardData>
      </li>
    </TransitionIs>
  </LoadingIs>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import { storeToRefs } from 'pinia';
import { useApplicantStore } from '@modules/applicant/presentation/store/applicant';
import type { ITranslation } from '@app/shared/composables';
import { keyUseTranslations } from '@app/shared/types/symbols';
import {
  LoadingIs,
  TransitionIs,
  CardData,
  BaseIcon
} from '@app/ui/components/index';
import { Types, Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';
import { compareDates } from '@app/shared/utilities';

const { isLoading: isApplicantLoad, applicantCardMapped } = storeToRefs(useApplicantStore);
const { translate } = inject<ITranslation>(keyUseTranslations) as ITranslation;
</script>
<style src="./ApplicantsBoard.scss" lang="scss" scoped></style>
