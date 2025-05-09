import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
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
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link 
            to="/" 
            onClick={scrollToTop} 
            className="text-xl md:text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
          >
            TuCarretillero
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cursos" className="text-gray-700 hover:text-primary transition-colors hidden md:block">
            Cursos
          </Link>
          <button 
            onClick={scrollToContact} 
            className={cn(
              "bg-accent hover:bg-accent/90 text-white font-medium rounded-md transition-all",
              isScrolled ? "py-2 px-5 text-sm" : "py-3 px-6"
            )}
          >
            Contáctanos
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
