import { createApp, defineAsyncComponent } from 'vue';
import router from '@app/router';
import pinia from '@app/shared/stores/pinia';
import { i18n } from '@app/translation';
import ClickOutside from "@app/ui/directive/clickOutside";
import useAsyncComponent from '@app/shared/composables/useAsyncComponent';
import type { IAsyncComponent } from '@app/shared/composables/interfaces/IAsyncComponent';

import recruitment from "@app/router/recruitment"
import fake from "@app/router/fake"
import vacancy from '@modules/vacancy/presentation/router';
import applicant from '@modules/applicant/presentation/router';

import "@assets/index.scss";
import {
  keyUseAsyncComponent,
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
app.config.warnHandler = () => null;

router.isReady().then(() => {
  router.addRoute('app', recruitment)
  router.addRoute('app', fake)
  router.addRoute('recruitment', vacancy)
  router.addRoute('recruitment', applicant)
  // router.replace({ name: 'recruitment' })

  app.mount('#app')
});

app.provide<IAsyncComponent>(keyUseAsyncComponent, { create });