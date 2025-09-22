import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: {
        welcome: "Bonjour, bienvenue sur mon site !",
        contact: "Contactez-moi",
      }
    },
    en: {
      translation: {
        welcome: "Hello, welcome to my website!",
        contact: "Contact me",
      }
    }
  },
  lng: "fr", // langue par défaut
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
