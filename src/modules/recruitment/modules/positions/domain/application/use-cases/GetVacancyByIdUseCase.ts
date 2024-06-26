import type { Either } from "@modules/core/domain/Either";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IVacancyID } from "@modules/recruitment/modules/positions/data/models";
import type { IVacancyRepository } from "@modules/recruitment/modules/positions/domain/core/repository/IVacancyRepository";
import type { VacancyState } from "../../core/Vacancy";

export class GetVacancyByIdUseCase {
  constructor(
    private vacancyRepository: IVacancyRepository
  ){}
  async execute(vacancyId: IVacancyID): Promise<Either<DataExceptions, VacancyState[]>>{
    return this.vacancyRepository.getVacancyStatusById({ vacancyId })
  }
}