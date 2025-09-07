import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useHeroImages } from "@/hooks/useHeroImages";
import { scrollToSection } from "@/utils/scrollToSection";

const HeroSection = () => {
  const { currentImageIndex, heroImages, imagesLoaded } = useHeroImages();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fondo con transición */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              imagesLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
              opacity: index === currentImageIndex && imagesLoaded ? 1 : 0,
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        {/* Loading placeholder */}
        {!imagesLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
        )}
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-16 sm:pt-24 pb-12 sm:pb-20 text-center md:text-left">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Curso de carretillero presencial por{" "}
            <span className="text-accent">50€ todo incluido</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-200 mb-3"
          >
            Centros propios en Madrid y Murcia. Formación teórica y práctica con
            carnet válido para <strong>5 máquinas</strong>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xs sm:text-sm md:text-base text-gray-300 mb-8"
          >
            Cumplimos <strong className="text-white">10 años</strong> sin subir
            el precio. Apoyamos a nuestros clientes sin renunciar a la calidad
            que nos reconoce la norma{" "}
            <strong className="text-white">UNE 58451</strong> y{" "}
            <strong className="text-white">UNE 58923</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("cta-section")}
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-medium"
            >
              Solicitar información
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              onClick={() => scrollToSection("courses-section")}
              className="w-full sm:w-auto bg-white/10 text-white border border-white hover:bg-white/20"
            >
              Ver cursos disponibles
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
