"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <div className="relative w-full flex justify-center items-center py-16 overflow-hidden bg-gradient-to-b from-green-50 dark:from-gray-900 via-white dark:via-gray-950 to-green-100 dark:to-black">
      <motion.div
        className="absolute inset-0 z-0 opacity-30 dark:opacity-20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(100,255,180,0.2), transparent 70%), radial-gradient(circle at 70% 70%, rgba(255,220,150,0.2), transparent 70%)",
          backgroundSize: "200% 200%",
        }}
      />

      <motion.div
        className="relative max-w-6xl w-full mx-auto bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-green-100 dark:border-gray-800 text-center space-y-10 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="absolute top-6 left-6 w-16 h-16 md:w-20 md:h-20 opacity-80"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Image
            src="/logo/logo1.png"
            alt="Logo 1"
            width={80}
            height={80}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          className="absolute top-6 right-6 w-16 h-16 md:w-20 md:h-20 opacity-80"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        >
          <Image
            src="/logo/logo2.png"
            alt="Logo 2"
            width={80}
            height={80}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-500 via-amber-400 to-green-700 bg-clip-text text-transparent drop-shadow-lg tracking-tight dark:from-green-300 dark:via-yellow-400 dark:to-green-500">
          Contact Kanak Retail
        </h2>

        <div className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl py-3 px-5 shadow hover:shadow-lg transition"
          >
            <span className="text-2xl">📞</span>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Phone:
            </span>
            <a
              href="tel:+919830433535"
              className="underline underline-offset-2 text-green-700 dark:text-green-400 font-semibold hover:text-green-900 dark:hover:text-green-300 transition-colors"
            >
              +91 98304 33535
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a
              href="tel:+919445501234"
              className="underline underline-offset-2 text-green-700 dark:text-green-400 font-semibold hover:text-green-900 dark:hover:text-green-300 transition-colors"
            >
              +91 94455 01234
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl py-3 px-5 shadow hover:shadow-lg transition"
          >
            <span className="text-2xl">📧</span>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Email:
            </span>
            <a
              href="mailto:purchase@kanakretail.com"
              className="underline underline-offset-2 text-green-700 dark:text-green-400 font-semibold hover:text-green-900 dark:hover:text-green-300 transition-colors"
            >
              purchase@kanakretail.com
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a
              href="mailto:sales@kanakretail.com"
              className="underline underline-offset-2 text-green-700 dark:text-green-400 font-semibold hover:text-green-900 dark:hover:text-green-300 transition-colors"
            >
              sales@kanakretail.com
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl py-3 px-5 shadow hover:shadow-lg transition"
          >
            <span className="text-2xl">🌍</span>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Website:
            </span>
            <a
              href="https://kanakretail.com"
              className="underline underline-offset-2 text-green-700 dark:text-green-400 font-semibold hover:text-green-900 dark:hover:text-green-300 transition-colors"
            >
              kanakretail.com
            </a>
          </motion.div>
        </div>
        <div className="relative mt-12 flex flex-col items-center space-y-12">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative w-full max-w-xl p-6 rounded-2xl bg-gradient-to-r from-green-100 via-white to-amber-100 dark:from-green-900 dark:via-gray-800 dark:to-amber-900 shadow-lg border border-green-200 dark:border-green-800 text-center"
          >
            <h3 className="text-xl font-bold text-green-800 dark:text-green-300">
              🏢 Head Office
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm leading-relaxed">
              Primarc Square, Plot No.1, Salt Lake Bypass, LA Block, Sector: 3,
              Bidhannagar, Kolkata, West Bengal 700098
            </p>
          </motion.div>
          <motion.svg
            width="4"
            height="60"
            viewBox="0 0 4 60"
            className="text-green-400 dark:text-green-600"
          >
            <motion.rect
              width="4"
              height="60"
              rx="2"
              fill="currentColor"
              initial={{ height: 0 }}
              animate={{ height: 60 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </motion.svg>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {[
              {
                title: "Registered Office",
                address:
                  "207, Maharshi Debendra Rd, Room no - 111, 6th Floor, Burra Bazar, Kolkata, West Bengal 700007, India",
              },
              {
                title: "Chennai Office",
                address:
                  "G5, Mahalakshmi Flats, 26 Tank Bund Road, Nungambakkam Chennai 600034",
              },
              {
                title: "Pack Office",
                address:
                  "1/612, Kothapulli Village, Reddiyachatram, Dindugal, Tamilnadu - 624622",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                }}
                className="relative p-5 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md border border-amber-100 dark:border-amber-800 text-center transition"
              >
                <h4 className="font-bold text-lg text-amber-800 dark:text-amber-300">
                  🏢 {item.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mt-2">
                  {item.address}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
