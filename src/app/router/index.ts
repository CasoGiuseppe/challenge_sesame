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
              meta: { family: 'positions'},
              name: 'positions',
              components: {
                default: () => import(/* webpackChunkName: "PositionsBoard" */ '@modules/positions/presentation/ui/positions-board/PositionsBoards.vue'),
                aside: () => import(/* webpackChunkName: "Panel" */ '@app/ui/layouts/partials/section-panel/SectionPanel.vue'),
              }
            },
            {
              path: 'applicants',
              meta: { family: 'applicants'},
              name: 'applicants',
              components: {
                default: () => import(/* webpackChunkName: "ApplicantsBoard" */ '@modules/applicants/presentation/ui/applicants-board/ApplicantsBoard.vue'),
                aside: () => import(/* webpackChunkName: "Panel" */ '@app/ui/layouts/partials/section-panel/SectionPanel.vue'),
              },
              children: [
                {
                  path: 'create',
                  meta: { family: 'applicants'},
                  name: 'createApplicant',
                  components: {
                    panel: () => import(/* webpackChunkName: "CreateApplicant" */ '@modules/applicants/presentation/ui/create-applicant/CreateApplicant.vue'),
                  }
                },
              ]
            }
          ]
        }
      ],
    }    
  ]
})

export default router
