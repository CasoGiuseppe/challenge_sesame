import { BaseRepository } from "@modules/core/data/repository";
import { Either } from "@modules/core/domain/Either";
import type { IHttpRequestService } from "@modules/core/providers/http/interfaces/http.repository";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import { NetworkConstants } from "@modules/core/utilities/networkConstants";
import type { IApplicantRepository } from "../../domain/core/repository/IApplicant";
import type { Applicant } from "../../domain/core/Applicant";
import type { IVacancyID } from "../../../positions/data/models";
import type { IApplicantDTOResponse } from "../models/mapper";

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

            console.log(response)
        } catch (err) {
            return Either.fail(this.handleErrors(err))
        }
    }
}