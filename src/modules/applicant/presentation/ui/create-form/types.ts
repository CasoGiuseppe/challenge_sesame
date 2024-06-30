import type { Types } from "@app/ui/components/base/base-input/types"

export interface IForm {
    fields: IFormField[]
}

export interface IFormField {
    id: string,
    type: Types
    validation: IFormValidation,
    proxy: string,
    pattern: string,
    placeholder: string,
    icon: string
}

export interface IFormValidation {
    mode: string,
    invalid: boolean
}