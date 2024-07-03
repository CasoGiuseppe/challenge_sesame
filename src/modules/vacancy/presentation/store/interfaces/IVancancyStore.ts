import type { IVacancyPersistenceData } from "@modules/vacancy/data/models";

export interface IVancancyStoreModel {
    loading: boolean;
    areas: IVacancyPersistenceData[];
    draggingID: string | undefined;
}