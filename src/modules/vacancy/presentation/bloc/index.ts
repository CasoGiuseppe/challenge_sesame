import type { Router } from "vue-router";
import { Ploc } from "@modules/core/presentation/ploc";
import type { GetVacancyByIdUseCase } from "@modules/vacancy/domain/application/use-cases/GetVacancyByIdUseCase";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IVacancyID } from "@modules/vacancy/data/models";
import type { VacancyResponseStore } from "@modules/vacancy/presentation/store/vacancy";
import { NetworkConstants } from "@modules/core/utilities/networkConstants";
import { timeout } from "@app/shared/utilities";
import { VacancyState } from "@modules/vacancy/domain/core/Vacancy";
import { VacancyMapper } from "@modules/vacancy/data/models/mapper/VacancyMapper";
import { dependencies } from "@/modules/core/dependencies";
import type { IEventEmitter } from "@app/shared/utilities/EventsModel/interfaces/IEventEmitter";
import { keyUseEventSuccess } from "@app/shared/types/symbols";
import { UUID } from "@modules/core/providers/Uuid-v4/Uuid";


export class VacancyBloc extends Ploc<VacancyResponseStore> {
    private readonly getVacancyById: GetVacancyByIdUseCase;
    private readonly eventEmitter: IEventEmitter;
    constructor({
        store,
        router,
        eventEmitter,
        getVacancyById
    }: {
        store: VacancyResponseStore
        router: Router;
        eventEmitter: IEventEmitter;
        getVacancyById: GetVacancyByIdUseCase;
    }){
        super({ store, router })
        this.getVacancyById = getVacancyById
        this.eventEmitter = eventEmitter;
    }

    getVacancyByID = async(vacancyId: IVacancyID = NetworkConstants.BASE_API_VACANCY_ID): Promise<void> => {
        if(this.store.vacancyAreasAlreadyExists) return;
        
        this.store.waitForVacancy({ value: true})
        await timeout()  // simulate delay
        const vacancyResult = await this.getVacancyById.execute(vacancyId)
        this.store.waitForVacancy({ value: false})

        vacancyResult.fold(
            (error: DataExceptions) => {
                this.eventEmitter.emit(keyUseEventSuccess.toString(), { type: 'error', id: UUID.generate(), translation: this.handleError(error) })
            }, 
            (response: any) => {
                response.map((vacancy: VacancyState) => this.store.setVacancyAreas({ area: VacancyMapper.toPersistence(vacancy) }))
                const applicants = dependencies.provideApplicantPloc()
                applicants.getApplicantsByID()
            }

        )
    }
}