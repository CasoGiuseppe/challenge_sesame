import type { RouteRecordName } from "vue-router";

export type IRouterNavigation = {
    to: RouteRecordName | undefined,
    translation: string | unknown,
    family: string | unknown
}