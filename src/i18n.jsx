// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/eng/translation';
import uzTranslation from './locales/uz/translation';
import ruTranslation from './locales/ru/translation';

const resources = {
    en: {
        translation: enTranslation
    },
    uz: {
        translation: uzTranslation
    },
    ru: {
        translation: ruTranslation
    }
};

const language = localStorage.getItem('language') || 'en';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: language,
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
