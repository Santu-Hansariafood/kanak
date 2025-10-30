'use client';
import React from 'react';
import "@/lib/i18n/client";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Star, Users, Globe, Award } from 'lucide-react';

import Carousel from "@/components/ui/Carousel/Carousel";
import CookieConsent from '@/components/ui/CookieConsent/CookieConsent';

const Home = () => {
  const { t } = useTranslation("home");

  const features = t('home.features', { returnObjects: true }) as {
    icon: string;
    title: string;
    desc: string;
  }[];

  // ✅ Define icon mapping
  const icons: Record<string, React.ElementType> = {
    Star,
    Users,
    Globe,
    Award,
  };

  // ✅ Fallback if translations are missing
  const fallbackFeatures = [
    { icon: 'Star', title: 'Excellence', desc: 'Delivering top-quality solutions that exceed expectations' },
    { icon: 'Users', title: 'Expert Team', desc: 'Skilled professionals dedicated to your success' },
    { icon: 'Globe', title: 'Global Reach', desc: 'Serving clients worldwide with 24/7 support' },
    { icon: 'Award', title: 'Award Winning', desc: 'Recognized for innovation and customer satisfaction' },
  ];

  const featuresToUse = Array.isArray(features) && features.length > 0 ? features : fallbackFeatures;

  return (
    <div className="overflow-hidden relative">
      {/* Hero Carousel */}
      <Carousel />

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('home.whyChoose.title', 'Why Choose Us')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.whyChoose.subtitle', 'We deliver excellence with every project.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresToUse.map((feature, index) => {
              const Icon = icons[feature.icon] || Star;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-cyan-500">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('home.cta.title', 'Ready to Get Started?')}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t('home.cta.subtitle', 'Join us and take your business to the next level.')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 mx-auto hover:shadow-lg transition-all duration-300"
            >
              <span>{t('home.cta.button', 'Get Started')}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  );
};

export default Home;
