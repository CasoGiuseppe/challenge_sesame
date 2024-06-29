import type { IApplicantPersistenceData } from "@modules/applicant/data/models/mapper";

export interface IApplicantStore {         
    loading: boolean;
    applicants: IApplicantPersistenceData[]
}