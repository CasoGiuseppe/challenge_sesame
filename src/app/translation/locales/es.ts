
import type { DynamicImportPath } from '@/app/router/interfaces';
import useRouterUtilities from '@app/shared/composables/useRouterUtilities';
const { loadExternalsResources } = useRouterUtilities();

const translations = <DynamicImportPath[]>[
  { path: import('@/modules/recruitment/modules/positions/presentation/translations/locales/es.json') },
  { path: import('@/modules/recruitment/modules/applicants/presentation/translations/locales/es.json') }
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

        ...(await loadExternalsResources({ collection: translations })).reduce((obj, item) => Object.assign(obj, item), {}),
      }
    }
  }
}