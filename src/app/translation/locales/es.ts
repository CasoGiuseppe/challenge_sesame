import * as esFake from '../fake/es.json';
import { translation as esRecruitment } from '../recruitment/es';

export const es = {
  FORM: {
    placeholder: {
      search: 'Buscar',
      firstname: 'Nombre',
      lastname: 'Apellido',
      email: 'Correo electrónico'
    },
    errors: {
      validation: 'El valor introducido no cumple con la validación',
      required: 'El campo necesita de un valor porqué es obligatorio'
    }
  },
  ACCION: {
    add: 'Añadir',
    create: 'Crear un nuevo candidato',
    backToStart: 'Vuelve al principio',
    loading: 'Estamos procesando...'
  },
  ROLES: {
    admin: 'Administrator'
  },
  AREAS: {
    talent: 'Talento'
  },
  EVENTS: {
    creation: 'El candidato se ha creado correctamente'
  },
  ERRORS: {
    generic: 'OPS! Se ha producido un error, vuelve a intentarlo'
  },
  WELCOME: {
    title: 'Bienvenido a Sesame HR System',
    message:
      'Esta es una aplicación de muestra para demostrar la funcionalidad de Sesame HR System.',
    action: 'Empezar'
  },
  LANGUAGE: {
    message: 'Elige tu idioma'
  },
  ...esFake,
  ...esRecruitment
};
