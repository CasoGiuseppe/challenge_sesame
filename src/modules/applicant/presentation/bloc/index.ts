import { type Router } from "vue-router";
import { Ploc } from "@modules/core/presentation/ploc";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { GetApplicantsByVacancyIdUseCase } from "@modules/applicant/domain/application/use-cases/GetApplicantsByVacancyId";
import type { IVacancyID } from "@modules/vacancy/data/models";
import type { CreateNewApplicantUseCase } from "@modules/applicant/domain/application/use-cases/CreateNewApplicant";
import type { ISendApplicant } from "@modules/applicant/domain/core/entity";
import type { ChangeApplicantStatusUseCase } from "@modules/applicant/domain/application/use-cases/ChangeApplicantStatus";
import { NetworkConstants } from "@modules/core/utilities/networkConstants";
import type { Applicant } from "@modules/applicant/domain/core/Applicant";
import { ApplicantMapper } from "@modules/applicant/data/models/mapper/ApplicantMapper";
import type { ApplicantResponseStore } from "../store/applicant";
import { timeout } from "@app/shared/utilities";
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

    getApplicantsByID = async({vacancyId = NetworkConstants.BASE_API_VACANCY_ID, statusId}: {vacancyId?: IVacancyID, statusId?: string} = {}): Promise<void> => {
        if(this.store.applicantsAlreadyExists) return;
        
        this.store.waitForApplicants({ value: true})
        await timeout()  // simulate delay
        const applicantResult = await this.getApplicantsByVacancyId.execute({vacancyId, statusId})
        this.store.waitForApplicants({ value: false})
        
        applicantResult.fold(
            (error: DataExceptions) => { console.log(this.handleError(error)) }, 
            (response: Applicant[]) => {
                response.map((applicant: Applicant) => this.store.setApplicants({ applicant: ApplicantMapper.toPersistance(applicant) }))
            }
        )
    }

    createApplicant = async({ firstName, lastName, email, vacancyId = NetworkConstants.BASE_API_VACANCY_ID, statusId }: ISendApplicant): Promise<void> => {

        this.store.waitForCreation({ value: true })
        await timeout()  // simulate delay
        const newApplicant = await this.createNewApplicant.execute({ firstName, lastName, email, vacancyId, statusId })
        this.store.waitForCreation({ value: false })

        newApplicant.fold(
            (error: DataExceptions) => { console.log(this.handleError(error)) }, 
            (response: Applicant) => {
                this.store.setApplicants({ applicant: ApplicantMapper.toPersistance(response) })
                this.router.push({ name: 'positions' })
            }
        )
    }

    changeApplicantArea = async({ employeeId, firstName, lastName, email, vacancyId = NetworkConstants.BASE_API_VACANCY_ID, statusId }: ISendApplicant) => {
        const changedApplicant = await this.changeApplicantStatus.execute({ employeeId, firstName, lastName, email, vacancyId, statusId })

        changedApplicant.fold(
            (error: DataExceptions) => { console.log(this.handleError(error)) }, 
            (response: Applicant) => { console.log('change applicant', response) }
        )
    }
}