import type { Router } from "vue-router";
import { Ploc } from "@modules/core/presentation/ploc";
import type { GetVacancyByIdUseCase } from "@modules/vacancy/domain/application/use-cases/GetVacancyByIdUseCase";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IVacancyID } from "@modules/vacancy/data/models";
import type { VacancyResponseStore } from "@modules/vacancy/presentation/store/vacancy";
import { NetworkConstants } from "@modules/core/utilities/networkConstants";

export class VacancyBloc extends Ploc<VacancyResponseStore> {
    private readonly getVacancyById: GetVacancyByIdUseCase
    constructor({
        store,
        router,
        getVacancyById
    }: {
        store: VacancyResponseStore
        router: Router;
        getVacancyById: GetVacancyByIdUseCase;
    }){
        super({ store, router })
        this.getVacancyById = getVacancyById
    }

    getVacancyByID = async(vacancyId: IVacancyID = NetworkConstants.BASE_API_VACANCY_ID): Promise<void> => {
        this.store.setLoadingState({ value: true})
        const vacancyResult = await this.getVacancyById.execute(vacancyId)
        // this.store.setLoadingState({ value: false})

        vacancyResult.fold(
            (error: DataExceptions) => { console.log(this.handleError(error)) }, 
            (response: any) => { console.log(response) }
        )
    }
}