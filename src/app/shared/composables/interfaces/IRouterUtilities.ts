import type { DynamicImportPath } from "@app/router/interfaces";
import type { RouteRecordRaw } from "vue-router";

export interface IRouterUtilities {
    loadExternalsRouters({ collection }: { collection: DynamicImportPath[]}): Promise<any[]>
    getRoutesByType({ type }: { type?: string }): RouteRecordRaw[]
  }