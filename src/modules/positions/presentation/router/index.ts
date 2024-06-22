import type { RouteRecordRaw } from 'vue-router';

export default [
    {
        path: 'positions',
        meta: { family: 'recruitment', type: 'recruitment'},
        name: 'positions',
        components: {
          default: () => import(/* webpackChunkName: "PositionsBoard" */ '@modules/positions/presentation/ui/positions-board/PositionsBoards.vue'),
          aside: () => import(/* webpackChunkName: "Panel" */ '@app/ui/layouts/partials/section-panel/SectionPanel.vue'),
        },
        children: [
          {
            path: 'create',
            meta: { family: 'recruitment'},
            name: 'createPosition',
            components: {
              panel: () => import(/* webpackChunkName: "CreatePosition" */ '@modules/positions/presentation/ui/create-position/CreatePosition.vue'),
            }
          },
        ]
      },
] as RouteRecordRaw[]