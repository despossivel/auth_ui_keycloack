import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { PT, EN, ES } from './index';

i18n
 .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: false,
    resources: {
      ...PT,
      ...EN,
      ...ES,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
