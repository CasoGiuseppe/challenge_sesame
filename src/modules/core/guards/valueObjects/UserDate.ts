import { DateValueObject } from "./abstracts/DateValueObject";
import { DateIncorrectFormat } from "../exceptions/DateIsNotValid";

export class UnitDate extends DateValueObject {
    constructor( readonly value: Date ){
        super(value);
        this.ensureValueIsDateInstance(value)
    }

    private ensureValueIsDateInstance(value: any): void{
        if(isNaN(Date.parse(value))) throw new DateIncorrectFormat(value)
    } 
}