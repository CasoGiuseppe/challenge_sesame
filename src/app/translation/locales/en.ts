
import type { DynamicImportPath } from '@/app/router/interfaces';
import useRouterUtilities from '@app/shared/composables/useRouterUtilities';
const { loadExternalsResources } = useRouterUtilities();

const translations = <DynamicImportPath[]>[
  { path: import('@/modules/recruitment/modules/positions/presentation/translations/locales/es.json') },
  { path: import('@/modules/recruitment/modules/applicants/presentation/translations/locales/es.json') }
]

export default async () => {
  return {
    "MENU": {
      "role": {
        "admin": "Administrator"
      },
      "sections": {
        "name": "Talent"
      },
      "navigation": {
        "recruitment": "Recruitment",
        "fake": "Fake page"
      },

      ...(await loadExternalsResources({ collection: translations })).reduce((obj, item) => Object.assign(obj, item), {}),
    }
  }
}