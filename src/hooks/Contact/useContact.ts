"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

type FormField = keyof ContactFormData;

const initialForm: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const benefitKeys = ["0", "1", "2"] as const;

export const useContact = () => {
  const { t } = useTranslation("contact");
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<FormField, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = {
    phone: t("phoneNumber"),
    email: t("emailAddress"),
    location: t("locationName"),
  };

  const benefits = benefitKeys.map((key) => ({
    title: t(`whyChooseUs.items.${key}.title`),
    description: t(`whyChooseUs.items.${key}.description`),
  }));

  const updateField = (field: FormField, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (submitted) setSubmitted(false);
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<FormField, string>> = {};

    if (!form.name.trim()) nextErrors.name = t("form.errors.name");
    if (!form.phone.trim()) nextErrors.phone = t("form.errors.phone");
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = t("form.errors.email");
    }
    if (!form.message.trim()) nextErrors.message = t("form.errors.message");

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm(initialForm);
  };

  return {
    t,
    form,
    errors,
    submitted,
    contactInfo,
    benefits,
    updateField,
    handleSubmit,
  };
};
