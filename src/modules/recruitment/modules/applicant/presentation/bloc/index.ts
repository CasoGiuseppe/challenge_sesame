import type { Router } from "vue-router";
import { Ploc } from "@modules/core/presentation/ploc";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { GetApplicantsByVacancyIdUseCase } from "../../domain/application/use-cases/GetApplicantsByVacancyId";
import type { IVacancyID } from "../../../vacancy/data/models";
import type { CreateNewApplicantUseCase } from "../../domain/application/use-cases/CreateNewApplicant";
import type { ISendApplicant } from "../../domain/core/entity";
import type { ChangeApplicantStatusUseCase } from "../../domain/application/use-cases/ChangeApplicantStatus";

export class ApplicantBloc extends Ploc<undefined> {
    private readonly getApplicantsByVacancyId: GetApplicantsByVacancyIdUseCase;
    private readonly createNewApplicant: CreateNewApplicantUseCase;
    private readonly changeApplicantStatus: ChangeApplicantStatusUseCase;

    constructor({
        router,
        getApplicantsByVacancyId,
        createNewApplicant,
        changeApplicantStatus
    }: {
        router: Router;
        getApplicantsByVacancyId: GetApplicantsByVacancyIdUseCase;
        createNewApplicant: CreateNewApplicantUseCase;
        changeApplicantStatus: ChangeApplicantStatusUseCase;
    }){
        super({ router })
        this.getApplicantsByVacancyId = getApplicantsByVacancyId;
        this.createNewApplicant = createNewApplicant;
        this.changeApplicantStatus = changeApplicantStatus;
    }

    getApplicantsByID = async({vacancyId, statusId}: {vacancyId: IVacancyID, statusId?: string}): Promise<void> => {
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