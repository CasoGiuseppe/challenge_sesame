import { loadExternalsResources, type DynamicImportPath } from "@app/router/utilties";

const translations = <DynamicImportPath[]>[
  { path: import('@modules/recruitment/modules/positions/presentation/translations/locales/es.json') },
  { path: import('@modules/recruitment/modules/applicants/presentation/translations/locales/es.json') }
]

export default async () => {
  return {
    "RECRUITMENT": {
      "area": "Reclutamiento",
      ...(await loadExternalsResources({ collection: translations })).reduce((obj, item) => Object.assign(obj, item), {}),
    },
  }
}