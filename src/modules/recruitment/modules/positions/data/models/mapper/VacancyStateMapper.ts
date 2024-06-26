import type { IVacancyDataResponse } from ".."
import { VacancyState } from "@modules/recruitment/modules/positions/domain/core/Vacancy"

export class VacancySateResponseMap {
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
      }
    })
  }
}