'use client';

import React from 'react';
import "@/lib/i18n/client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useAboutValues } from '@/hooks/About/useAboutValues';

const Title = dynamic(() => import('@/components/common/Title/Title'));
const Paragraph = dynamic(() => import('@/components/common/Paragraph/Paragraph'));

const About: React.FC = () => {
  const { values, t } = useAboutValues();

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
              <Paragraph text={t('about.story.paragraph1')} className="mb-6" />
              <Paragraph text={t('about.story.paragraph2')} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[400px] lg:h-[500px]"
            >
              <Image
                src="/about/about.webp"
                alt="Team collaboration at Kanak Retail"
                fill
                priority
                className="rounded-2xl shadow-2xl object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
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
