import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: { name: 'welcome' },
      component: () =>
        import(
          /* webpackChunkName: "RootLayout" */ '@app/ui/layouts/skeleton-root/SkeletonRoot.vue'
        ),

      children: [
        {
          path: 'welcome',
          name: 'welcome',
          components: {
            content: () =>
              import(/* webpackChunkName: "Welcome" */ '@app/ui/modules/welcome-page/EntryPoint.vue')
          }
        },
        {
          path: 'app',
          name: 'app',
          components: {
            aside: () =>
              import(
                /* webpackChunkName: "SideNavigation" */ '@app/ui/layouts/partials/side-navigation/SideNavigation.vue'
              ),
            header: () =>
              import(
                /* webpackChunkName: "HeaderTitle" */ '@app/ui/layouts/partials/section-header/SectionHeader.vue'
              ),
            content: () =>
              import(
                /* webpackChunkName: "ContentBody" */ '@app/ui/layouts/partials/section-content/SectionContent.vue'
              )
          },
        },

        {
          path: 'error/:code?',
          name: 'error',
          components: {
            content: () =>
              import(/* webpackChunkName: "ErrorPage" */ '@app/ui/layouts/status/status-service-error/StatusServiceError.vue')
          }
        },
        {
          path: '/:pathMatch(.*)*',
          components: {
            default: () =>
              import(
                /* webpackChunkName: "State404" */ '@app/ui/layouts/status/status-not-found/StatusNotFound.vue'
              )
          }
        }
      ]
    }
  ],
  strict: true
});

router.beforeEach((to, from) => {
  if (!to.name) return { path: '/welcome' };
});

export default router;
