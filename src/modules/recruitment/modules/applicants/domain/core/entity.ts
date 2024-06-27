import type { UniqueEntityID } from "@modules/core/guards/valueObjects/UniqueEntityID";
import type { IVacancyID } from "../../../positions/data/models";

export interface IApplicant extends IPostApplicant{
    createBy: string;
    createdAt: Date
}

export interface IPostApplicant {
    employeeId?: UniqueEntityID;
    firstName: string;
    lastName: string;
    vacancyId?: IVacancyID;
    statusId?: string;
}