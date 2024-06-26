import type { Either } from "@/modules/core/domain/Either";
import type { DataExceptions } from "@/modules/core/domain/exceptions/models";
import type { IVacancyID } from "@modules/recruitment/modules/positions/data/models";
import type { IPositionRepository } from "@modules/recruitment/modules/positions/domain/core/repository/IPositionRepository";
import type { Position } from "../../core/Position";

export class GetPositionsByVacancyID {
  constructor(
    private positionRepository: IPositionRepository
  ){}
  async execute(code: IVacancyID): Promise<Either<DataExceptions, Position[]>>{
    return this.positionRepository.getAvailablesPostions({ id: code })
  }
}