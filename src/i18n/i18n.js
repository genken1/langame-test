import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/translation.json';
import ruTranslation from './ru/translation.json';

i18next.use(initReactI18next).init({
  lng: 'ru',
  debug: true,
  resources: {
    en: {
      translation: enTranslation,
    },
    ru: {
      translation: ruTranslation,
    },
  },
});
