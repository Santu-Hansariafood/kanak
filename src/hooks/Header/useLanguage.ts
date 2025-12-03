"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { t, i18n } = useTranslation();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [mounted, setMounted] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिन्दी" },
    { code: "ta", name: "தமிழ்" },
    { code: "bn", name: "বাংলা" },
    { code: "te", name: "తెలుగు" },
  ];

  useEffect(() => setMounted(true), []);

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);

    if (typeof window !== "undefined") {
      localStorage.setItem("i18nextLng", langCode);
    }

    setShowLangMenu(false);
  };

  return {
    t,
    i18n,
    languages,
    currentLanguage,
    showLangMenu,
    setShowLangMenu,
    mounted,
    changeLanguage,
  };
};
