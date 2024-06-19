import { createRouter, createWebHistory } from 'vue-router'

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
            {
              path: 'positions',
              name: 'positions',
              components: {
                default: () => import(/* webpackChunkName: "PositionsBoard" */ '@modules/positions/presentation/ui/positions-board/PositionsBoards.vue'),
              }
            },
            {
              path: 'applicants',
              name: 'applicants',
              components: {
                default: () => import(/* webpackChunkName: "ApplicantsBoard" */ '@modules/applicants/presentation/ui/applicants-board/ApplicantsBoard.vue'),
              }
            }
          ]
        }
      ],
    }    
  ]
})

export default router
