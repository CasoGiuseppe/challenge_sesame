import { loadExternalsResources, type DynamicImportPath } from "@app/router/utilties";

const translations = <DynamicImportPath[]>[
  { path: import('@modules/recruitment/presentation/translation/es') },
  { path: import('@modules/fake/presentation/translation/es') }
]

export default async () => {
  return {
    "FORM": {
      "placeholder": {
        "search": "Buscar"
      }
    },
    "ACCION": {
      "add": "Añadir candidato"
    },
    "ROLES": {
      "admin": "Administrator"
    },
    "AREAS": {
      "talent": "Talento"
    },
    ...(await loadExternalsResources({ collection: translations })).reduce((obj, item) => Object.assign(obj, item), {}),
  }
}