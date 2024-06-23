
import { loadExternalsResources, type DynamicImportPath } from "@app/router/utilties";

const translations = <DynamicImportPath[]>[
  { path: import('@modules/recruitment/presentation/translation/en') },
  { path: import('@modules/fake/presentation/translation/en') }
]

export default async () => {
  return {
    "FORM": {
      "placeholder": {
        "search": "Buscar"
      }
    },
    "ACCION": {
      "add": "Add applicant"
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