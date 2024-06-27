import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { Either } from "@modules/core/domain/Either";
import type { IVacancyID } from "@/modules/recruitment/modules/vacancy/data/models";
import type { Applicant } from "../Applicant";
import type { UniqueEntityID } from "@/modules/core/guards/valueObjects/UniqueEntityID";
import type { ISendApplicant } from "../entity";

export interface IApplicantRepository {
    getApplicantByVacancy({ vacancyId, statusId }: { vacancyId: IVacancyID, statusId?: string }): Promise<Either<DataExceptions, Applicant[]>>
    createNewApplicant({ firstName, lastName, vacancyId, statusId}: ISendApplicant): Promise<Either<DataExceptions, Applicant>>
    changeApplicantStatus({ employeeId, firstName, lastName, vacancyId, statusId}: ISendApplicant): Promise<Either<DataExceptions, Applicant>>
}