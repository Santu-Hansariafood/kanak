"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface Product {
  image: string;
  title: string;
  description: string;
  features: string[];
  price: string;
}

const Products: React.FC = () => {
  const { t } = useTranslation("products");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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

  const [visibleCount, setVisibleCount] = useState(4);

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
              {t("title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, visibleCount).map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="w-full h-56 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-center">{product.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {visibleCount < products.length && (
            <div className="text-center mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setVisibleCount(products.length)}
                className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Show More
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-4xl w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold"
              >
                &times;
              </button>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    width={500}
                    height={400}
                    className="rounded-2xl object-cover w-full h-80"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    {selectedProduct.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {selectedProduct.description}
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t("keyFeatures")}
                  </h4>

                  {/* Two-column features list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                    {selectedProduct.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-600 text-sm"
                      >
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <p className="text-lg font-semibold text-teal-600 mt-4">
                    {selectedProduct.price}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
