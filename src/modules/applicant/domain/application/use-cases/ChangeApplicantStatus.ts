import type { Either } from "@modules/core/domain/Either";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IApplicantRepository } from "@modules/applicant/domain/core/repository/IApplicant";
import type { Applicant } from "@modules/applicant/domain/core/Applicant";
import type { ISendApplicant } from "@modules/applicant/domain/core/entity";

export class ChangeApplicantStatusUseCase {
    constructor(
        private applciantRepository: IApplicantRepository
      ){}

    async execute({ employeeId, firstName, lastName, vacancyId, statusId }: ISendApplicant): Promise<Either<DataExceptions, Applicant>>{
        return this.applciantRepository.changeApplicantStatus({ employeeId, firstName, lastName, vacancyId, statusId })
    }
}