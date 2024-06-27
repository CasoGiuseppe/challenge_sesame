import type { UniqueEntityID } from "@modules/core/guards/valueObjects/UniqueEntityID"

export interface IVacancyState {
    id: UniqueEntityID,
    name: string
    companyId: string
}