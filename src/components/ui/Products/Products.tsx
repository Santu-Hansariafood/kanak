'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useProducts } from "@/hooks/Products/useProducts";

const Title = dynamic(() => import("@/components/common/Title/Title"));
const Paragraph = dynamic(() => import("@/components/common/Paragraph/Paragraph"));

const Products: React.FC = () => {
  const { products, t } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <div className="pt-16 dark:bg-gray-900 transition-colors">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Title
            text={t("title")}
            subtitle={t("subtitle")}
            as="h1"
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, visibleCount).map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group cursor-pointer"
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
                <Title text={product.title} as="h2" align="center" className="mb-3" />
                <Paragraph text={product.description} className="text-center" />
              </motion.div>
            ))}
          </div>

          {visibleCount < products.length && (
            <div className="text-center mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setVisibleCount(products.length)}
                className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                {t("showMore") || "Show More"}
              </motion.button>
            </div>
          )}
        </div>
      </section>

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
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-4xl w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-2xl font-bold"
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
                  <Title text={selectedProduct.title} as="h2" align="left" className="mb-3" />
                  <Paragraph text={selectedProduct.description} className="mb-4" />

                  <Title
                    text={t("keyFeatures")}
                    as="h2"
                    align="left"
                    className="mb-2 text-xl sm:text-2xl"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                    {selectedProduct.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-600 dark:text-gray-300 text-sm"
                      >
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Paragraph
                    text={selectedProduct.price}
                    className="text-lg font-semibold text-teal-600 mt-4"
                  />
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
