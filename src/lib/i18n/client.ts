"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enHeader from "../locales/en/header.json";
import hiHeader from "../locales/hi/header.json";
import taHeader from "../locales/ta/header.json";
import bnHeader from "../locales/bn/header.json";
import teHeader from "../locales/te/header.json";
import enFooter from "../locales/en/footer.json";
import hiFooter from "../locales/hi/footer.json";
import taFooter from "../locales/ta/footer.json";
import bnFooter from "../locales/bn/footer.json";
import teFooter from "../locales/te/footer.json";

const resources = {
  en: {
    header: enHeader,
    footer: enFooter,
  },
  hi: {
    header: hiHeader,
    footer: hiFooter,
  },
  ta: {
    header: taHeader,
    footer: taFooter,
  },
  bn: {
    header: bnHeader,
    footer: bnFooter,
  },
  te: {
    header: teHeader,
    footer: teFooter,
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources,
      fallbackLng: "en",
      supportedLngs: ["en", "hi", "ta", "bn", "te"],
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"],
      },
      ns: ["header", "footer"],
      defaultNS: "header",
      react: { useSuspense: false },
    });
}

export default i18n;
