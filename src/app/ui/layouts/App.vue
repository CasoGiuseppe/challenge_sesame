<template>
  <RouterView v-slot="{ Component }">
    <Suspense timeout="0">
      <template #default>
        <component :is="Component" />
      </template>
    </Suspense>
  </RouterView>

  <!-- Notification -->
  <TransitionIs
    v-if="hasEventsToShow"
    group
    :type="Types.FROMRIGHT"
    :easing="Easing.ELASTIC"
    :timing="Timing.NORMAL"
  >
    <ToastEvent
      v-for="{ type, id, mode } of emittedEventsDetails"
      :id="id"
      :type="ToastType[type.toUpperCase() as keyof typeof ToastType]"
      :timer="{ active: true, duration: 3500 }"
      @close="removeToast"
    > {{ translate({ key: `EVENTS.${mode}` }) }}</ToastEvent>
  </TransitionIs>
</template>
<script setup lang="ts">
import { onMounted, provide } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalEventsStore } from '@app/shared/stores/global-events/globalEvents';
import { ToastEvent, TransitionIs } from '@app/ui/components';
import { Types, Easing, Timing } from '@app/ui/components/abstracts/transition-is/types';
import { Types as ToastType } from '@app/ui/components/elements/toast-event/types'
import {
  useAsyncComponent,
  useTranslation,
  useResourcesUtilities,
  useRouterUtilities,
  type IAsyncComponent,
  type ITranslation,
  type IResourcesUtilities,
  type IRouterUtilities
} from '@app/shared/composables';
import {
  keyUseAsyncComponent,
  keyUseTranslations,
  keyUseResourcesUtilities,
  keyUseRouterUtilities
} from '@app/shared/types/symbols';
// import { dependencies } from '@modules/core/dependencies'

const { create } = useAsyncComponent();
const { translate, setNewTranslationLocale } = useTranslation();
const { loadExternalsResources } = useResourcesUtilities();
const { getRoutesByType } = useRouterUtilities();

provide<IAsyncComponent>(keyUseAsyncComponent, { create });
provide<ITranslation>(keyUseTranslations, { translate, setNewTranslationLocale });
provide<IResourcesUtilities>(keyUseResourcesUtilities, { loadExternalsResources });
provide<IRouterUtilities>(keyUseRouterUtilities, { getRoutesByType });

const { hasEventsToShow, emittedEventsDetails } = storeToRefs(useGlobalEventsStore);
const { removeEventByID } = useGlobalEventsStore;
const removeToast = ({ id }: { id: string }) => removeEventByID({ id });

onMounted(async () => {
  // const vacancy = dependencies.provideVacancyPloc()
  // const applicants = dependencies.provideApplicantPloc()
  // applicants.createApplicant({
  //   firstName: 'test',
  //   lastName: 'test',
  //   email: 'eexample.com',
  //   statusId: '397627b9-7856-47fc-a918-f2055108d0a0',
  // })
  // vacancy.getVacancyByID('e5d90a95-ec3f-4a15-b884-bbea519f1e05')
  // await applicants.addNewApplicant({
  //   firstName: 'ciccio', lastName: 'pasticcio', vacancyId: 'e5d90a95-ec3f-4a15-b884-bbea519f1e05', statusId: '397627b9-7856-47fc-a918-f2055108d0a0'
  // })
  // await applicants.getApplicantsByID({vacancyId: 'e5d90a95-ec3f-4a15-b884-bbea519f1e05'})
  // await applicants.changeApplicantArea({ employeeId: '00957c5e-83da-4184-be8a-034fda845e18', firstName: 'testName', lastName: 'testSurname', vacancyId: 'e5d90a95-ec3f-4a15-b884-bbea519f1e05', statusId: '2c11a05b-884c-4a80-ac76-ac3b1bb2169d'})
});
</script>
