import type { Router } from "vue-router";
import { Ploc } from "@modules/core/presentation/ploc";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { GetApplicantsByVacancyIdUseCase } from "../../domain/application/use-cases/GetApplicantsByVacancyId";
import type { IVacancyID } from "../../../positions/data/models";

export class ApplicantBloc extends Ploc<undefined> {
    private readonly getApplicantsByVacancyId: GetApplicantsByVacancyIdUseCase;
    constructor({
        router,
        getApplicantsByVacancyId
    }: {
        router: Router;
        getApplicantsByVacancyId: GetApplicantsByVacancyIdUseCase;
    }){
        super({ router })
        this.getApplicantsByVacancyId = getApplicantsByVacancyId
    }

    getApplicationByID = async(vacancyId: IVacancyID, statusId?: string): Promise<void> => {
        const applicantResult = await this.getApplicantsByVacancyId.execute(vacancyId, statusId)

        applicantResult.fold(
            (error: DataExceptions) => { console.log(this.handleError(error)) }, 
            (response: any) => { console.log(response) }
        )
    }
}