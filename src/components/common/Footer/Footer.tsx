"use client";
import "@/lib/i18n/client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import Modal from "@/components/common/Model/Model";
import { useFooter } from "@/hooks/Footer/useFooter";
import Link from "next/link";

const Footer = () => {
  const {
    t,
    footerLinks,
    socialLinks,
    isLegalModalOpen,
    setIsLegalModalOpen,
    handleLinkClick,
    scrollToTop,
  } = useFooter();

  const [mounted, setMounted] = useState(false);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    setYear(new Date().getFullYear());
  }, []);

  if (!mounted) {
    return (
      <footer className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-6 opacity-0">Kanak Retail</div>
      </footer>
    );
  }

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300 border-t border-slate-800/60">
      {/* Subtle modern ambient lighting glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        {/* Modern Auto-Fit Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Brand & Info Column */}
          <div className="space-y-6 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                {t("company_name")}
              </span>
            </motion.div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {t("tagline")}
            </p>

            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="truncate">{t("email")}</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>{t("phone")}</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="leading-snug">{t("address")}</span>
              </div>
            </div>
          </div>

          {/* Dynamic Links Columns (Auto-Fit) */}
          {[
            ["company", t("company")],
            ["resources", t("resources")],
            ["legal", t("legal")],
          ].map(([key, title], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                {title}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {footerLinks[key as keyof typeof footerLinks]?.map(
                  (link, i) => (
                    <li key={i}>
                      {key === "legal" ? (
                        <button
                          onClick={(e) => handleLinkClick(e, key)}
                          className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-left"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-slate-400 hover:text-teal-400 transition-colors duration-200 inline-block"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ),
                )}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar Divider & Info */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs tracking-wide">
            © {year} {t("company_name")}. {t("copyright")}
          </p>

          <div className="flex items-center space-x-3">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Modern Scroll-to-Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label={t("scroll_top")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-11 h-11 bg-gradient-to-tr from-teal-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/20 border border-white/10 backdrop-blur-sm">
          <ArrowUp className="w-4 h-4 text-slate-950 stroke-[2.5]" />
        </div>
      </motion.button>

      <Modal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        title={t("legal_info")}
      />
    </footer>
  );
};

export default Footer;
