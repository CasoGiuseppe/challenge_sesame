import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import type { DomainRoutes } from './interfaces'
import loadDomainsRouters from './utilities';

const domainsRouters = <DomainRoutes[]>[
  { router: import('@modules/applicants/presentation/router') },
  { router: import('@modules/positions/presentation/router') }
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
          components: {
            aside: () => import(/* webpackChunkName: "MainNavigation" */ '@app/ui/layouts/partials/main-navigation/MainNavigation.vue'),
            header: () => import(/* webpackChunkName: "HeaderTitle" */ '@app/ui/layouts/partials/section-header/SectionHeader.vue'),
            content: () => import(/* webpackChunkName: "ContentBody" */ '@app/ui/layouts/partials/section-content/SectionContent.vue'),
          },

          children: [
            ...((await loadDomainsRouters({ collection: domainsRouters })) as RouteRecordRaw[]),

            {
              path: '/:pathMatch(.*)*',
              components: {
                default: () =>
                  import(/* webpackChunkName: "State404" */ '@app/ui/layouts/status/status-404/Status404.vue')
              }
            }
          ]
        }
      ],
    }    
  ]
})

export default router
