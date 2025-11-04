'use client';
import React from 'react';
import "@/lib/i18n/client";
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
const Title = dynamic(() => import('@/components/common/Title/Title'));
const Paragraph = dynamic(() => import('@/components/common/Paragraph/Paragraph'));

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
      title: t('about.values.mission.title'),
      desc: t('about.values.mission.desc'),
    },
    {
      icon: Eye,
      title: t('about.values.vision.title'),
      desc: t('about.values.vision.desc'),
    },
    {
      icon: Heart,
      title: t('about.values.passion.title'),
      desc: t('about.values.passion.desc'),
    },
    {
      icon: Zap,
      title: t('about.values.innovation.title'),
      desc: t('about.values.innovation.desc'),
    },
  ];

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Title
            text={t('about.title')}
            subtitle={t('about.subtitle')}
            as="h1"
            align="center"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Title
                text={t('about.story.title')}
                as="h2"
                align="left"
                className="mb-6"
              />
              <Paragraph
                text={t('about.story.paragraph1')}
                className="mb-6"
              />
              <Paragraph text={t('about.story.paragraph2')} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl object-cover w-full"
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
                className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {value.title}
                </h3>
                <Paragraph text={value.desc} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
