
import { loadExternalsResources, type DynamicImportPath } from "@app/router/utilties";

const translations = <DynamicImportPath[]>[
  { path: import('../recruitment/en') },
  { path: import('../fake/en') }
]

export default async () => {
  return {
    "FORM": {
      "placeholder": {
        "search": "Buscar"
      }
    },
    "ACCION": {
      "add": "Add one",
      "create": "Create"
    },
    "ROLES": {
      "admin": "Administrator"
    },
    "AREAS": {
      "talent": "Talent"
    },
    ...(await loadExternalsResources({ collection: translations })).reduce((obj, item) => Object.assign(obj, item), {}),
  }
}