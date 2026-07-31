"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useProducts } from "@/hooks/Products/useProducts";

const Title = dynamic(() => import("@/components/common/Title/Title"));
const Paragraph = dynamic(
  () => import("@/components/common/Paragraph/Paragraph"),
);

const Products: React.FC = () => {
  const { products, t } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleInquiry = (productTitle: string) => {
    const subject = encodeURIComponent(`Inquiry about ${productTitle}`);
    const body = encodeURIComponent(
      `Hello,\n\nI am interested in learning more about ${productTitle}.\n\nPlease provide more details regarding pricing and availability.`,
    );
    window.location.href = `mailto:selles@kanakretail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-20 pb-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors relative overflow-hidden">
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <section className="px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold tracking-widest uppercase mb-4 border border-teal-500/20">
                {t("badge") || "Discover Excellence"}
              </span>
            </motion.div>

            <Title
              text={t("title")}
              subtitle={t("subtitle")}
              as="h1"
              align="center"
              className="mb-6"
            />
          </div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {products.slice(0, visibleCount).map((product, index) => (
                <motion.div
                  layout
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-5 border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-2xl hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div>
                    {/* Image Container */}
                    <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 relative bg-gray-100 dark:bg-gray-900">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                      {product.price && (
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-white/10 shadow-lg">
                          {product.price}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="px-2">
                      <Title
                        text={product.title}
                        as="h2"
                        align="left"
                        className="mb-2 text-lg font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
                      />
                      <Paragraph
                        text={product.description}
                        className="text-sm line-clamp-2 text-gray-500 dark:text-gray-400 mb-4"
                      />
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-2 pt-4 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                    <span className="text-xs font-medium text-teal-600 dark:text-teal-400 group-hover:underline flex items-center gap-1">
                      View Details &rarr;
                    </span>
                    <div className="w-8 h-8 rounded-full bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Show More Button */}
          {visibleCount < products.length && (
            <div className="text-center mt-16">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setVisibleCount(products.length)}
                className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300"
              >
                {t("showMore") || "Explore All Products"}
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* Modern Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 sm:p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-10 max-w-4xl w-full relative shadow-2xl border border-gray-200 dark:border-gray-800 my-auto"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition-colors text-xl font-bold z-10"
              >
                &times;
              </button>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Modal Product Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-md aspect-square bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Modal Details Info */}
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <Title
                      text={selectedProduct.title}
                      as="h2"
                      align="left"
                      className="mb-2 text-2xl font-bold"
                    />
                    <Paragraph
                      text={selectedProduct.description}
                      className="mb-6 text-gray-600 dark:text-gray-300"
                    />

                    {selectedProduct.features &&
                      selectedProduct.features.length > 0 && (
                        <>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
                            {t("keyFeatures") || "Key Highlights"}
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            {selectedProduct.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-gray-700 dark:text-gray-200 text-sm bg-gray-50 dark:bg-gray-800/50 p-2.5 rounded-xl border border-gray-100 dark:border-gray-800"
                              >
                                <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0" />
                                <span className="truncate">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                  </div>

                  <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between mt-4">
                    <div>
                      <span className="block text-xs text-gray-400 uppercase font-medium">
                        Price
                      </span>
                      <span className="text-2xl font-black text-teal-600 dark:text-teal-400">
                        {selectedProduct.price || "Contact Us"}
                      </span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleInquiry(selectedProduct.title)}
                      className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-teal-500/20 transition-all text-sm"
                    >
                      {t("inquireNow") || "Inquire Now"}
                    </motion.button>
                  </div>
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
