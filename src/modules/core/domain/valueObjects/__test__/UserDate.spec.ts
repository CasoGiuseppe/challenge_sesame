import { describe, it, expect } from 'vitest';
import { UserDate } from "../UserDate";
import { DateIncorrectFormat } from "../../../guards/exceptions/DateIsNotValid";

describe("UserDate", () => {
  it("should correctly format date to string", () => {
    const date = new Date("2022-01-01T00:00:00.000Z");
    const userDate = new UserDate(date);
    expect(userDate.value.toISOString()).toBe("2022-01-01T00:00:00.000Z");
  });

  it("should throw DateIncorrectFormat for invalid date format", () => {
    const invalidDate = "not a date";
    expect(() => new UserDate(invalidDate as any)).toThrow(DateIncorrectFormat);
  });

  it("should throw DateIncorrectFormat for empty string", () => {
    const emptyString = "";
    expect(() => new UserDate(emptyString as any)).toThrow(DateIncorrectFormat);
  });
});