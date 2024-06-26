import type { IVacancyState } from "../../domain/core/entity";

export interface IVacancyID {
    code: string,
}

export interface IVacancyStateDTOResponse extends IVacancyState{
    order: number;
    createdAt: string;
    updatedAt: string;
    vacancyId: string
}