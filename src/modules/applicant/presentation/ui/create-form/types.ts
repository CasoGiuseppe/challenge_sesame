export interface IForm {
    fields: IFormField[]
}

export interface IFormField {
    id: string,
    validation: IFormValidation,
    proxy: string,
    pattern: RegExp | string,
    placeholder: string,
    icon: string
}

export interface IFormValidation {
    mode: string,
    invalid: boolean
}