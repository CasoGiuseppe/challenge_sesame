import * as enApplicantLocale from '@/modules/applicant/presentation/translations/locales/en.json'
import * as enVacancyLocale from '@/modules/vacancy/presentation/translations/locales/en.json'

export const translation = {
  RECRUITMENT: {
    area: 'Recruitment',
    ...enApplicantLocale,
    ...enVacancyLocale
  }
};
