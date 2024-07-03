import { createApp, defineAsyncComponent } from 'vue';
import router from '@app/router';
import pinia from '@app/shared/stores/pinia';
import { i18n } from '@app/translation';
import ClickOutside from "@app/ui/directive/clickOutside";
import recruitment from "@app/router/recruitment"
import fake from "@app/router/fake"
import vacancy from '@modules/vacancy/presentation/router';
import applicant from '@modules/applicant/presentation/router';
import "@assets/index.scss";

// create lazy APP
const app = createApp(defineAsyncComponent(() => import('@app/ui/layouts/App.vue')));

app
.directive('click-outside', ClickOutside)
.use(router)
.use(pinia)
.use(i18n);
app.config.warnHandler = () => null;

router.isReady().then(() => {
  router.addRoute('app', recruitment)
  router.addRoute('recruitment', vacancy)
  router.addRoute('recruitment', applicant)

  router.addRoute('app', fake)
  app.mount('#app')
});