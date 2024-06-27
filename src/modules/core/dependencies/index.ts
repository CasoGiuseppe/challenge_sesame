import { useRouter } from "vue-router"
import { VacancyStateRepository } from "@modules/recruitment/modules/positions/data/repository/VacancyStateRepository"
import { GetVacancyByIdUseCase } from "@modules/recruitment/modules/positions/domain/application/use-cases/GetVacancyByIdUseCase"
import { ApplicantRepository } from "@modules/recruitment/modules/applicants/data/repository/ApplicantRepository"
import { VacancyBloc } from "@modules/recruitment/modules/positions/presentation/bloc"
import { ApplicantBloc } from "@modules/recruitment/modules/applicants/presentation/bloc"
import { GetApplicantsByVacancyIdUseCase } from "@modules/recruitment/modules/applicants/domain/application/use-cases/GetApplicantsByVacancyId"
import { HTTPServiceProvider } from "../providers/http/http.provide"

const provideVacancyPloc = () => {
    const router = useRouter()

    const vacancyStateRepository = new VacancyStateRepository(new HTTPServiceProvider())
    const getVacancyById = new GetVacancyByIdUseCase(vacancyStateRepository)

    return new VacancyBloc({
        router,
        getVacancyById
    })
}

const provideApplicantPloc = () => {
    const router = useRouter()

    const applicantRepository = new ApplicantRepository(new HTTPServiceProvider())
    const getApplicantsByVacancyId = new GetApplicantsByVacancyIdUseCase(applicantRepository)

    return new ApplicantBloc({
        router,
        getApplicantsByVacancyId
    })
}

export const dependencies = {
    provideVacancyPloc,
    provideApplicantPloc
}