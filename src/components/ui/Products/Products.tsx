"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Monitor, Cloud, Shield, Zap, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation("products");

  // ✅ Define products INSIDE component (so `t()` works)
  const products = [
    {
      icon: Smartphone,
      title: t("mobile.title"),
      description: t("mobile.description"),
      features: t("mobile.features", { returnObjects: true }),
      price: t("mobile.price"),
    },
    {
      icon: Monitor,
      title: t("web.title"),
      description: t("web.description"),
      features: t("web.features", { returnObjects: true }),
      price: t("web.price"),
    },
    {
      icon: Cloud,
      title: t("cloud.title"),
      description: t("cloud.description"),
      features: t("cloud.features", { returnObjects: true }),
      price: t("cloud.price"),
    },
    {
      icon: Shield,
      title: t("security.title"),
      description: t("security.description"),
      features: t("security.features", { returnObjects: true }),
      price: t("security.price"),
    },
    {
      icon: Zap,
      title: t("performance.title"),
      description: t("performance.description"),
      features: t("performance.features", { returnObjects: true }),
      price: t("performance.price"),
    },
    {
      icon: Cpu,
      title: t("ai.title"),
      description: t("ai.description"),
      features: t("ai.features", { returnObjects: true }),
      price: t("ai.price"),
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
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
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="w-8 h-8 text-white" />
                </div>

                {/* Product Info */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {t("keyFeatures")}
                  </h4>
                  <ul className="space-y-2">
  {(Array.isArray(product.features) ? product.features : []).map(
    (feature: string, idx: number) => (
      <li key={idx} className="flex items-center text-gray-600">
        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3" />
        {feature}
      </li>
    )
  )}
</ul>

                </div>

                {/* Price & Button */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-lg font-semibold text-teal-600 mb-4">
                    {product.price}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    {t("learnMore")}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
