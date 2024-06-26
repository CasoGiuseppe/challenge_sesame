import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { Either } from "@modules/core/domain/Either";
import type { IVacancyID } from "@modules/recruitment/modules/positions/data/models";
import type { Applicant } from "../Applicant";

export interface IApplicant {
    getApplicantByVacancy({ vacancyId }: { vacancyId: IVacancyID }): Promise<Either<DataExceptions, Applicant[]>>
}