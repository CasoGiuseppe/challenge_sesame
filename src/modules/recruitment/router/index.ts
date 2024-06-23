import type { RouteRecordRaw } from "vue-router";
import { loadExternalsResources, type DynamicImportPath } from "@app/router/utilties";

const routes = <DynamicImportPath[]>[
   { path: import('@/modules/recruitment/modules/positions/presentation/router') },
   { path: import('@/modules/recruitment/modules/applicants/presentation/router') }
]

export default [
    {
        path: 'recruitment',
        meta: { family: 'recruitment', type: 'default'},
        name: 'recruitment',
        redirect: { name: 'positions' },
        components: {
          default: () => import(/* webpackChunkName: "RecritmentEntryPoint" */ '@modules/recruitment/presentation/ui/entryPoint.vue'),
        },

        children: [
         ...((await loadExternalsResources({ collection: routes })) as RouteRecordRaw[]),
        ]
    }
] as RouteRecordRaw[]