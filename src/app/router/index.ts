import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import type { DynamicImportPath } from './interfaces'
import useRouterUtilities from '@app/shared/composables/useRouterUtilities';

const { loadExternalsResources } = useRouterUtilities();

const routes = <DynamicImportPath[]>[
  { path: import('@/modules/recruitment/router') },
  // { path: import('@/modules/positions/presentation/router') },
  // { path: import('@/modules/applicants/presentation/router') }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: { name: 'app' },
      component: () => import(/* webpackChunkName: "RootLayout" */ '@app/ui/layouts/skeleton-root/SkeletonRoot.vue'),

      children: [
        {
          path: 'app',
          name: 'app',
          redirect: { name: 'recruitment' },
          components: {
            aside: () => import(/* webpackChunkName: "SideNavigation" */ '@app/ui/layouts/partials/side-navigation/SideNavigation.vue'),
            header: () => import(/* webpackChunkName: "HeaderTitle" */ '@app/ui/layouts/partials/section-header/SectionHeader.vue'),
            content: () => import(/* webpackChunkName: "ContentBody" */ '@app/ui/layouts/partials/section-content/SectionContent.vue'),
          },

          children: [
            ...((await loadExternalsResources({ collection: routes })) as RouteRecordRaw[]),

            {
              path: 'fake',
              name: 'fake',
              meta: { type: 'default', family: 'fake' },
              components: {
                // aside: () => import(/* webpackChunkName: "SideNavigation" */ '@app/ui/layouts/partials/side-navigation/SideNavigation.vue'),
                // header: () => import(/* webpackChunkName: "HeaderTitle" */ '@app/ui/layouts/partials/section-header/SectionHeader.vue'),
                default: () => import(/* webpackChunkName: "FakePage" */ '@app/ui/layouts/fakes/FakePage.vue'),
              },
            },
          ]
        },

        

        {
          path: '/:pathMatch(.*)*',
          components: {
            default: () =>
              import(/* webpackChunkName: "State404" */ '@app/ui/layouts/status/status-404/Status404.vue')
          }
        }
      ],
    }    
  ]
})

export default router
