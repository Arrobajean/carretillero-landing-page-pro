
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("cta-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/+34600000000?text=Hola, estoy interesado en el curso de carretillero. ¿Podrían darme más información?",
      "_blank"
    );
  };

  return (
    <section id="hero-section" className="flex items-center justify-center bg-primary min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80 z-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }} 
      ></div>
      
      <div className="container-section flex flex-col items-center justify-center text-center relative z-20 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Curso de Carretillero por sólo 50€ ¡en un solo día!
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Aprende y practica en nuestros más de 2000 m² de instalaciones.
            Obtén tu carnet de carretillero oficial al mejor precio, en sólo un día y sin pagar nada por adelantado.
          </p>

          <div className="space-y-6 mb-12 text-white/90">
            <p className="text-lg">
              Curso 100% presencial como exige el Artículo 19 del Real Decreto Ley de Prevención de Riesgos Laborales.
            </p>
            <p className="text-lg">
              Certificación válida para operar: Carretilla frontal, retráctil, transpaleta eléctrica, recogepedidos en altura y apilador.
            </p>
            <p className="text-lg font-semibold">
              Diploma oficial entregado el mismo día.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={openWhatsApp}
              className="btn-accent text-lg px-8 py-4 flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5027 3.49782C18.2087 1.24482 15.2067 0 12.0507 0C5.48573 0 0.101732 5.38306 0.101732 11.9931C0.101732 14.0728 0.648732 16.1525 1.70473 17.9961L0 24.0009L6.14373 22.3269C7.90673 23.2955 9.95973 23.8069 12.0507 23.8069C18.6157 23.8069 24.0007 18.4238 24.0007 11.8138C24.0007 8.65782 22.7557 5.65582 20.5027 3.49782ZM12.0507 21.8064C10.2756 21.8064 8.53627 21.2951 7.04943 20.2935L6.68327 20.0902L2.86673 21.0918L3.88873 17.3935L3.66073 17.0093C2.56273 15.4556 1.98273 13.7239 1.98273 11.9931C1.98273 6.45566 6.51273 1.92823 12.0507 1.92823C14.6885 1.92823 17.1422 2.96517 19.0135 4.81577C20.8657 6.66636 21.9637 9.14045 21.9637 11.8138C21.9637 17.3513 17.5888 21.8064 12.0507 21.8064Z"/>
              </svg>
              Solicitar información
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="btn-outline text-white border-white text-lg px-8 py-4 flex items-center justify-center gap-2"
            >
              <ArrowDown className="w-5 h-5" />
              Ver más detalles
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
