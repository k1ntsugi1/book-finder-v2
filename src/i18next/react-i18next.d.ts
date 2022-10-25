import 'react-i18next';
import RU from './locales/ru.json';
import EN from './locales/en.json';


declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'ns1';
        resources: {
            ru: typeof RU,
            en: typeof EN,
        };
    }
}