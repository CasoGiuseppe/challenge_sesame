import type { Either } from "@/modules/core/domain/Either";
import type { DataExceptions } from "@/modules/core/domain/exceptions/models";
import type { IVacancyID } from "@modules/recruitment/modules/positions/data/models";
import type { VacancyState } from "../Vacancy";

export interface IVacancyRepository {
    getVacancyStatusById({ vacancyId }: { vacancyId: IVacancyID }): Promise<Either<DataExceptions, VacancyState[]>>
}