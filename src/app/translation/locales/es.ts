
import type { DynamicImportPath } from '@/app/router/interfaces';
import useRouterUtilities from '@app/shared/composables/useRouterUtilities';
const { loadExternalsRouters } = useRouterUtilities();

const translations = <DynamicImportPath[]>[
  { path: import('@/modules/positions/presentation/translations/locales/es.json') },
  { path: import('@/modules/applicants/presentation/translations/locales/es.json') }
]

export default async () => {
  return {
    "message": "Hola! desde { name}",
    "MENU": {
      "role": {
        "admin": "Administrador"
      },
      "sections": {
        "name": "Talento"
      },
      "navigation": {
        "recruitment": "Reclutamiento",
        "fake": "Sección fake",

        ...(await loadExternalsRouters({ collection: translations })).reduce((obj, item) => Object.assign(obj, item), {}),
      }
    }
  }
}