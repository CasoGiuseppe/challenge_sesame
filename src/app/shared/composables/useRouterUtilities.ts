import { useRouter, type RouteRecordRaw } from 'vue-router';
import type { IRouterUtilities } from './interfaces/IRouterUtilities';
import type { DomainRoutes } from '@app/router/interfaces';

export default function useRouterUtilities(): IRouterUtilities {
  /**
   * A function to load external Vue Router configurations asynchronously.
   * @param { Array }collection - An array of DomainRoutes objects, each containing a router property.
   * @returns { Promise<RouteRecordRaw | any[]> }A Promise that resolves to an array of RouteRecordRaw objects or an empty array in case of an error.
   */
  const loadExternalsRouters = async ({ collection }: { collection: DomainRoutes[]; }): Promise<RouteRecordRaw | any[]> => {
    try {
      const importAll = await Promise.all(
        collection.map(async (child) => {
          return (await child.router).default;
        })
      );

      return importAll.flat(1);
    } catch (e) {
      return [] as RouteRecordRaw[];
    }
  };

  const getRoutesByType = ({ type = 'default' }: { type?: string }): any => {
    const router = useRouter()
    
    return router.
      getRoutes()
      .filter((route: RouteRecordRaw) => route.meta?.type === type)
      .map(({name, meta: { translation }}) => {
        return {
          to: name,
          translation
        }
      })
  }

  return {
    loadExternalsRouters,
    getRoutesByType
  };
}
