import { createApp, defineAsyncComponent } from 'vue';
import router from '@app/router';
import pinia from '@app/shared/stores/pinia';
import { i18n } from '@app/translation';
import ClickOutside from "@app/ui/directive/clickOutside";

import "@assets/index.scss";

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
