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
      v-for="{ type, id, translation } of emittedEventsDetails"
      :id="id"
      :key="id"
      :type="ToastType[type.toUpperCase() as keyof typeof ToastType]"
      :timer="{ active: true, duration: 3500 }"
      @close="removeToast"
    > {{ translation }}</ToastEvent>
  </TransitionIs>
</template>
<script setup lang="ts">
import { onBeforeMount, provide } from 'vue';
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

const { create } = useAsyncComponent();
const { translate, setNewTranslationLocale } = useTranslation();
const { loadExternalsResources } = useResourcesUtilities();
const { getRoutesByType } = useRouterUtilities();

const { hasEventsToShow, emittedEventsDetails } = storeToRefs(useGlobalEventsStore);
const { removeEventByID } = useGlobalEventsStore;
const removeToast = ({ id }: { id: string }) => removeEventByID({ id });

onBeforeMount(() => {
  provide<IAsyncComponent>(keyUseAsyncComponent, { create });
  provide<ITranslation>(keyUseTranslations, { translate, setNewTranslationLocale });
  provide<IResourcesUtilities>(keyUseResourcesUtilities, { loadExternalsResources });
  provide<IRouterUtilities>(keyUseRouterUtilities, { getRoutesByType });
})
</script>
