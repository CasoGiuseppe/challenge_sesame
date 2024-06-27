import { BaseRepository } from "@modules/core/data/repository";
import { Either } from "@modules/core/domain/Either";
import type { IHttpRequestService } from "@modules/core/providers/http/interfaces/http.repository";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import { NetworkConstants } from "@modules/core/utilities/networkConstants";
import type { IApplicantRepository } from "../../domain/core/repository/IApplicant";
import type { Applicant } from "../../domain/core/Applicant";
import type { IVacancyID } from "../../../positions/data/models";
import type { IApplicantDataResponse, IApplicantDTOResponse } from "../models/mapper";
import { ApplicantMapper } from "../models/mapper/ApplicantMapper";

export class ApplicantRepository extends BaseRepository implements IApplicantRepository {
    constructor(client: IHttpRequestService){
        super(client);
    }

    // Promise<Either<DataExceptions, Applicant[]>>
    async getApplicantByVacancy({ vacancyId, statusId }: { vacancyId: IVacancyID, statusId?: string }): Promise<any> {

        try {
            const response = await this.client.get<IApplicantDTOResponse>({
                url: `${NetworkConstants.BASE_API_PORT}${NetworkConstants.BASE_API_NAMESPACE}/vacancies/${vacancyId}/candidates`,
                options: NetworkConstants.BASE_API_OPTIONS,
                params: (statusId ? { statusId } : {})
            })

            return Either.success(
                ApplicantMapper
                    .fromJson(response)
                    .map((applicant: IApplicantDataResponse) => ApplicantMapper.toDomain(applicant))
            )
        } catch (err) {
            return Either.fail(this.handleErrors(err))
        }
    }
}