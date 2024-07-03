import { DataTypeIsDenied } from "@modules/core/guards/exceptions/DataTypeIsDenied";
import { StringValueObject } from "@/modules/core/domain/valueObjects/abstracts/StringValueObject";

export class EntityTypeValueObject extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureValueIsCorrect(value)
  }

  private ensureValueIsCorrect(value: string): void {
    if(value !== 'test') throw new DataTypeIsDenied('')
  }
}