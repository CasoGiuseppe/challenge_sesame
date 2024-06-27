import type { RouteRecordRaw } from "vue-router";
import { loadExternalsResources, type DynamicImportPath } from "@app/router/utilties";

const routes = <DynamicImportPath[]>[
   { path: import('@/modules/recruitment/modules/vacancy/presentation/router') },
   { path: import('@/modules/recruitment/modules/applicant/presentation/router') }
]

export default [
    {
        path: 'recruitment',
        meta: { family: 'recruitment', type: 'default'},
        name: 'recruitment',
        redirect: { name: 'positions' },
        components: {
          default: () => import(/* webpackChunkName: "RecruitmentEntryPoint" */ '@app/ui/modules/recruitment/EntryPoint.vue'),
        },

        children: [
         ...((await loadExternalsResources({ collection: routes })) as RouteRecordRaw[]),
        ]
    }
] as RouteRecordRaw[]