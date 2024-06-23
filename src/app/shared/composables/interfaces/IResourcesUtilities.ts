import type { DynamicImportPath } from "@app/shared/composables/types";

export interface IResourcesUtilities {
    loadExternalsResources({ collection }: { collection: DynamicImportPath[]}): Promise<any[]>
}