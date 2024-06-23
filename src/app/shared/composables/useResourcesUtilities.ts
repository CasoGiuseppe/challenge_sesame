import type { DynamicImportPath } from "@app/shared/composables/types";
import type { IResourcesUtilities } from "./interfaces/IResourcesUtilities"

export default function useResourcesUtilities(): IResourcesUtilities {
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
      return [];
    }
  };

  return {
    loadExternalsResources,
  }
}