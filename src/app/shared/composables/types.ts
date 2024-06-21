import type { RouteRecordName } from "vue-router";

export type IRouterNavigation = {
    id: RouteRecordName | undefined,
    to: RouteRecordName | undefined,
    translation: string | unknown,
    family: string | unknown
}