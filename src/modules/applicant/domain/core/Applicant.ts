import { Entity } from "@modules/core/guards/Entity";
import type { UniqueEntityID } from "@/modules/core/domain/valueObjects/UniqueEntityID";
import type { IApplicant } from "./entity";
import { UserDate } from "@/modules/core/domain/valueObjects/UserDate";
import { UserName } from "@/modules/core/domain/valueObjects/UserName";

export class Applicant extends Entity<IApplicant>{
  private constructor (props: IApplicant, id?: UniqueEntityID) {
    super(props, id);
  }
  public static createApplicant ({ id, props}: {id?: UniqueEntityID, props: IApplicant}): Applicant{
    const { employeeId, firstName, lastName, createBy, createdAt, statusId } = props;
    return new Applicant({
      employeeId,
      firstName: new UserName(firstName as string).toString(),
      lastName: new UserName(lastName as string).toString(),
      createBy,
      createdAt: new UserDate(createdAt).value,
      statusId
    }, id)
  }

  get getCompleteName(): string {
    return `${this.props.firstName} ${this.props.lastName}`;
  }

  get getFirstName(): string {
    return this.props.firstName;
  }

  get getLastName(): string {
    return this.props.lastName;
  }

  get getCreationDate(): Date {
    return this.props.createdAt
  }

  get getCreatedBy(): string {
    return this.props.createBy
  }

  get getStatus(): string|undefined {
    return this.props.statusId;
  }

  get getEmployeeId(): string | undefined {
    return this.props.employeeId;
  }
}