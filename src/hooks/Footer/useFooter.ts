"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const useFooter = () => {
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const { t } = useTranslation("footer");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    if (type === "services") setIsServicesModalOpen(true);
    if (type === "legal") setIsLegalModalOpen(true);
  };

  const footerLinks = {
    company: [
      { name: t("about_us"), href: "/about" },
      { name: t("our_team"), href: "/teams" },
      { name: t("careers"), href: "/careers" },
      { name: t("press"), href: "/press" },
    ],
    services: [
      { name: t("web_dev"), href: "/products" },
      { name: t("mobile_apps"), href: "/products" },
      { name: t("cloud_services"), href: "/products" },
      { name: t("consulting"), href: "/consulting" },
    ],
    resources: [
      { name: t("blog"), href: "/blog" },
      { name: t("documentation"), href: "/documentation" },
      { name: t("support"), href: "/support" },
      { name: t("contact"), href: "/contact" },
    ],
    legal: [
      { name: t("privacy_policy"), href: "/privacy" },
      { name: t("terms_of_service"), href: "/terms" },
      { name: t("cookie_policy"), href: "/cookies" },
      { name: t("gdpr"), href: "/gdpr" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: t("social_facebook") },
    { icon: Twitter, href: "https://twitter.com", label: t("social_twitter") },
    { icon: Linkedin, href: "https://linkedin.com", label: t("social_linkedin") },
    { icon: Instagram, href: "https://instagram.com", label: t("social_instagram") },
  ];

  return {
    t,
    footerLinks,
    socialLinks,
    isServicesModalOpen,
    isLegalModalOpen,
    setIsServicesModalOpen,
    setIsLegalModalOpen,
    handleLinkClick,
    scrollToTop,
  };
};
