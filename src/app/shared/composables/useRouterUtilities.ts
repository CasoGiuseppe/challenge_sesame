import { useRouter, type RouteRecordRaw } from 'vue-router';
import type { IRouterUtilities } from './interfaces/IRouterUtilities';

export default function useRouterUtilities(): IRouterUtilities {
  const router = useRouter()
  
  /**
   * A function to retrieve routes from the Vue Router based on their type.
   * @param { string } type - The type of routes to retrieve. Defaults to 'default'.
   * @returns { RouteRecordRaw[] } - An array of RouteRecordRaw objects that match the specified type.
   */
  const getRoutesByType = ({ type = 'default' }: { type?: string }): RouteRecordRaw[] => {    
    return router.getRoutes()
      .filter((route: RouteRecordRaw) => route.meta?.type === type)
  }

  return {
    getRoutesByType
  };
}
