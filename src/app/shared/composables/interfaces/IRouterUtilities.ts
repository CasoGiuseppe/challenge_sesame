import type { DomainRoutes } from "@app/router/interfaces";
import type { RouteRecordRaw } from "vue-router";

export interface IRouterUtilities {
    loadExternalsRouters({ collection }: { collection: DomainRoutes[]}): Promise<RouteRecordRaw | any[]>
    getRoutesByType({ type }: { type?: string }): RouteRecordRaw[]
  }