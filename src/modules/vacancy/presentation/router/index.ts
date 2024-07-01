import type { RouteRecordRaw } from 'vue-router';
import { dependencies } from '@modules/core/dependencies';

export default {
    path: 'positions/:area?',
    meta: { family: 'recruitment', type: 'recruitment'},
    name: 'positions',
    components: {
      default: () => import(/* webpackChunkName: "VacanciesBoard" */ '@modules/vacancy/presentation/ui/vacancies-board/VacanciesBoards.vue'),
      aside: () => import(/* webpackChunkName: "Panel" */ '@app/ui/layouts/partials/section-panel/SectionPanel.vue'),
    },

    beforeEnter: async () => {
      const vacancy = dependencies.provideVacancyPloc()
      vacancy.getVacancyByID()
    },

    children: [
      {
        path: 'create',
        meta: { family: 'recruitment'},
        name: 'createPosition',
        components: {
          panel: () => import(/* webpackChunkName: "CreatePosition" */ '@modules/vacancy/presentation/ui/create-position/CreatePosition.vue'),
        }
      },
    ]
  } as RouteRecordRaw