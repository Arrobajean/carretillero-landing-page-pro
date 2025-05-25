// src/hooks/useHeroImages.ts
import { useEffect, useState } from "react";

const heroImages = [
  "/images/landing/carretillero-landing-hero.jpg",
  "/images/landing/carretillero-landing-hero2.jpg",
  "/images/landing/carretillero-landing-hero3.jpg",
];

export function useHeroImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return {
    currentImageIndex,
    heroImages,
  };
}
