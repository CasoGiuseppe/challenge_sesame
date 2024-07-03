import { StringValueObject } from "./abstracts/StringValueObject";
import { EmailIncorrectFormat } from "../../guards/exceptions/EmailIsNotValid";

export class UserEmail extends StringValueObject {
    constructor(value: string) {
        super(value);
        this.ensureCorrectValueFormat(value)
    }

    private ensureCorrectValueFormat(value: string): void {
        const testValueFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
        if(!testValueFormat) throw new EmailIncorrectFormat(value, `Provided email ${value} has not correct format`)
    }
}