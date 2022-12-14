import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './resources';

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: localStorage.getItem('current-lang') ?? 'ru',
  resources,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
