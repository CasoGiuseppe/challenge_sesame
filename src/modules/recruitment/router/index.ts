import type { DynamicImportPath } from "@app/router/interfaces";
import type { RouteRecordRaw } from "vue-router";
import useRouterUtilities from '@app/shared/composables/useRouterUtilities';

const { loadExternalsResources } = useRouterUtilities();

const routes = <DynamicImportPath[]>[
   { path: import('@/modules/positions/presentation/router') },
   { path: import('@/modules/applicants/presentation/router') }
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