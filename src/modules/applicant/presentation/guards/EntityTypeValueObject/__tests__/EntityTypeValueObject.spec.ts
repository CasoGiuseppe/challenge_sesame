import { describe, it, expect } from 'vitest';
import { DataTypeIsDenied } from "@modules/core/guards/exceptions/DataTypeIsDenied";
import { EntityTypeValueObject } from "@modules/vacancy/presentation/guards/EntityTypeValueObject/EntityTypeValueObject";

describe("EntityTypeValueObject", () => {
  it("should throw DataTypeIsDenied when empty string is passed", () => {
    expect(() => new EntityTypeValueObject("")).toThrow(DataTypeIsDenied);
  });

  it("should throw DataTypeIsDenied when non-string value is passed", () => {
    expect(() => new EntityTypeValueObject(123 as any)).toThrow(DataTypeIsDenied);
  });

  it("should not throw DataTypeIsDenied when valid string value is passed", () => {
    expect(() => new EntityTypeValueObject("test")).not.toThrow(DataTypeIsDenied);
  });
});