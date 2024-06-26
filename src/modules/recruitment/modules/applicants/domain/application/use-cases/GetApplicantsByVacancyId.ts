import type { IVacancyID } from "@modules/recruitment/modules/positions/data/models";
import type { Either } from "@modules/core/domain/Either";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IApplicantRepository } from "../../core/repository/IApplicant";
import type { Applicant } from "../../core/Applicant";

export class GetApplicantsByVacancyId {
  constructor(
    private applciantRepository: IApplicantRepository
  ){}
  async execute(vacancyId: IVacancyID): Promise<Either<DataExceptions, Applicant[]>>{
    return this.applciantRepository.getApplicantByVacancy({ vacancyId })
  }
}