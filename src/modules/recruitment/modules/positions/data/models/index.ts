import type { IVacancyState } from "../../domain/core/entity";

export type IVacancyID = string
export interface IVacancyStateDTOResponse extends IVacancyState{
    order: number;
    createdAt: string;
    updatedAt: string;
    vacancyId: string
}

export interface IVacancyServiceDTO {
    data: IVacancyStateDTOResponse[]
}

export interface IVacancyServiceError {
    error: IVacancyServiceErrorState
}

export interface IVacancyServiceErrorState {
    status: number;
    message: string;
    errors: string;
}