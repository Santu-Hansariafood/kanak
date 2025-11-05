import { useTranslation } from 'react-i18next';
import { Target, Eye, Heart, Zap } from 'lucide-react';

export const useAboutValues = () => {
  const { t } = useTranslation("about");

  const values = [
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

  return { values, t };
};
