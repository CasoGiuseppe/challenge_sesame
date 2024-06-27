import type { Either } from "@modules/core/domain/Either";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IVacancyID } from "@modules/vacancy/data/models";
import type { IVacancyRepository } from "@modules/vacancy/domain/core/repository/IVacancyRepository";
import type { VacancyState } from "@modules/vacancy/domain/core/Vacancy";

export class GetVacancyByIdUseCase {
  constructor(
    private vacancyRepository: IVacancyRepository
  ){}
  async execute(vacancyId: IVacancyID): Promise<Either<DataExceptions, VacancyState[]>>{
    return this.vacancyRepository.getVacancyStatusById({ vacancyId })
  }
}