import type { Router } from "vue-router";
import { Ploc } from "@modules/core/presentation/ploc";
import type { GetVacancyByIdUseCase } from "@/modules/recruitment/modules/vacancy/domain/application/use-cases/GetVacancyByIdUseCase";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IVacancyID } from "../../data/models";

export class VacancyBloc extends Ploc<undefined> {
    private readonly getVacancyById: GetVacancyByIdUseCase
    constructor({
        router,
        getVacancyById
    }: {
        router: Router;
        getVacancyById: GetVacancyByIdUseCase;
    }){
        super({ router })
        this.getVacancyById = getVacancyById
    }

    getVacancyByID = async(vacancyId: IVacancyID): Promise<void> => {
        const vacancyResult = await this.getVacancyById.execute(vacancyId)

        vacancyResult.fold(
            (error: DataExceptions) => { console.log(this.handleError(error)) }, 
            (response: any) => { console.log(response) }
        )
    }
}