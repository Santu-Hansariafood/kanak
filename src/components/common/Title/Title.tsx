'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface TitleProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  text,
  as = 'h1',
  subtitle,
  align = 'center',
  className = '',
}) => {
  const HeadingTag = as;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`text-${align} mb-10 ${className}`}
    >
      <HeadingTag
        className={`
          font-bold tracking-tight 
          ${as === 'h1' ? 'text-4xl sm:text-5xl lg:text-6xl' : as === 'h2' ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl lg:text-3xl'}
          text-gray-900 dark:text-gray-100
        `}
      >
        {text}
      </HeadingTag>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default Title;
