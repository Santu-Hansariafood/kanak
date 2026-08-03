"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import dynamic from "next/dynamic";
import { useContact } from "@/hooks/Contact/useContact";

const Title = dynamic(() => import("@/components/common/Title/Title"));
const Paragraph = dynamic(() => import("@/components/common/Paragraph/Paragraph"));

const inputClassName =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100";

const Contact: React.FC = () => {
  const {
    t,
    form,
    errors,
    submitted,
    contactInfo,
    benefits,
    updateField,
    handleSubmit,
  } = useContact();

  return (
    <div className="pt-16 pb-20">
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-gray-200 bg-white/80 shadow-xl backdrop-blur dark:border-gray-700 dark:bg-gray-800/80"
          >
            <div className="grid items-center gap-10 px-6 py-10 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-16">
              <div>
                <span className="mb-4 inline-flex items-center rounded-full bg-teal-500/10 px-3 py-1 text-sm font-semibold text-teal-700 dark:text-teal-400">
                  {t("badge")}
                </span>
                <Title text={t("title")} as="h1" align="left" className="mb-5" />
                <Paragraph text={t("subtitle")} className="max-w-2xl" />

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:shadow-lg"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {t("callNow")}: {contactInfo.phone}
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-teal-500 hover:text-teal-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {t("emailUs")}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-700 bg-slate-950 p-6 text-white shadow-2xl sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">
                  {t("quickContact")}
                </p>
                <div className="mt-5 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm text-slate-300">{t("phoneLabel")}</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="mt-1 block text-lg font-semibold text-white hover:text-teal-300"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm text-slate-300">{t("emailLabel")}</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="mt-1 block text-lg font-semibold text-white hover:text-teal-300"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                    <p className="flex items-center gap-2 text-sm text-slate-300">
                      <MapPin className="h-4 w-4" />
                      {t("locationLabel")}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-8"
            >
              <Title text={t("whyChooseUs.title")} as="h2" align="left" className="mb-3" />
              <Paragraph text={t("whyChooseUs.subtitle")} />

              <div className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-900/50"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-8"
            >
              <Title text={t("form.title")} as="h2" align="left" className="mb-2" />
              <Paragraph text={t("form.subtitle")} />

              <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      className={inputClassName}
                      placeholder={t("form.name")}
                      type="text"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      className={inputClassName}
                      placeholder={t("form.phone")}
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    className={inputClassName}
                    placeholder={t("form.email")}
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <textarea
                    className={`${inputClassName} min-h-32 resize-y`}
                    placeholder={t("form.message")}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                {submitted && (
                  <p className="rounded-xl bg-teal-50 px-4 py-3 text-sm text-teal-800 dark:bg-teal-900/30 dark:text-teal-200">
                    {t("form.success")}
                  </p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-800 dark:bg-teal-600 dark:hover:bg-teal-700"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {t("form.submit")}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
