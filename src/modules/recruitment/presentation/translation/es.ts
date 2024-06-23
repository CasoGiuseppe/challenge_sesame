import { loadExternalsResources, type DynamicImportPath } from "@app/router/utilties";

const translations = <DynamicImportPath[]>[
  { path: import('../../modules/positions/presentation/translations/locales/es.json') },
  { path: import('../../modules/applicants/presentation/translations/locales/es.json') }
]

export default async () => {
  return {
    "RECRUITMENT": {
      "area": "Reclutamiento",
      "MENU": {
        ...(await loadExternalsResources({ collection: translations })).reduce((obj, item) => Object.assign(obj, item), {}),
      }
    },
  }
}