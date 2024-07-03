import { describe, it, expect } from 'vitest';
import { UserEmail } from "../UserEmail";
import { EmailIncorrectFormat } from "../../../guards/exceptions/EmailIsNotValid";

describe("UserEmail", () => {
    it("throws EmailIncorrectFormat when email domain is invalid", () => {
        const invalidEmail = "invalid.email@invalid";
        expect(() => new UserEmail(invalidEmail)).toThrow(EmailIncorrectFormat);
        expect(() => new UserEmail(invalidEmail)).toThrow(`Provided email ${invalidEmail} has not correct format`);
    });

    it("throws EmailIncorrectFormat when email domain is missing", () => {
        const invalidEmail = "invalid.email";
        expect(() => new UserEmail(invalidEmail)).toThrow(EmailIncorrectFormat);
        expect(() => new UserEmail(invalidEmail)).toThrow(`Provided email ${invalidEmail} has not correct format`);
    });

    it("throws EmailIncorrectFormat when email has no '@' symbol", () => {
        const invalidEmail = "invalid.emailinvalid.com";
        expect(() => new UserEmail(invalidEmail)).toThrow(EmailIncorrectFormat);
        expect(() => new UserEmail(invalidEmail)).toThrow(`Provided email ${invalidEmail} has not correct format`);
    });

    it("throws EmailIncorrectFormat when email has no '.' after '@' symbol", () => {
        const invalidEmail = "invalid.email@invalid";
        expect(() => new UserEmail(invalidEmail)).toThrow(EmailIncorrectFormat);
        expect(() => new UserEmail(invalidEmail)).toThrow(`Provided email ${invalidEmail} has not correct format`);
    });

    it("throws EmailIncorrectFormat when email has a domain with less than 2 characters", () => {
        const invalidEmail = "invalid.email@i.c";
        expect(() => new UserEmail(invalidEmail)).toThrow(EmailIncorrectFormat);
        expect(() => new UserEmail(invalidEmail)).toThrow(`Provided email ${invalidEmail} has not correct format`);
    });
});