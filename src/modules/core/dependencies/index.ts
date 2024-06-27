import { useRouter } from "vue-router"
import { VacancyStateRepository } from "@/modules/vacancy/data/repository/VacancyStateRepository"
import { GetVacancyByIdUseCase } from "@/modules/vacancy/domain/application/use-cases/GetVacancyByIdUseCase"
import { ApplicantRepository } from "@/modules/applicant/data/repository/ApplicantRepository"
import { VacancyBloc } from "@/modules/vacancy/presentation/bloc"
import { ApplicantBloc } from "@/modules/applicant/presentation/bloc"
import { CreateNewApplicantUseCase } from "@/modules/applicant/domain/application/use-cases/CreateNewApplicant"
import { GetApplicantsByVacancyIdUseCase } from "@/modules/applicant/domain/application/use-cases/GetApplicantsByVacancyId"
import { ChangeApplicantStatusUseCase } from "@/modules/applicant/domain/application/use-cases/ChangeApplicantStatus"
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
    const createNewApplicant = new CreateNewApplicantUseCase(applicantRepository)
    const changeApplicantStatus = new ChangeApplicantStatusUseCase(applicantRepository)
    return new ApplicantBloc({
        router,
        getApplicantsByVacancyId,
        createNewApplicant,
        changeApplicantStatus
    })
}

export const dependencies = {
    provideVacancyPloc,
    provideApplicantPloc
}