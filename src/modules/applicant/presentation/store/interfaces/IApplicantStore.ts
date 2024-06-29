import type { IApplicantPersistenceData } from "@modules/applicant/data/models/mapper";

export interface IApplicantStore {
    applicants: IApplicantPersistenceData[]
}