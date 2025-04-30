
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Course {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  details: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Carretilla Frontal",
    price: "50€",
    description: "Aprende a maniobrar carretillas frontales con precisión y seguridad",
    image: "https://images.unsplash.com/photo-1566459069038-41bdf98ae5e0?q=80&w=600&auto=format",
    details: "Formación completa para el manejo de carretillas frontales. Incluye teoría y práctica con equipos reales. Certificación válida para toda España según el RD de Prevención de Riesgos Laborales."
  },
  {
    id: 2,
    title: "Carretilla Retráctil",
    price: "50€",
    description: "Especialización en carretillas retráctiles para almacenes",
    image: "https://images.unsplash.com/photo-1566275412455-45804f3ca0bc?q=80&w=600&auto=format",
    details: "Curso especializado en el manejo de carretillas retráctiles para trabajos en pasillos estrechos y almacenes. Incluye prácticas con equipos profesionales y certificación oficial."
  },
  {
    id: 3,
    title: "Transpaleta Eléctrica",
    price: "50€",
    description: "Manejo eficiente de transpaletas eléctricas para logística",
    image: "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?q=80&w=600&auto=format",
    details: "Formación completa en el uso de transpaletas eléctricas. Aprende técnicas de manejo seguro para optimizar el transporte horizontal de mercancías en almacenes y centros logísticos."
  },
  {
    id: 4,
    title: "Recogepedidos",
    price: "50€",
    description: "Especialización en equipos para picking en altura",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format",
    details: "Curso especializado en el manejo de equipos recogepedidos para trabajos en altura. Aprende las técnicas de seguridad necesarias y obtén tu certificación oficial."
  },
  {
    id: 5,
    title: "Apilador",
    price: "50€",
    description: "Manejo seguro de apiladores eléctricos",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format",
    details: "Formación completa para el manejo de apiladores eléctricos. Incluye prácticas con equipos reales y certificación oficial válida para toda España."
  }
];

const CourseCarousel = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openCourseDetails = (course: Course) => {
    setSelectedCourse(course);
    setIsDialogOpen(true);
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/+34600000000?text=Hola, estoy interesado en el curso de ${selectedCourse?.title}. ¿Podrían darme más información?`,
      '_blank'
    );
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-6">Nuestros Tipos de Equipos</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Especialízate en diferentes tipos de carretillas y equipos de manejo de carga.
            Todos nuestros cursos incluyen certificación oficial válida en toda España.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {courses.map((course) => (
              <CarouselItem key={course.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  variants={item}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => openCourseDetails(course)}
                  className="cursor-pointer"
                >
                  <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg rounded-xl">
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${course.image})` }}
                    >
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-accent hover:bg-accent/90 text-base px-3 py-1 shadow-md">
                          {course.price}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">{course.title}</h3>
                      <p className="text-gray-600 line-clamp-2 text-sm">{course.description}</p>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static translate-y-0 mx-2" />
            <CarouselNext className="static translate-y-0 mx-2" />
          </div>
        </Carousel>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedCourse?.title}</DialogTitle>
              <DialogDescription>
                Detalles del curso
              </DialogDescription>
            </DialogHeader>

            {selectedCourse && (
              <div className="space-y-6">
                <div 
                  className="h-56 bg-gray-200 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${selectedCourse.image})` }}
                />
                
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent hover:bg-accent/90">
                    {selectedCourse.price}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar size={14} />
                    Presencial
                  </Badge>
                </div>
                
                <p className="text-gray-700">
                  {selectedCourse.details}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={openWhatsApp}
                    className="btn-accent flex-1 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.5027 3.49782C18.2087 1.24482 15.2067 0 12.0507 0C5.48573 0 0.101732 5.38306 0.101732 11.9931C0.101732 14.0728 0.648732 16.1525 1.70473 17.9961L0 24.0009L6.14373 22.3269C7.90673 23.2955 9.95973 23.8069 12.0507 23.8069C18.6157 23.8069 24.0007 18.4238 24.0007 11.8138C24.0007 8.65782 22.7557 5.65582 20.5027 3.49782ZM12.0507 21.8064C10.2756 21.8064 8.53627 21.2951 7.04943 20.2935L6.68327 20.0902L2.86673 21.0918L3.88873 17.3935L3.66073 17.0093C2.56273 15.4556 1.98273 13.7239 1.98273 11.9931C1.98273 6.45566 6.51273 1.92823 12.0507 1.92823C14.6885 1.92823 17.1422 2.96517 19.0135 4.81577C20.8657 6.66636 21.9637 9.14045 21.9637 11.8138C21.9637 17.3513 17.5888 21.8064 12.0507 21.8064Z"/>
                    </svg>
                    Consultar por WhatsApp
                  </button>
                  <a 
                    href="tel:+34600000000"
                    className="btn-outline flex-1 flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    Llamar
                  </a>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CourseCarousel;
