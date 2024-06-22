import { useI18n } from 'vue-i18n';
import type { ITranslation } from './interfaces/ITranslation.interface';
import { i18n } from '@app/translation';

export default function useTranslation(): ITranslation {
    const { t, te } = useI18n({
        inheritLocale: true,
        useScope: 'local'
    });

    
    /**
     * Method to return locale translation string
     * @param {string} key - translation locale key name
     * @param {string} option - record of parameters for locale translation options
     * @returns {string} - translation string or default value if locale translation is not found
     */
    const translate = ({ key, options = {} }:{ key: string, options?: Record<string, unknown>}): string => {
        return te(key) ? t(key, options) : `no translation was found for ${key} key`
    }


    /**
     * Method to set a new translation locale value
     * @param {string} locale - new translation locale value
     * @returns {void}
     */
    const setNewTranslationLocale = ( locale: string ): void => {
        const checkLocaleExist = i18n.global.availableLocales.includes(locale);
        if(!checkLocaleExist) throw new Error(`new locale ${locale} is not available`);
        i18n.global.locale.value = locale
    }

    return { translate, setNewTranslationLocale }
}