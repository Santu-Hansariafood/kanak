"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

type IconProps = {
  className?: string;
};

const FacebookIcon = ({ className }: IconProps) =>
  React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true" },
    React.createElement("path", { d: "M13.5 22v-9h3l.5-3h-3.5V4.5c0-.8.2-1.5 1.3-1.5H17V.1C16.6.1 15.4 0 14.2 0c-2.6 0-4.5 1.6-4.5 4.5V10H6v3h3.7v9h3.8Z" })
  );

const YoutubeIcon = ({ className }: IconProps) =>
  React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true" },
    React.createElement("path", { d: "M21.8 7.2a2.8 2.8 0 0 0-2-2C17.9 4.5 12 4.5 12 4.5s-5.9 0-7.8.7a2.8 2.8 0 0 0-2 2A29.3 29.3 0 0 0 2 12a29.3 29.3 0 0 0 .2 4.8 2.8 2.8 0 0 0 2 2c1.9.7 7.8.7 7.8.7s5.9 0 7.8-.7a2.8 2.8 0 0 0 2-2A29.3 29.3 0 0 0 22 12a29.3 29.3 0 0 0-.2-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" })
  );

const LinkedinIcon = ({ className }: IconProps) =>
  React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true" },
    React.createElement("path", { d: "M6.94 8.5A1.56 1.56 0 1 0 6.94 5.4a1.56 1.56 0 0 0 0 3.1ZM5.5 9.8h2.88V18H5.5V9.8Zm4.78 0h2.76v1.1h.04c.38-.72 1.32-1.48 2.72-1.48 2.91 0 3.45 1.91 3.45 4.4V18H16.8v-7.4c0-1.76-.03-4.03-2.46-4.03-2.46 0-2.84 1.92-2.84 3.9V18H10.28V9.8Z" })
  );

const InstagramIcon = ({ className }: IconProps) =>
  React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      className,
      "aria-hidden": "true",
    },
    React.createElement("rect", { x: "3.5", y: "3.5", width: "17", height: "17", rx: "4" }),
    React.createElement("circle", { cx: "12", cy: "12", r: "4.2" }),
    React.createElement("circle", { cx: "17.5", cy: "6.5", r: "1", fill: "currentColor", stroke: "none" })
  );

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
    {
      icon: FacebookIcon,
      href: "https://www.facebook.com/kanakretail/",
      label: t("social_facebook"),
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: YoutubeIcon,
      href: "https://www.youtube.com/@KanakRetail",
      label: t("social_youtube"),
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/company/hansaria-food-pvt-ltd",
      label: t("social_linkedin"),
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: InstagramIcon,
      href: "https://instagram.com/kanak_retail",
      label: t("social_instagram"),
      target: "_blank",
      rel: "noopener noreferrer",
    },
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
