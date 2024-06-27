
import { loadExternalsResources, type DynamicImportPath } from "@app/router/utilties";

const translations = <DynamicImportPath[]>[
  { path: import('@modules/recruitment/modules/positions/presentation/translations/locales/en.json') },
  { path: import('@modules/recruitment/modules/applicants/presentation/translations/locales/en.json') }
]

export default async () => {
  return {
    "RECRUITMENT": {
      "area": "Recruitment",
      ...(await loadExternalsResources({ collection: translations })).reduce((obj, item) => Object.assign(obj, item), {}),
    },
  }
}