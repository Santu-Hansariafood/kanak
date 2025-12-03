"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const languages = ["en", "hi", "ta", "bn", "te"] as const;
const namespaces = [
  "header",
  "footer",
  "about",
  "teams",
  "locations",
  "products",
  "blog",
  "home",
  "carousel",
  "cookie",
] as const;

type Language = (typeof languages)[number];
type Namespace = (typeof namespaces)[number];

type ResourceStructure = Record<
  Language,
  Record<Namespace, Record<string, unknown>>
>;

const resources: ResourceStructure = await languages.reduce(
  async (accPromise, lang) => {
    const acc = await accPromise;

    acc[lang] = await namespaces.reduce(async (nsAccPromise, ns) => {
      const nsAcc = await nsAccPromise;
      try {
        nsAcc[ns] = (await import(`../locales/${lang}/${ns}.json`)).default;
      } catch (err) {
        console.warn(`Missing translation file: ${lang}/${ns}.json`, err);
      }
      return nsAcc;
    }, Promise.resolve({} as Record<Namespace, Record<string, unknown>>));

    return acc;
  },
  Promise.resolve({} as ResourceStructure)
);

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources,
      fallbackLng: "en",
      supportedLngs: [...languages],
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"],
        lookupLocalStorage: "i18nextLng",
      },
      ns: [...namespaces],
      defaultNS: "header",
      react: { useSuspense: false },
    });
}

export const t = i18n.t.bind(i18n);

export default i18n;
