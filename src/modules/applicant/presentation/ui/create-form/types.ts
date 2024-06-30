export interface IForm {
    fields: IFormField[]
}

export interface IFormField {
    id: string,
    validation: IFormValidation,
    proxy: string,
    placeholder: string
}

export interface IFormValidation {
    mode: string,
    invalid: boolean
}