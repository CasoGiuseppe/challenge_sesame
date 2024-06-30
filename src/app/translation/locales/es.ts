import { loadExternalsResources, type DynamicImportPath } from "@app/router/utilties";

const translations = <DynamicImportPath[]>[
  { path: import('../recruitment/es') },
  { path: import('../fake/es') }
]

export default async () => {
  return {
    "FORM": {
      "placeholder": {
        "search": "Buscar",
        "firstname": "Nombre",
        "lastname": "Apellido",
        "email": "Correo electrónico",
      },
      "errors": {
        "validation": "El valor introducido no cumple con la validación",
        "required": "El campo necesita de un valor porqué es obligatorio"
      } 
    },
    "ACCION": {
      "add": "Añadir",
      "create": "Crear"
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