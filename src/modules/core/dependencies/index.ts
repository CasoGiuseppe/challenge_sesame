import { useRouter } from "vue-router"
import { VacancyStateRepository } from "@modules/recruitment/modules/positions/data/repository/VacancyStateRepository"
import { GetVacancyStateUseCase } from "@modules/recruitment/modules/positions/domain/application/use-cases/GetVacancyStateUseCase"
import { VacancyBloc } from "@modules/recruitment/modules/positions/presentation/bloc"
import { HTTPServiceProvider } from "../providers/providerName/http/http.provide"

const provideVacancyPloc = () => {
    const router = useRouter()

    const vacancyStateRepository = new VacancyStateRepository(new HTTPServiceProvider())
    const getVacancyStateUseCase = new GetVacancyStateUseCase(vacancyStateRepository)

    return new VacancyBloc({
        router,
        getVacancyStateUseCase
    })
}

export const dependencies = { provideVacancyPloc }