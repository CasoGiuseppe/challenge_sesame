import { createApp, defineAsyncComponent } from 'vue';
import router from '@app/router';
import pinia from '@app/shared/stores/pinia';
import i18n from '@app/translation';

import "@assets/index.scss";

// create lazy APP
const app = createApp(defineAsyncComponent(() => import('@app/ui/App.vue')));

app
  .use(router)
  .use(i18n)
  .use(pinia);

router.isReady().then(() => {
  app.mount('#app')
});
