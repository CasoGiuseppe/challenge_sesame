import type { RouteRecordRaw } from "vue-router";

export default [
    {
        path: 'recruitment',
        meta: { family: 'recruitment', type: 'default'},
        name: 'recruitment',
        components: {
          default: () => import(/* webpackChunkName: "RecritmentEntryPoint" */ '@modules/recruitment/presentation/ui/entryPoint.vue'),
        },
    }
] as RouteRecordRaw[]