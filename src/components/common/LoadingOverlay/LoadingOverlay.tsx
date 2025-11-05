"use client";
import { motion } from "framer-motion";
import React from "react";

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/90 backdrop-blur-md z-[9999]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-12 h-12 border-4 border-t-teal-500 border-gray-300 rounded-full shadow-md"
      />
    </div>
  );
};

export default LoadingOverlay;
