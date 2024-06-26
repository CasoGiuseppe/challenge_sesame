import type { Router } from "vue-router";
import { Ploc } from "@modules/core/presentation/ploc";
import type { GetVacancyByIdUseCase } from "@/modules/recruitment/modules/positions/domain/application/use-cases/GetVacancyByIdUseCase";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IVacancyID } from "../../data/models";

export class VacancyBloc extends Ploc<undefined> {
    private readonly getVacancyByIdUseCase: GetVacancyByIdUseCase
    constructor({
        router,
        getVacancyByIdUseCase
    }: {
        router: Router;
        getVacancyByIdUseCase: GetVacancyByIdUseCase;
    }){
        super({ router })
        this.getVacancyByIdUseCase = getVacancyByIdUseCase
    }

    getVacancyById = async(vacancyId: IVacancyID): Promise<void> => {
        const vacancyResult = await this.getVacancyByIdUseCase.execute(vacancyId)

        vacancyResult.fold(
            (error: DataExceptions) => { console.log(this.handleError(error)) }, 
            (response: any) => { console.log(response) }
        )
    }
}