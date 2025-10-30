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
import enAbout from "../locales/en/about.json";
import hiAbout from "../locales/hi/about.json";
import taAbout from "../locales/ta/about.json";
import bnAbout from "../locales/bn/about.json";
import teAbout from "../locales/te/about.json";
import enTeams from "../locales/en/teams.json";
import hiTeams from "../locales/hi/teams.json";
import taTeams from "../locales/ta/teams.json";
import bnTeams from "../locales/bn/teams.json";
import teTeams from "../locales/te/teams.json";
import enLocations from "../locales/en/locations.json";
import hiLocations from "../locales/hi/locations.json";
import taLocations from "../locales/ta/locations.json";
import bnLocations from "../locales/bn/locations.json";
import teLocations from "../locales/te/locations.json";
import enProducts from "../locales/en/products.json";
import hiProducts from "../locales/hi/products.json";
import taProducts from "../locales/ta/products.json";
import bnProducts from "../locales/bn/products.json";
import teProducts from "../locales/te/products.json";
import enBlog from "../locales/en/blog.json";
import hiBlog from "../locales/hi/blog.json";
import taBlog from "../locales/ta/blog.json";
import bnBlog from "../locales/bn/blog.json";
import teBlog from "../locales/te/blog.json";

const resources = {
  en: {
    header: enHeader,
    footer: enFooter,
    about: enAbout,
    teams: enTeams,
    locations: enLocations,
    products: enProducts,
    blog: enBlog,
  },
  hi: {
    header: hiHeader,
    footer: hiFooter,
    about: hiAbout,
    teams: hiTeams,
    locations: hiLocations,
    products: hiProducts,
    blog: hiBlog,
  },
  ta: {
    header: taHeader,
    footer: taFooter,
    about: taAbout,
    teams: taTeams,
    locations: taLocations,
    products: taProducts,
    blog: taBlog,
  },
  bn: {
    header: bnHeader,
    footer: bnFooter,
    about: bnAbout,
    teams: bnTeams,
    locations: bnLocations,
    products: bnProducts,
    blog: bnBlog,
  },
  te: {
    header: teHeader,
    footer: teFooter,
    about: teAbout,
    teams: teTeams,
    locations: teLocations,
    products: teProducts,
    blog: teBlog,
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
      ns: ["header", "footer", "about", "teams", "locations", "products", "blog"],
      defaultNS: "header",
      react: { useSuspense: false },
    });
}

export default i18n;
