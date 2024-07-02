
import { loadExternalsResources, type DynamicImportPath } from "@app/router/utilties";

const translations = <DynamicImportPath[]>[
  { path: import('../recruitment/en') },
  { path: import('../fake/en') }
]

export default async () => {
  return {
    "FORM": {
      "placeholder": {
        "search": "Search",
        "firstname": "First name",
        "lastname": "Last name",
        "email": "Email",
      },
      "errors": {
        "validation": "The entered value does not meet the validation",
        "required": "The field needs a value because it is mandatory"
      } 
    },
    "ACCION": {
      "add": "Add one",
      "create": "Create"
    },
    "ROLES": {
      "admin": "Administrator"
    },
    "AREAS": {
      "talent": "Talent"
    },

    "EVENTS": {
      "creation": "The candidate has been created successfully"
    },
    ...(await loadExternalsResources({ collection: translations })).reduce((obj, item) => Object.assign(obj, item), {}),
  }
}