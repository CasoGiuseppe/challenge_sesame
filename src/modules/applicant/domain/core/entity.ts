import type { IVacancyID } from "@modules/vacancy/data/models";

export interface IApplicant extends ISendApplicant{
    createBy: string;
    createdAt: Date
}

export interface ISendApplicant {
    employeeId?: string;
    firstName: string;
    lastName: string;
    email: string;
    vacancyId?: IVacancyID;
    statusId?: string;
}