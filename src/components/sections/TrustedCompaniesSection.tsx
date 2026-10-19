import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Box, Card, Skeleton, Typography } from "@mui/material";
import { companies } from "@/data/companies";

// Logo on a light tile, with a skeleton on top until the image has loaded.
const CompanyLogo = ({ src, name }: { src: string; name: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 80,
        mb: 1,
        px: 2,
        borderRadius: 2,
        bgcolor: "#e4e4e4",
        display: "grid",
        placeItems: "center",
      }}
    >
      {!isLoaded && (
        <Skeleton variant="rectangular" sx={{ position: "absolute", inset: 0, borderRadius: 2 }} />
      )}
      <img
        src={src}
        alt={`Logo de ${name}`}
        className="h-16 w-auto max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      />
    </Box>
  );
};

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
    <section id="trusted-companies-section" className="bg-primary py-20">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Typography variant="h2" sx={{ mb: 2, color: "#FFFFFF" }}>
            Empresas que han contratado a nuestros alumnos
          </Typography>
          <Typography
            sx={{ fontSize: "1.125rem", maxWidth: 768, mx: "auto", color: "rgba(255, 255, 255, 0.9)" }}
          >
            Más de 200 alumnos firmaron contrato en los últimos 6 meses con
            empresas del sector
          </Typography>
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
                    className="m-0 h-40"
                  >
                    <Card
                      elevation={0}
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 3,
                        bgcolor: "#e4e4e40d",
                        border: 1,
                        borderColor: "#e4e4e41a",
                      }}
                    >
                      <CompanyLogo src={company.logo} name={company.name} />
                      <Typography
                        component="figcaption"
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#FFFFFF" }}
                      >
                        {company.name}
                      </Typography>
                    </Card>
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
        >
          <Card elevation={2} sx={{ p: 4 }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Typography variant="h3" sx={{ color: "primary.main", mb: 1, fontFamily: '"Bricolage Grotesque", sans-serif' }}>
                  +200
                </Typography>
                <Typography color="text.secondary">Alumnos contratados</Typography>
              </div>
              <div>
                <Typography variant="h3" sx={{ color: "primary.main", mb: 1, fontFamily: '"Bricolage Grotesque", sans-serif' }}>
                  98%
                </Typography>
                <Typography color="text.secondary">Tasa de inserción laboral</Typography>
              </div>
              <div>
                <Typography variant="h3" sx={{ color: "primary.main", mb: 1, fontFamily: '"Bricolage Grotesque", sans-serif' }}>
                  45
                </Typography>
                <Typography color="text.secondary">Empresas colaboradoras</Typography>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;
