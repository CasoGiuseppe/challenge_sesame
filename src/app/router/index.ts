import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: { name: 'home' },
      component: () => import(/* webpackChunkName: "RootLayout" */ '@app/ui/layouts/skeleton-root/SkeletonRoot.vue'),

      children: [
        {
          path: 'home',
          name: 'home',
          components: {
            aside: () => import(/* webpackChunkName: "MainNavigation" */ '@app/ui/layouts/partials/main-navigation/MainNavigation.vue')
          }
        }
      ],
    }    
  ]
})

export default router
