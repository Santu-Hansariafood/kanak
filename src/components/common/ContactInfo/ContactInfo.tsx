"use client";

import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <motion.div
      className="max-w-md mx-auto bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] rounded-2xl shadow-xl p-6 md:p-8 border border-green-200 text-sm sm:text-base md:text-lg text-[var(--color-foreground)] text-center space-y-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ scale: 1.04, boxShadow: "0 4px 24px #7BC04333" }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center justify-center gap-3 bg-white/80 rounded-lg py-3 px-4 shadow-sm hover:bg-[#f4fff7]"
      >
        <span className="text-2xl">📞</span>
        <span className="font-bold text-gray-700">Phone:</span>
        <a href="tel:+919876543210" className="underline underline-offset-2 text-green-700 font-semibold hover:text-green-900 transition-colors">
          +91 98765 43210
        </a>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.04, boxShadow: "0 4px 24px #7BC04333" }}
        transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
        className="flex items-center justify-center gap-3 bg-white/80 rounded-lg py-3 px-4 shadow-sm hover:bg-[#f4fff7]"
      >
        <span className="text-2xl">📧</span>
        <span className="font-bold text-gray-700">Email:</span>
        <a href="mailto:purchase@kanakretail.com" className="underline underline-offset-2 text-green-700 font-semibold hover:text-green-900 transition-colors">
        purchase@kanakretail.com
        </a>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.04, boxShadow: "0 4px 24px #7BC04333" }}
        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
        className="flex items-center justify-center gap-3 bg-white/80 rounded-lg py-3 px-4 shadow-sm hover:bg-[#f4fff7]"
      >
        <span className="text-2xl">🌍</span>
        <span className="font-bold text-gray-700">Website:</span>
        <a href="https://kanakretail.com" className="underline underline-offset-2 text-green-700 font-semibold hover:text-green-900 transition-colors">
          kanakretail.com
        </a>
      </motion.div>
    </motion.div>
  );
}
