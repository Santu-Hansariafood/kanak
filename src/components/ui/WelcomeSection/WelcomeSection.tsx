"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion } from "framer-motion";

const WelcomeHeading = dynamic(() => import("@/components/common/WelcomeHeading/WelcomeHeading"), { ssr: false });
const ProductImage = dynamic(() => import("@/components/common/ProductImage/ProductImage"), { ssr: false });
const ContactInfo = dynamic(() => import("@/components/common/ContactInfo/ContactInfo"), { ssr: false });

export default function WelcomeSection() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <section className="relative flex flex-col items-center justify-center px-6 py-12 min-h-[80vh] overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            background: "radial-gradient(circle at 60% 40%, #e8f5e9 0%, #7BC043 60%, #021A13 100%)"
          }}
        />
        {/* Floating Decorative Circles */}
        <motion.div
          className="absolute left-10 top-10 w-32 h-32 rounded-full bg-[#7BC043]/30 blur-2xl -z-10"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-16 bottom-16 w-40 h-40 rounded-full bg-[#021A13]/20 blur-3xl -z-10"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        {/* Section Content Animation */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <WelcomeHeading />
          <ProductImage />
          <ContactInfo />
        </motion.div>
      </section>
    </Suspense>
  );
}
