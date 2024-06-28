import { UniqueEntityID } from "@modules/core/guards/valueObjects/UniqueEntityID"
import type { IVacancyDataResponse, IVacancyPersistenceData } from ".."
import { VacancyState } from "@modules/vacancy/domain/core/Vacancy"

export class VacancyMapper {
  public static fromJson ( response: any ): IVacancyDataResponse[] {
    return response.data
  }

  public static toPersistence (vacancy: VacancyState): IVacancyPersistenceData {
    return {
      id: new UniqueEntityID(vacancy.getProps.id).toID,
      name: vacancy.getProps.name,
    }
  }

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