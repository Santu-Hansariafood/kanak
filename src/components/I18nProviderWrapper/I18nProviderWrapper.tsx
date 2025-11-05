"use client";
import React, { Suspense } from "react";
import "@/lib/i18n/client";
import { motion } from "framer-motion";
import { useLoading } from "@/hooks/Loading/useLoading";
import LoadingOverlay from "@/components/common/LoadingOverlay/LoadingOverlay";

const I18nProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useLoading(300);

  return (
    <Suspense fallback={<LoadingOverlay />}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-gray-100"
      >
        {isLoading ? <LoadingOverlay /> : children}
      </motion.div>
    </Suspense>
  );
};

export default I18nProviderWrapper;
