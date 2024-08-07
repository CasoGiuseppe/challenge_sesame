import { createI18n } from 'vue-i18n';
import { es } from './locales/es';
import { en } from './locales/en';

export const i18n = await createI18n({
    locale: import.meta.env.VITE_APP_LOCALE,
    fallbackLocale: import.meta.env.VITE_APP_LOCALE_FALLBACK,
    legacy: false,
    globalInjection: true,
    availableLocales: ['es', 'en'],
    missingWarn: false,
    silentTranslationWarn: false,
    fallbackWarn: false,
    messages: {
      es: { ...es },
      en: { ...en }
      
    }
  });