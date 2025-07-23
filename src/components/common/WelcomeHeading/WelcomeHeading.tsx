"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import TrueFocus from "@/components/animations/TrueFocus/TrueFocus";
import { useCategoryToggle } from "@/hooks/useCategoryToggle";

const categories = [
  { title: "Spices", items: ["Turmeric", "Cummin (Jeera)", "Fennel (Souf)", "Fenugrik", "Mustard (Micro / Bold)", "Clove, Cinamon, Asafodeia", "Cardamom, Chili, Corainder, Peper", "Star Seed, Bay Leaf, Jaipatree", "Marathi Moggu, Poppy Seed"] },
  { title: "Pulses", items: ["Tor Dhall, Urid Dhall, Moong Dhall", "Chana Dhall, Kabul Chana, Desi Chana", "Black Gram Split"] },
  { title: "Dry Fruits", items: ["Cashew, Almond, Raisin - Green", "Black Dry Grapes"] },
  { title: "Flour", items: ["Rice, Wheat, Maida, Rava, Corn", "Besan, Momos, IDLY RAVA MIX"] },
  { title: "Vermicelli", items: ["Roasted, Raghi, Barnyard", "Other Millets Vermicelli -3"] },
  { title: "Raw Millets", items: ["Jowar, Chena/Barri, Bajra", "Foxtail, Ragi, Korle, Sanwa", "Little Millet (Moraiyo)"] },
  { title: "Organic Whole Grain Rice", items: ["Red Rice, Brown Rice, Black Rice"] },
  { title: "Oil – Country Natural Oils", items: ["Groundnut, Sesame, Coconut", "Mustard, Pooja Oil, Castrol Oil"] },
  { title: "Sugar & Ready to Mix", items: ["Jaggary Powder", "Badam Mix Powder"] },
];

export default function WelcomeHeading() {
  const { toggleIndex, isOpen } = useCategoryToggle();

  return (
    <motion.div
      className="relative text-center mb-12 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute left-1/3 top-0 w-72 h-72 bg-green-400/30 dark:bg-green-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-0 w-80 h-80 bg-yellow-400/20 dark:bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
      </motion.div>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="relative inline-block px-10 py-4 rounded-3xl bg-white/40 dark:bg-black/40 shadow-xl backdrop-blur-md border border-green-300/50 dark:border-green-500/30 overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-glossy-move" />
          <TrueFocus
            sentence="Welcome To Kanak Retail"
            manualMode={false}
            blurAmount={5}
            borderColor="green"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto rounded-2xl shadow-2xl p-8 sm:p-10 border border-green-200/30 dark:border-green-600/20 backdrop-blur-xl bg-white/60 dark:bg-gray-900/60"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <p className="text-2xl md:text-3xl font-extrabold text-green-900 dark:text-green-200 mb-6 text-center drop-shadow-lg">
          Explore Our Wide Range of <span className="text-green-600 dark:text-green-400">Natural & Organic</span> Products
        </p>

        <div className="space-y-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="rounded-xl overflow-hidden shadow-md bg-white/70 dark:bg-gray-800/60 backdrop-blur border border-green-100/30 dark:border-green-700/30"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <button
                className={`w-full flex items-center justify-between px-6 py-4 text-lg sm:text-xl font-bold text-green-800 dark:text-green-300 relative group transition-all duration-300`}
                onClick={() => toggleIndex(idx)}
                aria-expanded={isOpen(idx)}
              >
                <span className="relative z-10">{cat.title}</span>
                <span
                  className={`ml-2 transition-transform duration-300 ${
                    isOpen(idx) ? "rotate-90" : "rotate-0"
                  }`}
                >
                  ▶
                </span>

                <span className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                  <span className="block w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl animate-glossy-move" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen(idx) && (
                  <motion.ul
                    className="px-4 sm:px-8 pb-6 pt-2 text-base sm:text-lg text-gray-700 dark:text-gray-300 space-y-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {cat.items.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 pl-2 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes glossy-move {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        .animate-glossy-move {
          animation: glossy-move 3s linear infinite;
        }
      `}</style>
    </motion.div>
  );
}
