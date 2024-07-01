import type { Either } from "@modules/core/domain/Either";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IApplicantRepository } from "@modules/applicant/domain/core/repository/IApplicant";
import type { Applicant } from "@modules/applicant/domain/core/Applicant";
import type { ISendApplicant } from "@modules/applicant/domain/core/entity";
import { UserName } from "@modules/core/guards/valueObjects/UserName";

export class CreateNewApplicantUseCase {
    constructor(
        private applciantRepository: IApplicantRepository
      ){}

    async execute({firstName, lastName, email, vacancyId, statusId }: ISendApplicant): Promise<Either<DataExceptions, Applicant>>{
        return this.applciantRepository.createNewApplicant({
            firstName: new UserName(firstName).toString(),
            lastName: new UserName(lastName).toString(),
            email,
            statusId,
            vacancyId
        })
    }
}