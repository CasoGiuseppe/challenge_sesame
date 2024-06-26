import { BaseRepository } from "@/modules/core/data/repository";
import { Either } from "@/modules/core/domain/Either";
import type { DataExceptions } from "@/modules/core/domain/exceptions/models";
import type { IHttpRequestService } from "@/modules/core/providers/providerName/http/interfaces/http.repository";
import type { IVacancyRepository } from "@modules/recruitment/modules/positions/domain/core/repository/IVacancyRepository";
import type { VacancyState } from "../../domain/core/Vacancy";
import type { IVacancyID, IVacancyStateDTOResponse, IVacancyServiceDTO, IVacancyServiceError } from "../models";
import { NetworkConstants } from "@/modules/core/utilities/networkConstants";
import { VacancySateResponseMap } from "../models/mapper/VacancyStateMapper";

export class VacancyStateRepository extends BaseRepository implements IVacancyRepository {
    constructor(client: IHttpRequestService){
        super(client);
    }

    // Promise<Either<DataExceptions, VacancyState[]>>
    async getVacancyState({ id }: { id: IVacancyID }): Promise<any> {
        try {
            const response = await this.client.get<IVacancyServiceDTO | IVacancyServiceError>(
                `${NetworkConstants.BASE_API_PORT}${NetworkConstants.BASE_API_NAMESPACE}/v1/candidate-status/${id}`,
            )
            
            if(response.hasOwnProperty('error')) {
                const { error : { status, message }} = response as IVacancyServiceError
                return Either.fail(this.handleErrors({ status, code: message })) 
            }

            return Either.success(
                VacancySateResponseMap
                    .fromJson(response))
                    .map((vacancy) => console.log(vacancy)
            )
        } catch (err) {
            console.log(err)
            return Either.fail(this.handleErrors(err))
        }
    }
}