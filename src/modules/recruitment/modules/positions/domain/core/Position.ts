import { Entity } from "@/modules/core/guards/Entity";
import { UniqueEntityID } from "@modules/core/guards/valueObjects/UniqueEntityID";
import type { IPosition } from "./entity";

export class Position extends Entity<IPosition>{
  private constructor (props: IPosition, id?: UniqueEntityID) {
    super(props, id);
  }

  public static createPosition ({ id, props}: {id?: UniqueEntityID, props: IPosition}): Position{
    const { id: positionID, name, companyId } = props;
    return new Position({ id: positionID, name, companyId}, id)
  }
}