import type { IApplicantDataResponse } from "."
import { Applicant } from "@modules/recruitment/modules/applicants/domain/core/Applicant"
import { UniqueEntityID } from "@modules/core/guards/valueObjects/UniqueEntityID"

export class ApplicantMapper {
  public static fromJson ( response: any ): IApplicantDataResponse[] {
    return response.data
  }

  public static toPersistance () {}

  public static toDomain(raw: IApplicantDataResponse): Applicant {
    return Applicant.createApplicant({
      props: {
        employeeId: new UniqueEntityID(raw.id).toID,
        firstName: raw.firstName,
        lastName: raw.lastName,
        createdAt: new Date(raw.createdAt),
        createBy: raw.vacancy.name,
        statusId: raw.statusId
      },
      id: new UniqueEntityID(raw.employeeId),
    })
  }
}

export class CreateApplicantMapper {
  public static fromJson ( response: any ): IApplicantDataResponse {
    return response.data
  }
}