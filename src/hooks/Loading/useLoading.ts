"use client";
import { useEffect, useState } from "react";

export const useLoading = (delay = 200) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return { isLoading };
};
