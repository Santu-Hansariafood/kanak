'use client';

import { useTranslation } from "react-i18next";

export interface Location {
  title: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl: string;
  isHeadquarters?: boolean;
}

export const useLocations = () => {
  const { t } = useTranslation("locations");

  const locations: Location[] = [
    {
      title: t("list.corporate.title"),
      address: t("list.corporate.address"),
      phone: t("list.corporate.phone"),
      email: t("list.corporate.email"),
      hours: t("list.corporate.hours"),
      mapUrl:
        "https://www.google.com/maps?q=Primarc+Square,+Salt+Lake,+Kolkata&output=embed",
      isHeadquarters: true,
    },
    {
      title: t("list.register.title"),
      address: t("list.register.address"),
      phone: t("list.register.phone"),
      email: t("list.register.email"),
      hours: t("list.register.hours"),
      mapUrl:
        "https://www.google.com/maps?q=Maharshi+Debendra+Road,+Burrabazar,+Kolkata&output=embed",
    },
    {
      title: t("list.chennai.title"),
      address: t("list.chennai.address"),
      phone: t("list.chennai.phone"),
      email: t("list.chennai.email"),
      hours: t("list.chennai.hours"),
      mapUrl:
        "https://www.google.com/maps?q=26+Tank+Bund+Road,+Nungambakkam,+Chennai&output=embed",
    },
    {
      title: t("list.pack.title"),
      address: t("list.pack.address"),
      phone: t("list.pack.phone"),
      email: t("list.pack.email"),
      hours: t("list.pack.hours"),
      mapUrl:
        "https://www.google.com/maps?q=Reddiyachatram,+Dindigul,+Tamilnadu&output=embed",
    },
  ];

  return { t, locations };
};
