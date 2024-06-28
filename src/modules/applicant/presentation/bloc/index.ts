import type { Router } from "vue-router";
import { Ploc } from "@modules/core/presentation/ploc";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { GetApplicantsByVacancyIdUseCase } from "@modules/applicant/domain/application/use-cases/GetApplicantsByVacancyId";
import type { IVacancyID } from "@modules/vacancy/data/models";
import type { CreateNewApplicantUseCase } from "@modules/applicant/domain/application/use-cases/CreateNewApplicant";
import type { ISendApplicant } from "@modules/applicant/domain/core/entity";
import type { ChangeApplicantStatusUseCase } from "@modules/applicant/domain/application/use-cases/ChangeApplicantStatus";
import { NetworkConstants } from "@modules/core/utilities/networkConstants";
import type { ApplicantResponseStore } from "../store";

export class ApplicantBloc extends Ploc<ApplicantResponseStore> {
    private readonly getApplicantsByVacancyId: GetApplicantsByVacancyIdUseCase;
    private readonly createNewApplicant: CreateNewApplicantUseCase;
    private readonly changeApplicantStatus: ChangeApplicantStatusUseCase;

    constructor({
        store,
        router,
        getApplicantsByVacancyId,
        createNewApplicant,
        changeApplicantStatus
    }: {
        store: ApplicantResponseStore
        router: Router;
        getApplicantsByVacancyId: GetApplicantsByVacancyIdUseCase;
        createNewApplicant: CreateNewApplicantUseCase;
        changeApplicantStatus: ChangeApplicantStatusUseCase;
    }){
        super({ store, router })
        this.getApplicantsByVacancyId = getApplicantsByVacancyId;
        this.createNewApplicant = createNewApplicant;
        this.changeApplicantStatus = changeApplicantStatus;
    }

    getApplicantsByID = async({vacancyId = NetworkConstants.BASE_API_VACANCY_ID, statusId}: {vacancyId?: IVacancyID, statusId?: string}): Promise<void> => {
        const applicantResult = await this.getApplicantsByVacancyId.execute({vacancyId, statusId})

        applicantResult.fold(
            (error: DataExceptions) => { console.log(this.handleError(error)) }, 
            (response: any) => { console.log('applicants', response) }
        )
    }

    addNewApplicant = async({ firstName, lastName, vacancyId, statusId }: ISendApplicant): Promise<void> => {
        const newApplicant = await this.createNewApplicant.execute({ firstName, lastName, vacancyId, statusId })
        
        newApplicant.fold(
            (error: DataExceptions) => { console.log(this.handleError(error)) }, 
            (response: any) => { console.log('new applicant', response) }
        )
    }

    changeApplicantArea = async({ employeeId, firstName, lastName, vacancyId, statusId }: ISendApplicant) => {
        const changedApplicant = await this.changeApplicantStatus.execute({ employeeId, firstName, lastName, vacancyId, statusId })

        changedApplicant.fold(
            (error: DataExceptions) => { console.log(this.handleError(error)) }, 
            (response: any) => { console.log('change applicant', response) }
        )
    }
}