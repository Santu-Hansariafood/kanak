'use client';
import "@/lib/i18n/client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const languages = [
    { code: "en", name: "English"},
    { code: "hi", name: "हिन्दी" },
    { code: "ta", name: "தமிழ்"},
    { code: "bn", name: "বাংলা" },
    { code: "te", name: "తెలుగు"},
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    if (typeof window !== "undefined") {
      localStorage.setItem("i18nextLng", langCode);
    }
    setShowLangMenu(false);
  };

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.products"), path: "/products" },
    { name: t("nav.teams"), path: "/teams" },
    { name: t("nav.locations"), path: "/locations" },
    { name: t("nav.blog"), path: "/blog" },
  ];

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-24 md:h-10 md:w-32">
              <Image
                src="/kanak.jpg"
                alt="VITARA Logo"
                fill
                priority
                sizes="(max-width: 768px) 100px, 160px"
                className="object-contain"
                style={{
                  filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.1))",
                  mixBlendMode: "multiply",
                }}
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                  pathname === item.path
                    ? "text-teal-600 bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
            ))}

            <div className="relative ml-4">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200/50 hover:shadow-md transition-all duration-200"
              >
                <Globe className="w-4 h-4 text-gray-600" />
                {/* <span className="text-2xl">{currentLanguage.flag}</span> */}
                <span className="text-sm font-medium text-gray-700">
                  {currentLanguage.code.toUpperCase()}
                </span>
              </button>

              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 bg-white/98 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 py-2 z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 hover:bg-teal-50 transition-colors ${
                        i18n.language === lang.code
                          ? "bg-teal-50 text-teal-600"
                          : "text-gray-700"
                      }`}
                    >
                      {/* <span className="text-xl">{lang.flag}</span> */}
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white/98 backdrop-blur-xl border-t border-gray-200/50 shadow-lg"
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  pathname === item.path
                    ? "text-teal-600 bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="px-4 py-3 mt-2 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500 mb-2">{t("nav.language")}</p>
              <div className="space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      i18n.language === lang.code
                        ? "bg-teal-100 text-teal-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {/* <span className="text-lg">{lang.flag}</span> */}
                    <span className="text-sm font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Header;
