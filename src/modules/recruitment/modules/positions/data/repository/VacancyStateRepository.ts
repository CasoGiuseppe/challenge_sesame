import { BaseRepository } from "@/modules/core/data/repository";
import type { IHttpRequestService } from "@/modules/core/providers/providerName/http/interfaces/http.repository";
import type { IVacancyRepository } from "@modules/recruitment/modules/positions/domain/core/repository/IVacancyRepository";

export class VacancyStateRepository extends BaseRepository implements IVacancyRepository {
    constructor(client: IHttpRequestService){
        super(client);
    }
}