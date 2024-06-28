import type { UniqueEntityID } from "@modules/core/guards/valueObjects/UniqueEntityID";
import type { IVacancyState } from "@modules/vacancy/domain/core/entity";

export type IVacancyID = string
export interface IVacancyDataResponse extends IVacancyState{
    order: number;
    createdAt: string;
    updatedAt: string;
    vacancyId: string
}

export interface IVacancyRootDTO {
    data: IVacancyDataResponse[]
}

export interface IVacancyServiceError {
    error: IVacancyServiceErrorState
}

export interface IVacancyServiceErrorState {
    status: number;
    message: string;
    errors: string;
}

export interface IVacancyPersistenceData {
    id: string;
    name: string;
}