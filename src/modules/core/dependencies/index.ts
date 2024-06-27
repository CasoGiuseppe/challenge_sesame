import { useRouter } from "vue-router"
import { VacancyStateRepository } from "@modules/recruitment/modules/positions/data/repository/VacancyStateRepository"
import { GetVacancyByIdUseCase } from "@modules/recruitment/modules/positions/domain/application/use-cases/GetVacancyByIdUseCase"
import { VacancyBloc } from "@modules/recruitment/modules/positions/presentation/bloc"
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

export const dependencies = { provideVacancyPloc }