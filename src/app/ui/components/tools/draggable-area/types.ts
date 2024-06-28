export enum Areas {
    NEW = 'new',
    ACCEPTED = 'accepted',
    INTERVIEW = 'interview',
    SELECTED = 'selected',
    DISCARDED = 'discarded',
}

export type ICardItem = {
    id: string,
    title: string,
    content: string,
    footer: string,
}