import appRouter from '@app/router';
import { VacancyStateRepository } from '@modules/vacancy/data/repository/VacancyStateRepository';
import { GetVacancyByIdUseCase } from '@modules/vacancy/domain/application/use-cases/GetVacancyByIdUseCase';
import { ApplicantRepository } from '@modules/applicant/data/repository/ApplicantRepository';
import { VacancyBloc } from '@modules/vacancy/presentation/bloc';
import { ApplicantBloc } from '@modules/applicant/presentation/bloc';
import { CreateNewApplicantUseCase } from '@modules/applicant/domain/application/use-cases/CreateNewApplicant';
import { GetApplicantsByVacancyIdUseCase } from '@modules/applicant/domain/application/use-cases/GetApplicantsByVacancyId';
import { ChangeApplicantStatusUseCase } from '@modules/applicant/domain/application/use-cases/ChangeApplicantStatus';
import { HTTPServiceProvider } from '@modules/core/providers/http/http.provide';
import { useVacancyResponse } from '@modules/vacancy/presentation/store/vacancy';
import { useApplicantResponse } from '@/modules/applicant/presentation/store/applicant';
import { EventEmitter } from '@app/shared/utilities/EventsModel/EventEmitter';
import { useGlobalEventsStore } from '@app/shared/stores/global-events/globalEvents';
import { keyUseEventSuccess } from "@app/shared/types/symbols";

export const eventEmitter = new EventEmitter();
const global = useGlobalEventsStore;
eventEmitter.subscribe(keyUseEventSuccess.toString(), global.setEmittedEventState);

const provideVacancyPloc = () => {
  const router = appRouter;
  const store = useVacancyResponse();
  const vacancyStateRepository = new VacancyStateRepository(new HTTPServiceProvider());
  const getVacancyById = new GetVacancyByIdUseCase(vacancyStateRepository);


  return new VacancyBloc({
    router,
    store,
    eventEmitter,
    getVacancyById
  });
};

const provideApplicantPloc = () => {
  const router = appRouter;
  const store = useApplicantResponse();
  const applicantRepository = new ApplicantRepository(new HTTPServiceProvider());
  const getApplicantsByVacancyId = new GetApplicantsByVacancyIdUseCase(applicantRepository);
  const createNewApplicant = new CreateNewApplicantUseCase(applicantRepository);
  const changeApplicantStatus = new ChangeApplicantStatusUseCase(applicantRepository);
  
  return new ApplicantBloc({
    router,
    store,
    eventEmitter,
    getApplicantsByVacancyId,
    createNewApplicant,
    changeApplicantStatus
  });
};

export const dependencies = {
  provideVacancyPloc,
  provideApplicantPloc
};
