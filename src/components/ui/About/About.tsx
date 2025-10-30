'use client';
import React from 'react';
import "@/lib/i18n/client";
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ValueItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const About: React.FC = () => {
  const { t } = useTranslation("about");

  const values: ValueItem[] = [
    {
      icon: Target,
      title: t('values.mission.title'),
      desc: t('values.mission.desc'),
    },
    {
      icon: Eye,
      title: t('values.vision.title'),
      desc: t('values.vision.desc'),
    },
    {
      icon: Heart,
      title: t('values.passion.title'),
      desc: t('values.passion.desc'),
    },
    {
      icon: Zap,
      title: t('values.innovation.title'),
      desc: t('values.innovation.desc'),
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('story.title')}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('story.paragraph1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('story.paragraph2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
