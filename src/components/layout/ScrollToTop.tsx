import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Start every page at the top: React Router keeps the previous scroll position otherwise.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
