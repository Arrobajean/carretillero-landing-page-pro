import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Box, Card, CardActionArea, Skeleton, Stack, Typography } from "@mui/material";
import Place from "@mui/icons-material/Place";
import { useLocations } from "@/hooks/useLocations";
import MapEmbed from "@/components/MapEmbed";

const AboutSection = () => {
  const { locations, selectedLocation, handleLocationClick, getMapEmbedUrl } =
    useLocations();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [loadedMapIds, setLoadedMapIds] = useState<number[]>([]);

  // Start loading maps only when the section is about to be seen.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Load the selected map right away, then the rest shortly after.
  useEffect(() => {
    if (!isNearViewport) return;

    setLoadedMapIds((prev) =>
      prev.includes(selectedLocation.id) ? prev : [...prev, selectedLocation.id]
    );

    const timer = window.setTimeout(() => {
      setLoadedMapIds(locations.map((location) => location.id));
    }, 1500);

    return () => window.clearTimeout(timer);
  }, [isNearViewport, selectedLocation.id, locations]);

  const isSelectedMapLoaded = loadedMapIds.includes(selectedLocation.id);

  return (
    <section
      ref={sectionRef}
      id="about-section"
      className="min-h-screen bg-primary py-20 flex items-center"
    >
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="h2" sx={{ mb: 4, color: "#FFFFFF" }}>
            ¿Quiénes somos?
          </Typography>
          <Typography
            sx={{
              maxWidth: 672,
              mx: "auto",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              mb: 6,
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Professional Categories SL forma a operarios de carretillas y maquinaria
            de carga desde hace más de 10 años. Cada curso sigue la normativa vigente
            de prevención de riesgos laborales y termina con certificado.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sedes: cards fill the height of the map */}
          <div className="lg:col-span-2 flex flex-col">
            <Typography variant="h4" sx={{ color: "#FFFFFF", mb: 1 }}>
              Nuestras sedes
            </Typography>
            <Typography sx={{ color: "rgba(255, 255, 255, 0.8)", mb: 3 }}>
              Cada curso indica en qué sedes se imparte.
            </Typography>
            <Box
              sx={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                gridTemplateRows: { lg: "1fr 1fr" },
                gap: 2,
              }}
            >
              {locations.map((location) => {
                const isSelected = selectedLocation?.id === location.id;

                return (
                  <motion.div
                    key={location.id}
                    className="h-full"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: location.id * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      elevation={isSelected ? 6 : 1}
                      sx={{
                        height: "100%",
                        border: 2,
                        borderColor: isSelected ? "primary.main" : "transparent",
                        transition: "all 300ms",
                      }}
                    >
                      <CardActionArea
                        onClick={() => handleLocationClick(location)}
                        sx={{
                          height: "100%",
                          p: 3,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          gap: 1.5,
                        }}
                      >
                        <Place sx={{ fontSize: 56, color: "primary.main" }} />
                        <Typography variant="h6" component="h4" sx={{ color: "primary.main" }}>
                          {location.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {location.address}
                        </Typography>
                      </CardActionArea>
                    </Card>
                  </motion.div>
                );
              })}
            </Box>
          </div>

          <motion.div
            className="lg:col-span-3 rounded-xl overflow-hidden shadow-lg min-h-[400px] grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {!isSelectedMapLoaded && (
              <Skeleton variant="rectangular" sx={{ gridArea: "1 / 1", width: "100%", height: 600 }} />
            )}
            {locations
              .filter((location) => loadedMapIds.includes(location.id))
              .map((location) => (
                <MapEmbed
                  key={location.id}
                  title={`Sede: ${location.name}`}
                  src={getMapEmbedUrl(location)}
                  hidden={location.id !== selectedLocation.id}
                />
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
