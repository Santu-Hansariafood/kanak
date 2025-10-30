"use client";
import React from "react";
import "@/lib/i18n/client";

const I18nProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default I18nProviderWrapper;
