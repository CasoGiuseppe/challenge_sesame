import type { RouteRecordRaw } from 'vue-router';

export default [
    {
        path: 'fake',
        meta: { family: 'fake', type: 'default'},
        name: 'fake',
        components: {
          default: () => import(/* webpackChunkName: "FakeEntryPoint" */ '@modules/fake/presentation/ui/EntryPoint.vue'),
        },
    }
] as RouteRecordRaw[]