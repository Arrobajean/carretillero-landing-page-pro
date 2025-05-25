import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocations } from "@/hooks/useLocations";
import MapEmbed from "@/components/MapEmbed";

const AboutSection = () => {
  const { locations, selectedLocation, handleLocationClick, getMapEmbedUrl } =
    useLocations();

  return (
    <section
      id="about-section"
      className="min-h-screen bg-white py-20 flex items-center"
    >
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-8 text-primary">
            ¿Quiénes somos?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            Professional Categories SL es una empresa líder en formación
            especializada para operarios de maquinaria de carga y logística. Con
            más de 10 años de experiencia formando a profesionales cualificados,
            ofrecemos certificación oficial cumpliendo con toda la normativa
            vigente de prevención de riesgos laborales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Nuestras sedes
            </h3>
            <div className="space-y-4">
              {locations.map((location) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: location.id * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => handleLocationClick(location)}
                >
                  <Card
                    className={cn(
                      "transition-all duration-300 cursor-pointer hover:shadow-lg",
                      selectedLocation?.id === location.id
                        ? "border-primary border-2"
                        : ""
                    )}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-lg text-primary">
                            {location.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {location.address}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="lg:col-span-3 rounded-xl overflow-hidden shadow-lg min-h-[400px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MapEmbed
              id={selectedLocation.id}
              title={`Sede: ${selectedLocation.name}`}
              src={getMapEmbedUrl(selectedLocation)}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
