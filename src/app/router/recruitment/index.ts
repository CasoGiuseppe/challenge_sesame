import type { RouteRecordRaw } from "vue-router";

export default {
      path: 'recruitment',
      meta: { family: 'recruitment', type: 'default'},
      name: 'recruitment',
      components: {
        default: () => import(/* webpackChunkName: "RecruitmentEntryPoint" */ '@app/ui/modules/recruitment/EntryPoint.vue'),
      },
  } as RouteRecordRaw