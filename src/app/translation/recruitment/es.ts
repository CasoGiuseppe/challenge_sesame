import * as esApplicantLocale from '@/modules/applicant/presentation/translations/locales/es.json'
import * as esVacancyLocale from '@/modules/vacancy/presentation/translations/locales/es.json'

export const translation = {
  RECRUITMENT: {
    area: 'Reclutamiento',
    ...esApplicantLocale,
    ...esVacancyLocale
  }
};
