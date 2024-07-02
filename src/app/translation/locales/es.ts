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
      "create": "Crear un nuevo candidato",
      "backToStart": "Vuelve al principio",
      "loading": "Estamos procesando..."
    },
    "ROLES": {
      "admin": "Administrator"
    },
    "AREAS": {
      "talent": "Talento"
    },
    "EVENTS": {
      "creation": "El candidato se ha creado correctamente"
    },
    "ERRORS": {
      "generic": "OPS! Se ha producido un error, vuelve a intentarlo"
    },
    "WELCOME": {
      "title": "Bienvenido a Sesame HR System",
      "message": "Esta es una aplicación de muestra para demostrar la funcionalidad de Sesame HR System.",
      "action": "Empezar"
    },
    
    ...(await loadExternalsResources({ collection: translations })).reduce((obj, item) => Object.assign(obj, item), {}),
  }
}