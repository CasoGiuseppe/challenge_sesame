import type { IVacancyPersistenceData } from "@modules/vacancy/data/models";
import type { ReactiveEffect } from "vue";

export interface IVancancyStoreModel {
    loading: boolean;
    areas: IVacancyPersistenceData[];
}