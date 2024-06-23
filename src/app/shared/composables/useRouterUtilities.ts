import { useRouter, type RouteRecordRaw } from 'vue-router';
import type { IRouterUtilities } from './interfaces/IRouterUtilities';
import type { DynamicImportPath } from '@app/router/interfaces';
import type { IRouterNavigation } from './types';

export default function useRouterUtilities(): IRouterUtilities {
  const router = useRouter()

  /**
   * A function to load external Vue Router configurations asynchronously.
   * @param { Array } collection - An array of DomainRoutes objects, each containing a router property.
   * @returns { Promise<any[]> }A Promise that resolves to an array of RouteRecordRaw objects or an empty array in case of an error.
   */
  const loadExternalsResources = async ({ collection }: { collection: DynamicImportPath[]; }): Promise<any[]> => {
    try {
      const importAll = await Promise.all(
        collection.map(async (child) => {
          return (await child.path).default;
        })
      );
      return importAll.flat(1);
    } catch (e) {
      return [] as RouteRecordRaw[];
    }
  };
  
  /**
   * A function to retrieve routes from the Vue Router based on their type.
   * @param { string } type - The type of routes to retrieve. Defaults to 'default'.
   * @returns { RouteRecordRaw[] } An array of RouteRecordRaw objects that match the specified type.
   */
  const getRoutesByType = ({ type = 'default' }: { type?: string }): RouteRecordRaw[] => {    
    return router.getRoutes()
      .filter((route: RouteRecordRaw) => route.meta?.type === type)
  }

  return {
    loadExternalsResources,
    getRoutesByType
  };
}
