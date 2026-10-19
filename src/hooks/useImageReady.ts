import { useEffect, useState } from "react";

// Tells whether an image has finished loading, so a skeleton can cover it until then.
// A failed load also counts as ready, so the skeleton never stays on screen forever.
export function useImageReady(src?: string) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!src) return;

    let isActive = true;
    const img = new Image();
    setIsReady(false);

    img.onload = () => {
      if (isActive) setIsReady(true);
    };
    img.onerror = () => {
      if (isActive) setIsReady(true);
    };
    img.src = src;

    return () => {
      isActive = false;
    };
  }, [src]);

  return isReady;
}
