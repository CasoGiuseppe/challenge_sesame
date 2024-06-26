import type { Router } from "vue-router";
import { Ploc } from "@modules/core/presentation/ploc";
import type { GetVacancyStateUseCase } from "@modules/recruitment/modules/positions/domain/application/use-cases/GetVacancyStateUseCase";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IVacancyID } from "../../data/models";

export class VacancyBloc extends Ploc<undefined> {
    private readonly getVacancyStateUseCase: GetVacancyStateUseCase
    constructor({
        router,
        getVacancyStateUseCase
    }: {
        router: Router;
        getVacancyStateUseCase: GetVacancyStateUseCase;
    }){
        super({ router })
        this.getVacancyStateUseCase = getVacancyStateUseCase
    }

    getVacancyStateList = async(code: IVacancyID): Promise<void> => {
        const vacancyResult = await this.getVacancyStateUseCase.execute(code)

        vacancyResult.fold(
            (error: DataExceptions) => { console.log(this.handleError(error)) }, 
            (response: any) => { console.log(response) }
        )
    }
}