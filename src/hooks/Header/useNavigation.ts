"use client";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export const useNavigation = () => {
  const pathname = usePathname();
  const { t } = useTranslation();

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.products"), path: "/products" },
    { name: t("nav.teams"), path: "/teams" },
    { name: t("nav.locations"), path: "/locations" },
    { name: t("nav.blog"), path: "/blog" },
  ];

  return { pathname, navItems };
};
