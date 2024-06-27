import { loadExternalsResources, type DynamicImportPath } from "@app/router/utilties";

const translations = <DynamicImportPath[]>[
  { path: import('@/modules/recruitment/modules/vacancy/presentation/translations/locales/es.json') },
  { path: import('@/modules/recruitment/modules/applicant/presentation/translations/locales/es.json') }
]

export default async () => {
  return {
    "RECRUITMENT": {
      "area": "Reclutamiento",
      ...(await loadExternalsResources({ collection: translations })).reduce((obj, item) => Object.assign(obj, item), {}),
    },
  }
}