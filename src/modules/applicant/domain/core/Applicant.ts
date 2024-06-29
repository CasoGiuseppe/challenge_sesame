import { Entity } from "@modules/core/guards/Entity";
import type { UniqueEntityID } from "@modules/core/guards/valueObjects/UniqueEntityID";
import type { IApplicant } from "./entity";

export class Applicant extends Entity<IApplicant>{
  private constructor (props: IApplicant, id?: UniqueEntityID) {
    super(props, id);
  }
  public static createApplicant ({ id, props}: {id?: UniqueEntityID, props: IApplicant}): Applicant{
    const { employeeId, firstName, lastName, createBy, createdAt, statusId } = props;
    return new Applicant({ employeeId, firstName, lastName, createBy, createdAt, statusId }, id)
  }

  get getCompleteName(): string {
    return `${this.props.firstName} ${this.props.lastName}`;
  }

  get getCreationDate(): Date {
    return new Date(this.props.createdAt)
  }

  get getCreatedBy(): string {
    return this.props.createBy
  }

  get getStatus(): string|undefined {
    return this.props.statusId;
  }
}