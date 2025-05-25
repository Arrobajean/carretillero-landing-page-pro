import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useHeroImages } from "@/hooks/useHeroImages";
import { scrollToSection } from "@/utils/scrollToSection";

const HeroSection = () => {
  const { currentImageIndex, heroImages } = useHeroImages();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background con transición */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20 md:pt-0">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Formación profesional en carretillas y maquinaria
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-200 mb-8"
          >
            Especialistas en capacitación para operarios de maquinaria con
            certificación oficial. Cursos prácticos con instructores expertos y
            la mejor relación calidad-precio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("cta-section")}
              className="bg-accent hover:bg-accent/90 text-white font-medium"
            >
              Solicitar información
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/20"
              asChild
            >
              <a href="#cursos-section">Ver cursos disponibles</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
