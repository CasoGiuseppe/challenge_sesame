import { createApp, defineAsyncComponent } from 'vue';
import router from '@app/router';
import pinia from '@app/shared/stores/pinia';
import { i18n } from '@app/translation';
import ClickOutside from "@app/ui/directive/clickOutside";
import useAsyncComponent from '@app/shared/composables/useAsyncComponent';
import useRouterUtilities from '@app/shared/composables/useRouterUtilities';
import useTranslation from '@app/shared/composables/useTranslation';
import type { IAsyncComponent } from '@app/shared/composables/interfaces/IAsyncComponent';

import "@assets/index.scss";
import {
  keyUseTranslations,
  keyUseAsyncComponent,
  keyUseRouterUtilities
} from "@app/shared/types/symbols";

// composable instances
const { create } = useAsyncComponent();

// create lazy APP
const app = createApp(defineAsyncComponent(() => import('@app/ui/layouts/App.vue')));

app
  .directive('click-outside', ClickOutside)
  .use(router)
  .use(i18n)
  .use(pinia);

router.isReady().then(() => {
  app.mount('#app')
});

app.provide<IAsyncComponent>(keyUseAsyncComponent, { create });
