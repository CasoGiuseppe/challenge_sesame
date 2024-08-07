import { UUID } from "@modules/core/providers/Uuid-v4/Uuid";

export class UniqueEntityID {
  private id: UniqueEntityID;

  constructor(id?: any) {
    this.id = id ?? UUID.generate()
  }

  public equals(id: UniqueEntityID|null|undefined | string):boolean {
    return this.id === id
  }

  get toID(): string {
    return this.id.toString()
  }
}