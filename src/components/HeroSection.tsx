
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("cta-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero-section" className="flex items-center justify-center bg-primary relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80 z-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1610824224972-db9878a2fe2c?q=80&w=1920&auto=format')",
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Expertos en movimiento y logística de cargas
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Formación certificada para profesionales de carretilla elevadora y maquinaria de carga. Cumplimiento garantizado del RD de Prevención de Riesgos Laborales.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContact}
            className="btn-accent text-lg px-8 py-4"
          >
            Solicitar Información
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
