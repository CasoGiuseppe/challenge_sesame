export interface IGlobalEventsStoreModel {         
    events: IEventPropsModel[];
}

export interface IEventPropsModel {
    type: string;
    id: string;
    translation: string;
}