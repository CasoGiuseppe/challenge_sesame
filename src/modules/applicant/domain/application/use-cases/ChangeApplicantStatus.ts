import type { Either } from "@modules/core/domain/Either";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IApplicantRepository } from "../../core/repository/IApplicant";
import type { Applicant } from "../../core/Applicant";
import type { ISendApplicant } from "../../core/entity";

export class ChangeApplicantStatusUseCase {
    constructor(
        private applciantRepository: IApplicantRepository
      ){}

    async execute({ employeeId, firstName, lastName, vacancyId, statusId }: ISendApplicant): Promise<Either<DataExceptions, Applicant>>{
        return this.applciantRepository.changeApplicantStatus({ employeeId, firstName, lastName, vacancyId, statusId })
    }
}