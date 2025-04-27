import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="cta-section" className="bg-primary py-20 relative overflow-hidden flex items-center justify-center min-h-screen">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary z-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=1920&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
        }} 
      ></div>
      
      <div className="container-section flex flex-col items-center justify-center text-center relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">
            ¿Estás listo para impulsar tu carrera profesional?
          </h2>
          
          <p className="text-lg text-white/90 mb-12">
            Contáctanos ahora y descubre cómo nuestros cursos certificados pueden 
            ayudarte a conseguir mejores oportunidades laborales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/+34600000000?text=Hola, estoy interesado en información sobre los cursos de carretillero." 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-lg py-4 px-8 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.5027 3.49782C18.2087 1.24482 15.2067 0 12.0507 0C5.48573 0 0.101732 5.38306 0.101732 11.9931C0.101732 14.0728 0.648732 16.1525 1.70473 17.9961L0 24.0009L6.14373 22.3269C7.90673 23.2955 9.95973 23.8069 12.0507 23.8069C18.6157 23.8069 24.0007 18.4238 24.0007 11.8138C24.0007 8.65782 22.7557 5.65582 20.5027 3.49782ZM12.0507 21.8064C10.2756 21.8064 8.53627 21.2951 7.04943 20.2935L6.68327 20.0902L2.86673 21.0918L3.88873 17.3935L3.66073 17.0093C2.56273 15.4556 1.98273 13.7239 1.98273 11.9931C1.98273 6.45566 6.51273 1.92823 12.0507 1.92823C14.6885 1.92823 17.1422 2.96517 19.0135 4.81577C20.8657 6.66636 21.9637 9.14045 21.9637 11.8138C21.9637 17.3513 17.5888 21.8064 12.0507 21.8064ZM17.4925 14.4915C17.2067 14.3559 15.7577 13.6412 15.5297 13.5483C15.3017 13.4554 15.0967 13.4137 14.9107 13.6994C14.6847 13.9851 14.1213 14.597 13.9353 14.8011C13.7685 14.9833 13.5824 15.0069 13.2967 14.8714C11.0047 13.7303 9.50673 12.8211 7.99664 10.2078C7.59364 9.51882 8.12464 9.47711 8.61864 8.48877C8.73564 8.28341 8.69364 8.09983 8.63064 7.96425C8.56764 7.82866 8.04865 6.38015 7.80164 5.79297C7.55464 5.22757 7.30776 5.30615 7.12776 5.29753C6.96076 5.28892 6.75564 5.28892 6.55064 5.28892C6.34564 5.28892 6.01664 5.35178 5.78865 5.62141C5.56064 5.89105 4.80173 6.60584 4.80173 8.05434C4.80173 9.50285 5.81064 10.9083 5.96564 11.1136C6.12064 11.319 8.03673 14.3329 10.9997 15.6236C12.9087 16.4589 13.6663 16.5283 14.6323 16.3669C15.2167 16.2611 16.3725 15.6236 16.6195 14.9358C16.8665 14.2479 16.8665 13.6607 16.8035 13.563C16.7405 13.4653 16.5355 13.3989 16.2497 13.271C16.2487 13.271 16.2487 13.271 16.2487 13.271L17.4925 14.4915Z" fill="currentColor"/>
              </svg>
              WhatsApp directo
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+34600000000" 
              className="btn-outline border-white text-white text-lg py-4 px-8 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Phone size={20} />
              Llámanos
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
