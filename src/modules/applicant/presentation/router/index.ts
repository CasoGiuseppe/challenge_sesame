import type { RouteRecordRaw } from 'vue-router';

export default {
    path: 'applicants',
    meta: { family: 'recruitment', type: 'recruitment'},
    name: 'applicants',
    components: {
      default: () => import(/* webpackChunkName: "ApplicantsBoard" */ '@modules/applicant/presentation/ui/applicants-board/ApplicantsBoard.vue'),
      aside: () => import(/* webpackChunkName: "Panel" */ '@app/ui/layouts/partials/section-panel/SectionPanel.vue'),
    },
    children: [
      {
        path: 'create/:area?',
        meta: { family: 'recruitment'},
        name: 'createApplicant',
        components: {
          panel: () => import(/* webpackChunkName: "CreateApplicant" */ '@modules/applicant/presentation/ui/create-applicant/CreateApplicant.vue'),
        }
      },
    ]
  } as RouteRecordRaw