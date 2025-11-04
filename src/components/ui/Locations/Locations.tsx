'use client';

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import dynamic from 'next/dynamic';
const Title = dynamic(() => import('@/components/common/Title/Title'));
const Paragraph = dynamic(() => import('@/components/common/Paragraph/Paragraph'));

interface Location {
  title: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl: string;
  isHeadquarters?: boolean;
}

const Locations: React.FC = () => {
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

  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Title
            text={t("title")}
            subtitle={t("subtitle")}
            as="h1"
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {locations.map((loc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-60">
                  <iframe
                    src={loc.mapUrl}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="rounded-t-2xl"
                  ></iframe>

                  {loc.isHeadquarters && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                      {t("headquarters")}
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <Title text={loc.title} as="h2" align="left" className="mb-4" />

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <Paragraph text={loc.address} className="flex-1" />
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <a
                        href={`tel:${loc.phone}`}
                        className="text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <a
                        href={`mailto:${loc.email}`}
                        className="text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
                      >
                        {loc.email}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <Paragraph text={loc.hours} />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 bg-gradient-to-r from-teal-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    onClick={() =>
                      window.open(loc.mapUrl.replace("&output=embed", ""), "_blank")
                    }
                  >
                    {t("getDirections")}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
