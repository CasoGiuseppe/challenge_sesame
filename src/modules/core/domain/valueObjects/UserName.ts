import { StringValueObject } from "./abstracts/StringValueObject";
import { NameIncorrectFormat } from "../../guards/exceptions/NameIsNotValid";

export class UserName extends StringValueObject {
    constructor(value: string) {
        super(value);
        this.ensureCorrectValueFormat(value)
    }

    private ensureCorrectValueFormat(value: string): void {
        const testValueFormat = /^[a-zA-Z ]{3,17}$/.test(value)
        if(!testValueFormat) throw new NameIncorrectFormat(value, `Provided name ${value} has not correct format or has not valid length.`)
    }
}