
import { useState } from "react";
import { motion } from "framer-motion";
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

  return (
    <section id="about-section" className="bg-white py-20">
      <div className="container-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">¿Quiénes somos?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Professional Categories SL es una empresa líder en formación especializada para operarios de maquinaria de carga y logística. 
            Contamos con más de 10 años de experiencia formando a profesionales cualificados y ofrecemos certificación oficial
            cumpliendo con toda la normativa vigente de prevención de riesgos laborales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="heading-sm mb-6">Nuestras sedes</h3>
            <div className="space-y-4">
              {locations.map((location) => (
                <motion.div 
                  key={location.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: location.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => setSelectedLocation(location)}
                    className={cn(
                      "w-full text-left p-4 rounded-lg transition-all duration-200",
                      selectedLocation?.id === location.id 
                        ? "bg-primary text-white shadow-md" 
                        : "bg-gray-100 hover:bg-gray-200"
                    )}
                  >
                    <h4 className="font-medium text-lg">{location.name}</h4>
                    <p className={cn(
                      "text-sm mt-1",
                      selectedLocation?.id === location.id ? "text-white/90" : "text-gray-600"
                    )}>
                      {location.address}
                    </p>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="lg:col-span-3 rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-gray-100 min-h-[400px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe 
              title="Mapa de sedes"
              width="100%" 
              height="100%" 
              style={{ minHeight: "400px" }}
              src="https://maps.google.com/maps?q=españa&t=&z=6&ie=UTF8&iwloc=&output=embed" 
              frameBorder="0" 
              scrolling="no" 
              className="w-full h-full"
            ></iframe>
            
            {selectedLocation && (
              <div className="p-4 bg-white border-t border-gray-200">
                <h4 className="font-medium">Sede de {selectedLocation.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{selectedLocation.address}</p>
                <a 
                  href={selectedLocation.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Ver en Google Maps
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
