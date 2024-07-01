import { StringValueObject } from "./abstracts/StringValueObject";
import { EmailIncorrectFormat } from "../exceptions/EmailIsNotValid";

export class UserEmail extends StringValueObject {
    constructor(value: string) {
        super(value);
        this.ensureCorrectValueFormat(value)
    }

    private ensureCorrectValueFormat(value: string): void {
        const testValueFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)
        if(!testValueFormat) throw new EmailIncorrectFormat(value, `Provided email ${value} has not correct format`)
    }
}