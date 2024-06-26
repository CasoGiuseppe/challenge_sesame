import type { Either } from "@/modules/core/domain/Either";
import type { DataExceptions } from "@/modules/core/domain/exceptions/models";
import type { IVacancyID } from "@modules/recruitment/modules/positions/data/models";
import type { Position } from "../Position";

export interface IPositionRepository {
    getAvailablesPostions({ id }: { id: IVacancyID }): Promise<Either<DataExceptions, Position[]>>
}