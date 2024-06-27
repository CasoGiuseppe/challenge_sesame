import { BaseRepository } from "@modules/core/data/repository";
import { Either } from "@modules/core/domain/Either";
import type { IHttpRequestService } from "@modules/core/providers/http/interfaces/http.repository";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import { NetworkConstants } from "@modules/core/utilities/networkConstants";
import type { IApplicantRepository } from "../../domain/core/repository/IApplicant";
import { Applicant } from "../../domain/core/Applicant";
import type { IVacancyID } from "../../../positions/data/models";
import type { IApplicantDataResponse, IApplicantDTOResponse, IApplicantPostData } from "../models/mapper";
import { ApplicantMapper, CreateApplicantMapper } from "../models/mapper/ApplicantMapper";
import type { ISendApplicant } from "../../domain/core/entity";

export class ApplicantRepository extends BaseRepository implements IApplicantRepository {
    constructor(client: IHttpRequestService){
        super(client);
    }
    async getApplicantByVacancy({ vacancyId, statusId }: { vacancyId: IVacancyID, statusId?: string }):Promise<Either<DataExceptions, Applicant[]>> {

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

    async createNewApplicant({ firstName, lastName, vacancyId, statusId }: ISendApplicant): Promise<Either<DataExceptions, Applicant>>
    {
        try {
            const response = await this.client.post<IApplicantDTOResponse, IApplicantPostData>({
                url: `${NetworkConstants.BASE_API_PORT}${NetworkConstants.BASE_API_NAMESPACE}/candidates`,
                body: {
                    firstName,
                    lastName,
                    vacancyId,
                    statusId,
                },
                options: NetworkConstants.BASE_API_OPTIONS
            })

            return Either.success(
                ApplicantMapper.toDomain(CreateApplicantMapper.fromJson(response))
            )
        } catch (err) {
            return Either.fail(this.handleErrors(err))
        }
    }

    async changeApplicantStatus({ employeeId, firstName, lastName, vacancyId, statusId }: ISendApplicant): Promise<Either<DataExceptions, Applicant>> {
        try {
            const response = await this.client.put<IApplicantDTOResponse, IApplicantPostData>({
                url: `${NetworkConstants.BASE_API_PORT}${NetworkConstants.BASE_API_NAMESPACE}/candidates/${employeeId}`,
                body: {
                    firstName,
                    lastName,
                    vacancyId,
                    statusId,
                },
                options: NetworkConstants.BASE_API_OPTIONS
            })

            return Either.success(
                ApplicantMapper.toDomain(CreateApplicantMapper.fromJson(response))
            )
        } catch (err) {
            return Either.fail(this.handleErrors(err))
        }
    }
}