export enum Types {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export enum Sizes {
    SMALL = 'small',
    DEFAULT = 'default',
}

export type RouterTo = {
    path?: string
    name?: string
    query?: { [key: string]: string }
}