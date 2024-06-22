
import type { DynamicImportPath } from '@/app/router/interfaces';
import useRouterUtilities from '@app/shared/composables/useRouterUtilities';
const { loadExternalsRouters } = useRouterUtilities();

const translations = <DynamicImportPath[]>[
  { path: import('@/modules/positions/presentation/translations/locales/es.json') },
  { path: import('@/modules/applicants/presentation/translations/locales/es.json') }
]

export default async () => {
  return {
    "message": "Hello from { name}",
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

      ...(await loadExternalsRouters({ collection: translations })).reduce((obj, item) => Object.assign(obj, item), {}),
    }
  }
}