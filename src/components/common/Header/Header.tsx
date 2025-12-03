"use client";

import "@/lib/i18n/client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/hooks/Header/useLanguage";
import { useNavigation } from "@/hooks/Header/useNavigation";
import { useMenu } from "@/hooks/Header/useMenu";

const Header = () => {
  const {
    t,
    i18n,
    languages,
    currentLanguage,
    showLangMenu,
    setShowLangMenu,
    mounted,
    changeLanguage,
  } = useLanguage();

  const { pathname, navItems } = useNavigation();
  const { isOpen, setIsOpen, toggleMenu } = useMenu();

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        sticky top-0 z-50 backdrop-blur-2xl shadow-lg border-b 
        border-white/20 dark:border-gray-800
        bg-white/60 dark:bg-gray-900/60 
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="
              relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden 
              border-2 border-teal-500 dark:border-teal-400 
              bg-white/90 dark:bg-gray-700/90 shadow-md
            ">
              <Image
                src="/kanak.jpg"
                alt="Kanak Logo"
                fill
                priority
                sizes="(max-width: 768px) 48px, 56px"
                className="object-cover"
              />
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`
                  relative px-4 py-2 text-[15px] font-semibold tracking-wide 
                  transition-all duration-300 rounded-xl
                  ${
                    pathname === item.path
                      ? "text-teal-600 dark:text-teal-400 bg-white/60 dark:bg-gray-800/60 shadow-sm"
                      : "text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-white/40 dark:hover:bg-gray-700/40"
                  }
                `}
              >
                {item.name}

                {pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="
                      absolute bottom-0 left-0 right-0 h-0.5 
                      bg-gradient-to-r from-teal-500 to-cyan-400
                      dark:from-teal-400 dark:to-cyan-300
                    "
                  />
                )}
              </Link>
            ))}
            <div className="relative ml-4">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="
                  flex items-center space-x-2 px-4 py-2 rounded-xl
                  bg-gradient-to-r from-teal-100/60 to-cyan-100/60 
                  dark:from-gray-800/60 dark:to-gray-700/60
                  border border-white/40 dark:border-gray-700
                  hover:shadow-lg transition-all duration-300 backdrop-blur-md
                "
              >
                <Globe className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {currentLanguage.code.toUpperCase()}
                </span>
              </button>

              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="
                      absolute right-0 mt-3 w-48 
                      bg-white/90 dark:bg-gray-900/90 
                      backdrop-blur-xl rounded-2xl shadow-xl 
                      border border-white/30 dark:border-gray-700 py-2 z-50
                    "
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`
                          w-full flex items-center space-x-3 px-4 py-2 text-sm font-medium 
                          rounded-lg transition-colors
                          ${
                            i18n.language === lang.code
                              ? "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                          }
                        `}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <button
            className="
              md:hidden p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 
              backdrop-blur-sm transition-colors duration-200
            "
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-teal-700 dark:text-teal-400" />
            ) : (
              <Menu className="w-6 h-6 text-teal-700 dark:text-teal-400" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="
              md:hidden bg-white/90 dark:bg-gray-900/90 
              backdrop-blur-2xl border-t border-white/20 dark:border-gray-700
              shadow-lg
            "
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    block px-4 py-3 rounded-xl text-base font-medium 
                    transition-all duration-200
                    ${
                      pathname === item.path
                        ? "text-teal-600 dark:text-teal-300 bg-gradient-to-r from-white/80 dark:from-gray-800 to-cyan-50 dark:to-gray-700"
                        : "text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-white/60 dark:hover:bg-gray-700/60"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}

              <div className="
                px-4 py-3 mt-3 bg-white/70 dark:bg-gray-800/70 
                rounded-xl border border-white/40 dark:border-gray-700 
                backdrop-blur-md
              ">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  {t("nav.language")}
                </p>

                <div className="space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`
                        w-full flex items-center space-x-2 px-3 py-2 rounded-lg 
                        transition-colors
                        ${
                          i18n.language === lang.code
                            ? "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300"
                            : "hover:bg-white/60 dark:hover:bg-gray-700/60"
                        }
                      `}
                    >
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
