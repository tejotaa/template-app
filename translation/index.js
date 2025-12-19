import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as resources from './resources';

const LANGUAGE_KEY = '@app_language';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async callback => {
    try {
      const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
      const language = savedLanguage || 'es'; // idioma por defecto
      callback(language);
    } catch (error) {
      console.log('Error detecting language:', error);
      callback('es');
    }
  },
  init: () => {},
  cacheUserLanguage: async language => {
    try {
      await AsyncStorage.setItem(LANGUAGE_KEY, language);
    } catch (error) {
      console.log('Error saving language:', error);
    }
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      ...Object.entries(resources).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: {
            translation: value,
          },
        }),
        {}
      ),
    },
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
