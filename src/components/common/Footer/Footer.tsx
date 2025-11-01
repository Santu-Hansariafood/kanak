"use client";
import "@/lib/i18n/client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import Modal from "@/components/common/Model/Model";
import { useTranslation } from "react-i18next";

const Footer = () => {
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

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-cyan-500/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-teal-500/10" />
      <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/60" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t("company_name")}
                </span>
              </div>
            </motion.div>

            <p className="text-gray-400 leading-relaxed">{t("tagline")}</p>

            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <span>{t("email")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <span>{t("phone")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span>{t("address")}</span>
              </div>
            </div>
          </div>

          {[
            ["company", t("company")],
            ["services", t("services")],
            ["resources", t("resources")],
            ["legal", t("legal")],
          ].map(([key, title], index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {title}
              </h3>
              <ul className="space-y-3">
                {footerLinks[key as keyof typeof footerLinks].map((link, i) => (
                  <li key={i}>
                    {key === "services" || key === "legal" ? (
                      <button
                        onClick={(e) => handleLinkClick(e, key)}
                        className="text-gray-400 hover:text-teal-400 transition-all duration-200 hover:translate-x-1 inline-block text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-teal-400 transition-all duration-200 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-800/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {t("company_name")}. {t("copyright")}
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-700 hover:bg-teal-600 transition"
              >
                <social.icon className="w-5 h-5 text-gray-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 group"
        aria-label={t("scroll_top")}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
          <ArrowUp className="w-6 h-6 text-white" />
        </div>
      </motion.button>

      <Modal
        isOpen={isServicesModalOpen}
        onClose={() => setIsServicesModalOpen(false)}
        title={t("our_services")}
      />
      <Modal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        title={t("legal_info")}
      />
    </footer>
  );
};

export default Footer;
