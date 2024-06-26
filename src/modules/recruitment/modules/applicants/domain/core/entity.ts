import type { UniqueEntityID } from "@modules/core/guards/valueObjects/UniqueEntityID";

export interface IApplicant {
    employeeId: UniqueEntityID;
    firstName: string;
    lastName: string;
    createBy: string;
    createdAt: Date
}