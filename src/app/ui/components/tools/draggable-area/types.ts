export enum Areas {
    NEW = 'new',
    INTERVIEW = 'interview',
    HIRED = 'hired',
    FAILED = 'failed',
}

export type ICardItem = {
    id: string,
    title: string,
    content: string,
    footer: string,
}