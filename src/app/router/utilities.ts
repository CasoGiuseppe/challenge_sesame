import type { RouteRecordRaw } from "vue-router"
import type { DomainRoutes } from "./interfaces"

export default async ({ collection }: { collection: DomainRoutes[]}): Promise<RouteRecordRaw | any[]> => {
    try {
      const importAll = await Promise.all(
        collection.map(async (child) => {
          return (await child.router).default
        })
      )
  
      return importAll.flat(1)
    } catch (e) {
      return [] as RouteRecordRaw[]
    }
  }