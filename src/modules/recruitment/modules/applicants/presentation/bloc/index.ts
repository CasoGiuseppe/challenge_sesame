import type { Router } from "vue-router";
import { Ploc } from "@modules/core/presentation/ploc";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { GetApplicantsByVacancyIdUseCase } from "../../domain/application/use-cases/GetApplicantsByVacancyId";
import type { IVacancyID } from "../../../positions/data/models";
import type { CreateNewApplicantUseCase } from "../../domain/application/use-cases/CreateNewApplicant";

export class ApplicantBloc extends Ploc<undefined> {
    private readonly getApplicantsByVacancyId: GetApplicantsByVacancyIdUseCase;
    private readonly createNewApplicant: CreateNewApplicantUseCase;

    constructor({
        router,
        getApplicantsByVacancyId,
        createNewApplicant
    }: {
        router: Router;
        getApplicantsByVacancyId: GetApplicantsByVacancyIdUseCase;
        createNewApplicant: CreateNewApplicantUseCase;
    }){
        super({ router })
        this.getApplicantsByVacancyId = getApplicantsByVacancyId;
        this.createNewApplicant = createNewApplicant;
    }

    getApplicantsByID = async(vacancyId: IVacancyID, statusId?: string): Promise<void> => {
        const applicantResult = await this.getApplicantsByVacancyId.execute(vacancyId, statusId)

        applicantResult.fold(
            (error: DataExceptions) => { console.log(this.handleError(error)) }, 
            (response: any) => { console.log('applicants', response) }
        )
    }

    createApplicant = async(
        { firstName, lastName, vacancyId, statusId }:
        { firstName:string, lastName: string, vacancyId: IVacancyID, statusId: string }
    ): Promise<void> => {
        const newApplicant = await this.createNewApplicant.execute({ firstName, lastName, vacancyId, statusId })
        
        newApplicant.fold(
            (error: DataExceptions) => { console.log(this.handleError(error)) }, 
            (response: any) => { console.log('new applicant', response) }
        )
    }
}