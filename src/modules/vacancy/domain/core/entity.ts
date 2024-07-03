import type { UniqueEntityID } from "@/modules/core/domain/valueObjects/UniqueEntityID"

export interface IVacancyState {
    id: UniqueEntityID,
    name: string
    companyId: string
}