import * as enFake from '../fake/en.json';
import { translation as enRecruitment } from '../recruitment/en';

export const en = {
  FORM: {
    placeholder: {
      search: 'Search',
      firstname: 'First name',
      lastname: 'Last name',
      email: 'Email'
    },
    errors: {
      validation: 'The entered value does not meet the validation',
      required: 'The field needs a value because it is mandatory'
    }
  },
  ACCION: {
    add: 'Add one',
    create: 'Create a new applicant',
    backToStart: 'Back to Start',
    loading: 'We are processing...'
  },
  ROLES: {
    admin: 'Administrator'
  },
  AREAS: {
    talent: 'Talent'
  },

  EVENTS: {
    creation: 'The candidate has been created successfully'
  },

  ERRORS: {
    generic: 'OPS! An error occurred, please try again'
  },

  WELCOME: {
    title: 'Welcome to the Sesame HR System',
    message:
      'This is a sample application to demonstrate the functionality of the Sesame HR System',
    action: 'Get started'
  },

  LANGUAGE: {
    message: 'Choose your language'
  },

  ...enRecruitment,
  ...enFake
};
