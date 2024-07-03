import { describe, it, expect } from 'vitest';
import { UserName } from "../UserName";
import { NameIncorrectFormat } from "../../exceptions/NameIsNotValid";

describe("UserName", () => {
    it("should accept a name with a length of 16 characters", () => {
        const validName = "AbCdEfGhIlMnOpQr";
        const userName = new UserName(validName);
        expect(userName.value).toBe(validName);
    });

    it("should throw an exception for a name with a length less than 3 characters", () => {
        const invalidName = "A";
        expect(() => new UserName(invalidName)).toThrow(NameIncorrectFormat);
    });

    it("should throw an exception for a name with a length greater than 17 characters", () => {
        const invalidName = "ThisNameIsTooLongWith20Characters";
        expect(() => new UserName(invalidName)).toThrow(NameIncorrectFormat);
    });

    it("should throw an exception for a name with special characters", () => {
        const invalidName = "Invalid@Name";
        expect(() => new UserName(invalidName)).toThrow(NameIncorrectFormat);
    });

    it("should throw an exception for a name with numbers", () => {
        const invalidName = "InvalidName123";
        expect(() => new UserName(invalidName)).toThrow(NameIncorrectFormat);
    });
});