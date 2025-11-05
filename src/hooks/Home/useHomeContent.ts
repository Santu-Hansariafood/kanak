'use client';

import { useTranslation } from 'react-i18next';
import { Star, Users, Globe, Award } from 'lucide-react';

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export const useHomeContent = () => {
  const { t } = useTranslation('home');

  // Fetch features from translation JSON
  const features = t('home.features', { returnObjects: true }) as Feature[];

  // Define available icons
  const icons: Record<string, React.ElementType> = {
    Star,
    Users,
    Globe,
    Award,
  };

  // Fallback content in case translation is missing
  const fallbackFeatures: Feature[] = [
    { icon: 'Star', title: 'Excellence', desc: 'Delivering top-quality solutions that exceed expectations' },
    { icon: 'Users', title: 'Expert Team', desc: 'Skilled professionals dedicated to your success' },
    { icon: 'Globe', title: 'Global Reach', desc: 'Serving clients worldwide with 24/7 support' },
    { icon: 'Award', title: 'Award Winning', desc: 'Recognized for innovation and customer satisfaction' },
  ];

  const featuresToUse = Array.isArray(features) && features.length > 0 ? features : fallbackFeatures;

  const cta = {
    title: t('home.cta.title', 'Ready to Get Started?'),
    subtitle: t('home.cta.subtitle', 'Join us and take your business to the next level.'),
    button: t('home.cta.button', 'Explore Our Product'),
    downloadUrl: '/download/kanak_retail.pdf',
  };

  const whyChoose = {
    title: t('home.whyChoose.title', 'Why Choose Us'),
    subtitle: t('home.whyChoose.subtitle', 'We deliver excellence with every project.'),
  };

  return {
    t,
    icons,
    featuresToUse,
    cta,
    whyChoose,
  };
};
