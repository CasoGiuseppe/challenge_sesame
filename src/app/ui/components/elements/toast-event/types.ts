export type UniqueId = string

export enum Types {
    SUCCESS = "success",
    ERROR = "error"
}

export interface IContdown {
    active: boolean
    duration: number
}
