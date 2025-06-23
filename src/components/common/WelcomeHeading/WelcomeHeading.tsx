"use client";

import { motion, AnimatePresence } from "framer-motion";
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
      className="relative text-center mb-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <div className="absolute left-1/4 top-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-60 animate-pulse" />
      </motion.div>

      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="inline-block px-8 py-3 rounded-2xl bg-white shadow-xl border border-green-300 relative overflow-hidden">
          <span className="absolute inset-0 bg-white opacity-30 blur-lg pointer-events-none animate-pulse" />
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
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-green-200 text-left backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <p className="text-2xl md:text-3xl font-extrabold text-green-800 mb-6 text-center drop-shadow">
          Explore Our Wide Range of Natural & Organic Products
        </p>

        <div className="space-y-4">
          {categories.map((cat, idx) => (
            <div key={cat.title} className="rounded-xl overflow-hidden shadow-md bg-white/70 backdrop-blur border border-green-100">
              <button
                className={`w-full flex items-center justify-between px-6 py-4 text-xl font-bold text-green-800 transition-all duration-300 focus:outline-none relative group ${isOpen(idx) ? "bg-green-100" : "bg-white"}`}
                onClick={() => toggleIndex(idx)}
                aria-expanded={isOpen(idx)}
              >
                <span className="relative z-10">
                  <span className="inline-block text-green-800 drop-shadow-lg">
                    {cat.title}
                  </span>
                </span>
                <span className={`ml-2 transition-transform duration-300 ${isOpen(idx) ? "rotate-90" : "rotate-0"}`}>▶</span>
                <span className="absolute left-0 top-0 w-full h-full pointer-events-none">
                  <span className="block w-1/3 h-full bg-white opacity-20 blur-xl animate-glossy-shine" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen(idx) && (
                  <motion.ul
                    className="px-8 pb-6 pt-2 text-lg text-gray-700 space-y-1"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {cat.items.map((item, i) => (
                      <li key={i} className="list-disc list-inside">{item}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes glossy-shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        .animate-glossy-shine {
          animation: glossy-shine 2.5s linear infinite;
        }
      `}</style>
    </motion.div>
  );
}
