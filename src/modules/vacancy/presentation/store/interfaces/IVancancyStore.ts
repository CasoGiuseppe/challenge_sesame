import type { IVacancyPersistenceData } from "@modules/vacancy/data/models";

export interface IVancancyStore {
    loading: boolean;
    areas: IVacancyPersistenceData[];
}