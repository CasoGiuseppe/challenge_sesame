import type { IVacancyStateDTOResponse } from ".."
import { VacancyState } from "@modules/recruitment/modules/positions/domain/core/Vacancy"

export class VacancySateResponseMapper {
  constructor(){}
  public static fromJson ( response: any ): IVacancyStateDTOResponse[] {
    return response.data
  }

  public static toPersistance () {}

  public static toDomain(raw: IVacancyStateDTOResponse): VacancyState {
    return VacancyState.createVacancy({
      props: {
        id: raw.id,
        name: raw.name,
        companyId: raw.companyId,
      }
    })
  }
}