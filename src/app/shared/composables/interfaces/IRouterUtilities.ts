import type { RouteRecordRaw } from "vue-router";
export interface IRouterUtilities {
  getRoutesByType({ type }: { type?: string }): RouteRecordRaw[]
}