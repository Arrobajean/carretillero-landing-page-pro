// src/hooks/useHeroImages.ts
import { useEffect, useState } from "react";

// Hero images configuration with optimization support
// TODO: Replace with optimized versions once created
const heroImages = [
  {
    webp: "/images/landing/optimized/carretillero-landing-hero-optimized.webp",
    jpeg: "/images/landing/optimized/carretillero-landing-hero-optimized.jpg",
    fallback: "/images/landing/carretillero-landing-hero.jpg",
  },
  {
    webp: "/images/landing/optimized/carretillero-landing-hero2-optimized.webp",
    jpeg: "/images/landing/optimized/carretillero-landing-hero2-optimized.jpg",
    fallback: "/images/landing/carretillero-landing-hero2.jpg",
  },
  {
    webp: "/images/landing/optimized/carretillero-landing-hero3-optimized.webp",
    jpeg: "/images/landing/optimized/carretillero-landing-hero3-optimized.jpg",
    fallback: "/images/landing/carretillero-landing-hero3.jpg",
  },
];

// Temporary fallback for development - use original images until optimized versions are created
const fallbackImages = [
  "/images/landing/carretillero-landing-hero.jpg",
  "/images/landing/carretillero-landing-hero2.jpg",
  "/images/landing/carretillero-landing-hero3.jpg",
];

// Helper function to detect WebP support
function supportsWebP(): boolean {
  if (typeof window === "undefined") return false;

  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
}

// Helper function to get the best available image format
function getBestImageFormat(imageObj: (typeof heroImages)[0]): string {
  // Check if WebP is supported
  if (supportsWebP()) {
    return imageObj.webp;
  }

  // Check if optimized JPEG exists, otherwise use fallback
  return imageObj.jpeg || imageObj.fallback;
}

// Helper function to preload images
function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

export function useHeroImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload all hero images for better performance
    const preloadImages = async () => {
      try {
        const imagePromises = heroImages.map((imageObj) =>
          preloadImage(getBestImageFormat(imageObj))
        );
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.warn("Some hero images failed to preload:", error);
        setImagesLoaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Get optimized image URLs (fallback to original images for now)
  const optimizedImages = heroImages.map(getBestImageFormat);

  // Use fallback images for now until optimized versions are created
  const currentImages = fallbackImages;

  return {
    currentImageIndex,
    heroImages: currentImages,
    imagesLoaded,
  };
}
