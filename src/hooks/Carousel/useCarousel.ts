import { useEffect, useState } from "react";

interface Slide {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}

export const useCarousel = (slides?: Slide[], interval: number = 5000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides, interval]);

  const nextSlide = () => {
    if (slides && slides.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (slides && slides.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const goToSlide = (index: number) => {
    if (slides && slides.length > 0) {
      setCurrentSlide(index % slides.length);
    }
  };

  const current = slides && slides.length > 0 ? slides[currentSlide] : null;

  return { currentSlide, current, nextSlide, prevSlide, goToSlide };
};
