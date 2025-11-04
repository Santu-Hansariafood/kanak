'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ParagraphProps {
  text: string;
  className?: string;
  delay?: number;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, className = '', delay = 0 }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg ${className}`}
    >
      {text}
    </motion.p>
  );
};

export default Paragraph;
