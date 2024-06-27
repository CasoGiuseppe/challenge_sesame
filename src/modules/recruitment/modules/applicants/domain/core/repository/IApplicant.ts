import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { Either } from "@modules/core/domain/Either";
import type { IVacancyID } from "@modules/recruitment/modules/positions/data/models";
import type { Applicant } from "../Applicant";

export interface IApplicantRepository {
    getApplicantByVacancy({ vacancyId, statusId }: { vacancyId: IVacancyID, statusId?: string }): Promise<Either<DataExceptions, Applicant[]>>
    createNewApplicant(
        { vacancyId, statusId, firstName, lastName}:
        { vacancyId: IVacancyID, statusId?: string, firstName: string, lastName: string }
    ): Promise<Either<DataExceptions, Applicant>>
}