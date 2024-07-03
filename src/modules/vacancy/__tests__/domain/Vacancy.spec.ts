import { describe, it, expect } from 'vitest';
import { VacancyState } from "../../domain/core/Vacancy";
import { UniqueEntityID } from "@/modules/core/domain/valueObjects/UniqueEntityID";
import type { IVacancyState } from '../../domain/core/entity';

describe("VacancyState", () => {
  it("should create a VacancyState instance using the static method", () => {
    const props = {
      id: new UniqueEntityID,
      name: "Software Engineer",
      companyId: "123"
    } as IVacancyState;

    const vacancyState = VacancyState.createVacancy({ id: new UniqueEntityID, props});
    expect(vacancyState.getProps).toEqual(props);
  });

  it("should create a VacancyState instance with a custom ID", () => {
    const props = { id: new UniqueEntityID("custom-id"), name: "Software Engineer", companyId: "123" } as IVacancyState;
    const vacancyState = VacancyState.createVacancy({ id: new UniqueEntityID, props });
    expect(vacancyState.getProps).toEqual(props);
  });
});