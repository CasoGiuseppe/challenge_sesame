
import { loadExternalsResources, type DynamicImportPath } from "@app/router/utilties";

const translations = <DynamicImportPath[]>[
  { path: import('@/modules/vacancy/presentation/translations/locales/en.json') },
  { path: import('@/modules/applicant/presentation/translations/locales/en.json') }
]

export default async () => {
  return {
    "RECRUITMENT": {
      "area": "Recruitment",
      ...(await loadExternalsResources({ collection: translations })).reduce((obj, item) => Object.assign(obj, item), {}),
    },
  }
}