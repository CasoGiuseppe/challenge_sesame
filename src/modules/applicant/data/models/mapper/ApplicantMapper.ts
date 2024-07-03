import { UserDate } from "@modules/core/guards/valueObjects/UserDate"
import type { IApplicantDataResponse, IApplicantPersistenceData } from "."
import { Applicant } from "@modules/applicant/domain/core/Applicant"
import { UniqueEntityID } from "@modules/core/guards/valueObjects/UniqueEntityID"
import { UserName } from "@modules/core/guards/valueObjects/UserName"

export class ApplicantMapper {
  public static fromJson ( response: any ): IApplicantDataResponse[] {
    return response.data
  }

  public static toPersistance (applicant: Applicant): IApplicantPersistenceData {
    return {
      name: applicant.getCompleteName,
      createAt: applicant.getCreationDate.toLocaleDateString("es-ES"),
      creator: applicant.getCreatedBy,
      areaID: applicant.getStatus,
      employeeID: applicant.getEmployeeId
    }
  }

  public static toDomain(raw: IApplicantDataResponse): Applicant {
    return Applicant.createApplicant({
      props: {
        employeeId: new UniqueEntityID(raw.id).toID,
        firstName: new UserName(raw.firstName).toString(),
        lastName: new UserName(raw.lastName).toString(),
        createdAt: new UserDate(new Date(raw.createdAt)).value,
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