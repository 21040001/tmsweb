// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Çeviri dosyaları
import tr from "./locales/tr/translation.json";
import en from "./locales/en/translation.json";
import de from "./locales/de/translation.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translation: tr },
      en: { translation: en },
      de: { translation: de },
    },
    fallbackLng: "tr", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
