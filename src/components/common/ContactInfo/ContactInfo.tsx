"use client";

import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <motion.div
      className="max-w-2xl w-full mx-auto bg-gradient-to-br from-[#e8f5e9] to-[#fffde7] rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-green-200 text-base md:text-lg text-[var(--color-foreground)] text-center space-y-7"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      <h2 className="text-2xl md:text-3xl font-extrabold mb-2 bg-gradient-to-r from-green-400 via-amber-400 to-green-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
        Contact Kanak Retail
      </h2>
      <motion.div
        whileHover={{ scale: 1.05, boxShadow: "0 4px 24px #7BC04333" }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/90 rounded-lg py-3 px-4 shadow-sm hover:bg-[#f4fff7]"
      >
        <span className="text-2xl">📞</span>
        <span className="font-bold text-gray-700">Phone:</span>
        <a href="tel:+919876543210" className="underline underline-offset-2 text-green-700 font-semibold hover:text-green-900 transition-colors">
          +91 98765 43210
        </a>
        <span className="hidden sm:inline text-gray-400">|</span>
        <a href="tel:+919812345678" className="underline underline-offset-2 text-green-700 font-semibold hover:text-green-900 transition-colors">
          +91 98123 45678
        </a>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05, boxShadow: "0 4px 24px #7BC04333" }}
        transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/90 rounded-lg py-3 px-4 shadow-sm hover:bg-[#f4fff7]"
      >
        <span className="text-2xl">📧</span>
        <span className="font-bold text-gray-700">Email:</span>
        <a href="mailto:purchase@kanakretail.com" className="underline underline-offset-2 text-green-700 font-semibold hover:text-green-900 transition-colors">
          purchase@kanakretail.com
        </a>
        <span className="hidden sm:inline text-gray-400">|</span>
        <a href="mailto:sales@kanakretail.com" className="underline underline-offset-2 text-green-700 font-semibold hover:text-green-900 transition-colors">
          sales@kanakretail.com
        </a>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05, boxShadow: "0 4px 24px #7BC04333" }}
        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
        className="flex items-center justify-center gap-3 bg-white/90 rounded-lg py-3 px-4 shadow-sm hover:bg-[#f4fff7]"
      >
        <span className="text-2xl">🌍</span>
        <span className="font-bold text-gray-700">Website:</span>
        <a href="https://kanakretail.com" className="underline underline-offset-2 text-green-700 font-semibold hover:text-green-900 transition-colors">
          kanakretail.com
        </a>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03, boxShadow: "0 2px 16px #FFC10733" }}
        transition={{ type: "spring", stiffness: 250, delay: 0.3 }}
        className="flex flex-col items-center justify-center gap-2 bg-amber-50/80 rounded-lg py-4 px-5 shadow-inner border border-amber-200 mt-2"
      >
        <span className="text-2xl">🏢</span>
        <span className="font-bold text-gray-700">Head Office Address:</span>
        <span className="text-gray-700 font-medium">
        Primarc Square, Plot No.1, Salt Lake Bypass, LA Block, Sector: 3, Bidhannagar, Kolkata, West Bengal 700098
        </span>
      </motion.div>
    </motion.div>
  );
}
