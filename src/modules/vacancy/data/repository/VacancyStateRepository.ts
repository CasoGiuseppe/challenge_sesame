import { BaseRepository } from "@modules/core/data/repository";
import { Either } from "@modules/core/domain/Either";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IHttpRequestService } from "@modules/core/providers/http/interfaces/http.repository";
import type { IVacancyRepository } from "@modules/vacancy/domain/core/repository/IVacancyRepository";
import type { VacancyState } from "@modules/vacancy/domain/core/Vacancy";
import type { IVacancyID, IVacancyDataResponse, IVacancyRootDTO, IVacancyServiceError } from "@modules/vacancy/data/models";
import { NetworkConstants } from "@modules/core/utilities/networkConstants";
import { VacancyMapper } from "@modules/vacancy/data/models/mapper/VacancyMapper";

export class VacancyStateRepository extends BaseRepository implements IVacancyRepository {
    constructor(client: IHttpRequestService){
        super(client);
    }

    async getVacancyStatusById({ vacancyId }: { vacancyId: IVacancyID }): Promise<Either<DataExceptions, VacancyState[]>> {
        try {
            const response = await this.client.get<IVacancyRootDTO | IVacancyServiceError>({
                url: `${NetworkConstants.BASE_API_PORT}${NetworkConstants.BASE_API_NAMESPACE}/candidate-status/${vacancyId}`,
                options: NetworkConstants.BASE_API_OPTIONS
            })

            return Either.success(
                VacancyMapper
                    .fromJson(response)
                    .map((vacancy: IVacancyDataResponse) => VacancyMapper.toDomain(vacancy))
            )
        } catch (err) {
            return Either.fail(this.handleErrors(err))
        }
    }
}