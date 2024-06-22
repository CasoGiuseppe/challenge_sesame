import type { RouteRecordName } from "vue-router";

export type IRouterNavigation = {
    id: string,
    to?: RouteRecordName | undefined,
    translation?: string | unknown,
    family?: string | unknown
}