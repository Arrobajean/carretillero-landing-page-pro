
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface Location {
  id: number;
  name: string;
  address: string;
  mapsUrl: string;
  coordinates: { lat: number; lng: number };
}

const locations: Location[] = [
  {
    id: 1,
    name: "Coslada",
    address: "Av. de la Cañada, 64, 28823 Coslada, Madrid",
    mapsUrl: "https://maps.google.com/?q=Av.+de+la+Cañada,+64,+28823+Coslada,+Madrid",
    coordinates: { lat: 40.42582, lng: -3.53549 }
  },
  {
    id: 2,
    name: "Alcorcón",
    address: "Calle Ebanistas, 1, 28923 Alcorcón, Madrid",
    mapsUrl: "https://maps.google.com/?q=Calle+Ebanistas,+1,+28923+Alcorcón,+Madrid",
    coordinates: { lat: 40.34555, lng: -3.83773 }
  },
  {
    id: 3,
    name: "Ciempozuelos",
    address: "C. de la Moda, 13, 28350 Ciempozuelos, Madrid",
    mapsUrl: "https://maps.google.com/?q=C.+de+la+Moda,+13,+28350+Ciempozuelos,+Madrid",
    coordinates: { lat: 40.16075, lng: -3.61171 }
  },
  {
    id: 4,
    name: "Alcantarilla",
    address: "C. del Ing. José Alegría, 1, 30820 Alcantarilla, Murcia",
    mapsUrl: "https://maps.google.com/?q=C.+del+Ing.+José+Alegría,+1,+30820+Alcantarilla,+Murcia",
    coordinates: { lat: 37.97113, lng: -1.22187 }
  }
];

const AboutSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handleLocationClick = (location: Location) => {
    window.open(location.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about-section" className="min-h-screen bg-white py-20 flex items-center">
      <div className="container-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-8 text-primary">¿Quiénes somos?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            Professional Categories SL es una empresa líder en formación especializada para operarios 
            de maquinaria de carga y logística. Con más de 10 años de experiencia formando a 
            profesionales cualificados, ofrecemos certificación oficial cumpliendo con toda la 
            normativa vigente de prevención de riesgos laborales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-primary mb-6">Nuestras sedes</h3>
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
                  <Card className={cn(
                    "transition-all duration-300 cursor-pointer hover:shadow-lg",
                    selectedLocation?.id === location.id ? "border-primary" : ""
                  )}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-lg text-primary">{location.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{location.address}</p>
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
            <iframe 
              title="Mapa de sedes"
              width="100%" 
              height="600" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12147.880747431756!2d-3.5354900000000003!3d40.42582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzMyLjkiTiAzwrAzMicwNy44Ilc!5e0!3m2!1ses!2ses!4v1650000000000!5m2!1ses!2ses"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgraded"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
