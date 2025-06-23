import { useState, useCallback } from "react";

export const useCategoryToggle = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleIndex = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }, []);

  const isOpen = useCallback(
    (index: number) => openIndex === index,
    [openIndex]
  );

  return { openIndex, toggleIndex, isOpen };
};
