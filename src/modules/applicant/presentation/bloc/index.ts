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
import type { IEventEmitter } from "@app/shared/utilities/EventsModel/interfaces/IEventEmitter";
import { keyUseEventSuccess } from "@app/shared/types/symbols";
import { UUID } from "@modules/core/providers/Uuid-v4/Uuid";
export class ApplicantBloc extends Ploc<ApplicantResponseStore> {
    private readonly getApplicantsByVacancyId: GetApplicantsByVacancyIdUseCase;
    private readonly createNewApplicant: CreateNewApplicantUseCase;
    private readonly changeApplicantStatus: ChangeApplicantStatusUseCase;
    private readonly eventEmitter: IEventEmitter;

    constructor({
        store,
        router,
        eventEmitter,
        getApplicantsByVacancyId,
        createNewApplicant,
        changeApplicantStatus
    }: {
        store: ApplicantResponseStore
        router: Router;
        eventEmitter: IEventEmitter;
        getApplicantsByVacancyId: GetApplicantsByVacancyIdUseCase;
        createNewApplicant: CreateNewApplicantUseCase;
        changeApplicantStatus: ChangeApplicantStatusUseCase;
    }){
        super({ store, router });
        this.getApplicantsByVacancyId = getApplicantsByVacancyId;
        this.createNewApplicant = createNewApplicant;
        this.changeApplicantStatus = changeApplicantStatus;
        this.eventEmitter = eventEmitter;
    }

    getApplicantsByID = async({vacancyId = NetworkConstants.BASE_API_VACANCY_ID, statusId}: {vacancyId?: IVacancyID, statusId?: string} = {}): Promise<void> => {
        if(this.store.applicantsAlreadyExists) return;
        
        this.store.waitForApplicants({ value: true})
        await timeout()  // simulate delay
        const applicantResult = await this.getApplicantsByVacancyId.execute({vacancyId, statusId})
        this.store.waitForApplicants({ value: false})
        
        applicantResult.fold(
            (error: DataExceptions) => {
                this.eventEmitter.emit(keyUseEventSuccess.toString(), { type: 'error', id: UUID.generate(), translation: this.handleError(error) })
            }, 
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
            (error: DataExceptions) => {
                this.eventEmitter.emit(keyUseEventSuccess.toString(), { type: 'error', id: UUID.generate(), translation: this.handleError(error) })
            }, 
            (response: Applicant) => {
                const { firstName, lastName } = ApplicantMapper.toPersistance(response)
                this.store.setApplicants({ applicant: ApplicantMapper.toPersistance(response) })
                this.router.push({ name: 'positions', params: { area: response.getStatus} })
                this.eventEmitter.emit(keyUseEventSuccess.toString(), { type: 'success', id: UUID.generate(), translation: `The candidate ${firstName} ${lastName} has been created successfully` })
            }
        )
    }

    changeApplicantArea = async({ employeeId, firstName, lastName, vacancyId = NetworkConstants.BASE_API_VACANCY_ID, statusId }: ISendApplicant) => {
        const changedApplicant = await this.changeApplicantStatus.execute({ employeeId, firstName, lastName, vacancyId, statusId })

        changedApplicant.fold(
            (error: DataExceptions) => {
                this.eventEmitter.emit(keyUseEventSuccess.toString(), { type: 'error', id: UUID.generate(), translation: this.handleError(error) })
            }, 
            (response: Applicant) => {
                this.store.setApplicantNewArea({ applicant: ApplicantMapper.toPersistance(response) })
                this.eventEmitter.emit(keyUseEventSuccess.toString(), { type: 'success', id: UUID.generate(), translation: `${firstName} ${lastName} candidate's status has been successfully changed` })
            }
        )
    }
}