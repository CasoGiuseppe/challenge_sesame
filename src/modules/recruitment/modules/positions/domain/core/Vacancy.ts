import { Entity } from "@/modules/core/guards/Entity";
import { UniqueEntityID } from "@modules/core/guards/valueObjects/UniqueEntityID";
import type { IVacancyState } from "./entity";

export class VacancyState extends Entity<IVacancyState>{
  private constructor (props: IVacancyState, id?: UniqueEntityID) {
    super(props, id);
  }

  public static createVacancy ({ id, props}: {id?: UniqueEntityID, props: IVacancyState}): VacancyState{
    const { id: positionID, name, companyId } = props;
    return new VacancyState({ id: positionID, name, companyId}, id)
  }
}