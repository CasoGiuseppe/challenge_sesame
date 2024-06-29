import type { IApplicantPersistenceData } from "@modules/applicant/data/models/mapper";

export interface IApplicantStoreModel {         
    loading: boolean;
    applicants: IApplicantPersistenceData[]
}