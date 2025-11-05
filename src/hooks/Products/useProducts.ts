import { useTranslation } from "react-i18next";

export interface Product {
  image: string;
  title: string;
  description: string;
  features: string[];
  price: string;
}

export const useProducts = () => {
  const { t } = useTranslation("products");

  const products: Product[] = [
    {
      image: "/images/millets.webp",
      title: t("grains.title"),
      description: t("grains.description"),
      features: t("grains.features", { returnObjects: true }) as string[],
      price: t("grains.price"),
    },
    {
      image: "/images/spices.webp",
      title: t("spices.title"),
      description: t("spices.description"),
      features: t("spices.features", { returnObjects: true }) as string[],
      price: t("spices.price"),
    },
    {
      image: "/images/millets.webp",
      title: t("rawMillet.title"),
      description: t("rawMillet.description"),
      features: t("rawMillet.features", { returnObjects: true }) as string[],
      price: t("rawMillet.price"),
    },
    {
      image: "/images/millets.webp",
      title: t("pulsesBeans.title"),
      description: t("pulsesBeans.description"),
      features: t("pulsesBeans.features", { returnObjects: true }) as string[],
      price: t("pulsesBeans.price"),
    },
    {
      image: "/images/dryfrouts.webp",
      title: t("dryFruits.title"),
      description: t("dryFruits.description"),
      features: t("dryFruits.features", { returnObjects: true }) as string[],
      price: t("dryFruits.price"),
    },
    {
      image: "/images/flours.webp",
      title: t("flours.title"),
      description: t("flours.description"),
      features: t("flours.features", { returnObjects: true }) as string[],
      price: t("flours.price"),
    },
    {
      image: "/images/vermicelli.webp",
      title: t("vermicelli.title"),
      description: t("vermicelli.description"),
      features: t("vermicelli.features", { returnObjects: true }) as string[],
      price: t("vermicelli.price"),
    },
    {
      image: "/images/suger.webp",
      title: t("sugar.title"),
      description: t("sugar.description"),
      features: t("sugar.features", { returnObjects: true }) as string[],
      price: t("sugar.price"),
    },
    {
      image: "/images/aplam.webp",
      title: t("others.title"),
      description: t("others.description"),
      features: t("others.features", { returnObjects: true }) as string[],
      price: t("others.price"),
    },
  ];

  return { products, t };
};
