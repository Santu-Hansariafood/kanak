'use client';
import React from 'react';
import "@/lib/i18n/client";
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';
import { useHomeContent } from '@/hooks/Home/useHomeContent';

const Carousel = dynamic(() => import("@/components/ui/Carousel/Carousel"));
const CookieConsent = dynamic(() => import('@/components/ui/CookieConsent/CookieConsent'));
const Title = dynamic(() => import('@/components/common/Title/Title'));
const Paragraph = dynamic(() => import('@/components/common/Paragraph/Paragraph'));

const Home = () => {
  const { icons, featuresToUse, cta, whyChoose } = useHomeContent();

  return (
    <div className="overflow-hidden relative">
      <Carousel />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Title
            as="h2"
            text={whyChoose.title}
            subtitle={whyChoose.subtitle}
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresToUse.map((feature, index) => {
              const Icon = icons[feature.icon] || icons.Star;
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
                  <Paragraph text={feature.desc} className="text-gray-600" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-cyan-500">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title
              as="h2"
              text={cta.title}
              subtitle={cta.subtitle}
              align="center"
              className="text-white mb-8"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = cta.downloadUrl;
                link.download = 'kanakretail.pdf';
                link.click();
              }}
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 mx-auto hover:shadow-lg transition-all duration-300"
            >
              <span>{cta.button}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <CookieConsent />
    </div>
  );
};

export default Home;
