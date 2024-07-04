
import type { DynamicImportPath } from '@app/shared/composables/types'
import useResourcesUtilities from '@app/shared/composables/useResourcesUtilities';
const { loadExternalsResources } = useResourcesUtilities();

export { loadExternalsResources, type DynamicImportPath }