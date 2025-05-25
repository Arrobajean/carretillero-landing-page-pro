import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { companies } from "@/data/companies";
import { containerStagger, fadeUpItem } from "@/lib/motionVariants";

const TrustedCompaniesSection = () => {
  const autoplayDelay = 3000;
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const autoplay = useRef<NodeJS.Timeout | null>(null);
  const isHovered = useRef(false);

  // If your Carousel library provides a hook to access embla, use it here.
  // For example, if using embla-carousel-react:
  // import useEmblaCarousel from 'embla-carousel-react';
  // const [emblaRef, embla] = useEmblaCarousel({ loop: true });

  // Placeholder for embla instance, update this if your Carousel exposes a hook or ref.
  const embla = null;

  useEffect(() => {
    if (!embla) return;

    const startAutoplay = () => {
      if (autoplay.current) clearInterval(autoplay.current);
      autoplay.current = setInterval(() => {
        if (!isHovered.current) {
          if (embla.canScrollNext()) {
            embla.scrollNext();
          } else {
            embla.scrollTo(0);
          }
        }
      }, autoplayDelay);
    };

    const stopAutoplay = () => {
      if (autoplay.current) clearInterval(autoplay.current);
    };

    startAutoplay();

    return () => stopAutoplay();
  }, [embla]);

  return (
    <section id="trusted-companies-section" className="bg-secondary py-20">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">
            Empresas que han contratado a nuestros alumnos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            +200 alumnos contratados en los últimos 6 meses por empresas líderes
            del sector
          </p>
        </motion.div>

        <div
          className="mb-16"
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
        >
          <Carousel
            ref={carouselRef}
            opts={{ align: "start", loop: true, dragFree: true }}
            className="w-full"
          >
            <CarouselContent className="py-4">
              {companies.map((company, index) => (
                <CarouselItem
                  key={company.name}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4"
                >
                  <motion.figure
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md h-40"
                  >
                    <img
                      src={company.logo}
                      alt={`Logo de ${company.name}`}
                      className="w-32 h-32 object-contain mb-2 grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                    <figcaption className="font-medium text-gray-600 text-sm">
                      {company.name}
                    </figcaption>
                  </motion.figure>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-lg shadow-md text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">+200</h3>
              <p className="text-gray-600">Alumnos contratados</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
              <p className="text-gray-600">Tasa de inserción laboral</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">45</h3>
              <p className="text-gray-600">Empresas colaboradoras</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;
