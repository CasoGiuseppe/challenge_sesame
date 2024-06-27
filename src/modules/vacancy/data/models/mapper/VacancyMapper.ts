import { UniqueEntityID } from "@modules/core/guards/valueObjects/UniqueEntityID"
import type { IVacancyDataResponse } from ".."
import { VacancyState } from "@modules/vacancy/domain/core/Vacancy"

export class VacancyMapper {
  public static fromJson ( response: any ): IVacancyDataResponse[] {
    return response.data
  }

  public static toPersistance () {}

  public static toDomain(raw: IVacancyDataResponse): VacancyState {
    return VacancyState.createVacancy({
      props: {
        id: raw.id,
        name: raw.name,
        companyId: raw.companyId,
      },
      id: new UniqueEntityID(raw.id),
    })
  }
}