"use client";
import { useState } from "react";

export const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return { isOpen, setIsOpen, toggleMenu };
};
