import { DateValueObject } from "./abstracts/DateValueObject";
import { DateIncorrectFormat } from "../../guards/exceptions/DateIsNotValid";

export class UserDate extends DateValueObject {
    constructor( readonly value: Date ) {
        super(value);
        this.ensureValueIsDateInstance(value)
    }

    private ensureValueIsDateInstance(value: any): void{
        if(isNaN(Date.parse(value))) throw new DateIncorrectFormat(value, `Provided date ${value} has not a correct format`)
    } 
}