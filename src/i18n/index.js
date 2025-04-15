import { createI18n } from "vue-i18n";
import en from "./locales/en";

const i18n = createI18n({
  legacy: false,
  locale: "tr",
  fallbackLocale: "en",
  messages: {
    en,
  },
  globalInjection: true,
});

export default i18n;
