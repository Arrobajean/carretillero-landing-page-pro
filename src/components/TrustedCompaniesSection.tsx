
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const companies = [
  { name: "Acme Inc.", logo: "/placeholder.svg" },
  { name: "TechCorp", logo: "/placeholder.svg" },
  { name: "LogiTeam", logo: "/placeholder.svg" },
  { name: "IndustriasXYZ", logo: "/placeholder.svg" },
  { name: "Transportes España", logo: "/placeholder.svg" },
  { name: "Global Logistics", logo: "/placeholder.svg" },
  { name: "Express Delivery", logo: "/placeholder.svg" },
  { name: "Almacenes Rápidos", logo: "/placeholder.svg" },
];

const TrustedCompaniesSection = () => {
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
          <Badge className="bg-accent mb-4">Empresas que confían</Badge>
          <h2 className="heading-lg mb-4">Empresas que han contratado a nuestros alumnos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            +200 alumnos contratados en los últimos 6 meses por empresas líderes del sector
          </p>
        </motion.div>

        <div className="mb-16">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="py-4">
              {companies.map((company, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={cn(
                      "flex flex-col items-center justify-center p-6",
                      "bg-white rounded-lg shadow-md h-40"
                    )}
                  >
                    <img 
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-24 h-24 object-contain mb-4 grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <p className="font-medium text-gray-600">{company.name}</p>
                  </motion.div>
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
            <div className="p-4">
              <h3 className="text-4xl font-bold text-primary mb-2">+200</h3>
              <p className="text-gray-600">Alumnos contratados</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
              <p className="text-gray-600">Tasa de inserción laboral</p>
            </div>
            <div className="p-4">
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
