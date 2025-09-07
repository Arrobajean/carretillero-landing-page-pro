import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeaderProps {
  variant?: "default" | "black";
}

const Header = ({ variant = "default" }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("cta-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        variant === "black"
          ? "bg-black shadow-md py-6"
          : isScrolled
          ? "bg-white shadow-md py-6"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            onClick={scrollToTop}
            className={cn(
              "text-xl md:text-2xl font-bold transition-colors",
              variant === "black"
                ? "text-white hover:text-gray-200"
                : isScrolled
                ? "text-black hover:text-gray-800"
                : "text-white hover:text-gray-200"
            )}
          >
            TuCarretillero
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            to="/cursos"
            className="hidden md:inline-block py-2 px-5 text-sm font-medium rounded-md shadow-sm transition-all bg-accent text-white hover:bg-accent/90"
          >
            Cursos
          </Link>
          <button
            onClick={scrollToContact}
            className="py-2 px-5 text-sm font-medium rounded-md shadow-sm transition-all bg-accent text-white hover:bg-accent/90"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
