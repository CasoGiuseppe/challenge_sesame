import { describe, it, expect } from 'vitest';
import { UniqueEntityID } from "../UniqueEntityID";
import { UUID } from "@modules/core/providers/Uuid-v4/Uuid";

describe("UniqueEntityID", () => {
  it("should return false when comparing with null", () => {
    const id1 = new UniqueEntityID();
    const id2 = null;

    expect(id1.equals(id2)).toBe(false);
  });

  it("should return false when comparing with undefined", () => {
    const id1 = new UniqueEntityID();
    const id2 = undefined;

    expect(id1.equals(id2)).toBe(false);
  });

  it("should return false when comparing with a different UniqueEntityID", () => {
    const id1 = new UniqueEntityID();
    const id2 = new UniqueEntityID();

    expect(id1.equals(id2)).toBe(false);
  });

  it("should return true when comparing with a UniqueEntityID created with the same UUID", () => {
    const uuid = UUID.generate();
    const id1 = new UniqueEntityID(uuid);
    const id2 = new UniqueEntityID(uuid);

    expect(id1.equals(id2.toID)).toBe(true);
  });
});