
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Phone, Tools } from "lucide-react";
import CourseLocationFilter from "./CourseLocationFilter";

type Location = "Todos" | "Coslada" | "Alcorcón" | "Ciempozuelos" | "Alcantarilla";

interface Course {
  id: number;
  title: string;
  price: string;
  mode?: "Presencial" | "Online" | "Presencial y Online";
  location?: string;
  description: string;
  image: string;
  details: string;
  type: "course" | "pack" | "equipment";
}

const courses: Course[] = [
  // Courses
  {
    id: 1,
    title: "Curso Básico de Carretillero",
    price: "50€",
    mode: "Presencial",
    location: "Todas las sedes",
    description: "Formación completa de carretillero en un solo día. Incluye práctica con equipos reales y certificación oficial.",
    image: "https://images.unsplash.com/photo-1566459069038-41bdf98ae5e0?q=80&w=600&auto=format",
    details: "Curso básico de carretillero. Incluye teoría y práctica con equipos reales. Certificación oficial válida en toda España. Se entrega el diploma el mismo día.",
    type: "course"
  },
  {
    id: 2,
    title: "Carretillero + Puente Grúa",
    price: "90€",
    mode: "Presencial",
    location: "Coslada, Alcorcón, Ciempozuelos",
    description: "Formación dual para el manejo profesional de carretillas y puentes grúa.",
    image: "https://images.unsplash.com/photo-1566275412455-45804f3ca0bc?q=80&w=600&auto=format",
    details: "Curso que combina la formación de carretillero y puente grúa. Incluye prácticas reales y certificación oficial.",
    type: "course"
  },
  {
    id: 3,
    title: "Carretillero + Manipulador de Alimentos",
    price: "70€",
    mode: "Presencial y Online",
    location: "Todas las sedes",
    description: "Certificación combinada para manejo de carretillas y manipulación de alimentos.",
    image: "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?q=80&w=600&auto=format",
    details: "Formación integral que incluye el curso de carretillero y el certificado de manipulador de alimentos. Ideal para trabajo en almacenes alimentarios.",
    type: "course"
  },
  {
    id: 4,
    title: "PACK TOP FORMACIÓN",
    price: "160€",
    mode: "Presencial",
    location: "Coslada, Alcorcón",
    description: "Pack completo: Carretillero + Plataforma + Puente Grúa + Radiofrecuencia + Manipulador",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format",
    details: "Pack formativo completo que incluye certificación de carretillero, plataforma elevadora, puente grúa, radiofrecuencia y manipulador de alimentos. Certificación oficial para todos los cursos.",
    type: "pack"
  },
  {
    id: 5,
    title: "PACK MEGA FORMACIÓN",
    price: "190€",
    mode: "Presencial",
    location: "Coslada",
    description: "Pack premium con todos los cursos + equipos de limpieza",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format",
    details: "Pack formativo premium que incluye todo el Pack Top Formación más la certificación en equipos de limpieza. La formación más completa para maximizar tus oportunidades laborales.",
    type: "pack"
  },
  // Equipment
  {
    id: 6,
    title: "Carretilla Frontal",
    price: "50€",
    description: "Aprende a maniobrar carretillas frontales con precisión y seguridad",
    image: "https://images.unsplash.com/photo-1566459069038-41bdf98ae5e0?q=80&w=600&auto=format",
    details: "Formación completa para el manejo de carretillas frontales. Incluye teoría y práctica con equipos reales. Certificación válida para toda España según el RD de Prevención de Riesgos Laborales.",
    type: "equipment"
  },
  {
    id: 7,
    title: "Carretilla Retráctil",
    price: "50€",
    description: "Especialización en carretillas retráctiles para almacenes",
    image: "https://images.unsplash.com/photo-1566275412455-45804f3ca0bc?q=80&w=600&auto=format",
    details: "Curso especializado en el manejo de carretillas retráctiles para trabajos en pasillos estrechos y almacenes. Incluye prácticas con equipos profesionales y certificación oficial.",
    type: "equipment"
  },
  {
    id: 8,
    title: "Transpaleta Eléctrica",
    price: "50€",
    description: "Manejo eficiente de transpaletas eléctricas para logística",
    image: "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?q=80&w=600&auto=format",
    details: "Formación completa en el uso de transpaletas eléctricas. Aprende técnicas de manejo seguro para optimizar el transporte horizontal de mercancías en almacenes y centros logísticos.",
    type: "equipment"
  },
  {
    id: 9,
    title: "Recogepedidos",
    price: "50€",
    description: "Especialización en equipos para picking en altura",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format",
    details: "Curso especializado en el manejo de equipos recogepedidos para trabajos en altura. Aprende las técnicas de seguridad necesarias y obtén tu certificación oficial.",
    type: "equipment"
  },
  {
    id: 10,
    title: "Apilador",
    price: "50€",
    description: "Manejo seguro de apiladores eléctricos",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format",
    details: "Formación completa para el manejo de apiladores eléctricos. Incluye prácticas con equipos reales y certificación oficial válida para toda España.",
    type: "equipment"
  }
];

type TabType = "all" | "courses" | "equipment";

const CoursesSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location>("Todos");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("all");

  // Filter courses based on location and active tab
  const filteredCourses = courses.filter(course => {
    // Filter by location if it's a course type
    const locationMatch = course.type !== "equipment" 
      ? (selectedLocation === "Todos" || (course.location && course.location.includes(selectedLocation)))
      : true;
    
    // Filter by tab type
    const tabMatch = 
      activeTab === "all" || 
      (activeTab === "courses" && (course.type === "course" || course.type === "pack")) ||
      (activeTab === "equipment" && course.type === "equipment");
    
    return locationMatch && tabMatch;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      } 
    }
  };

  const openCourseDetails = (course: Course) => {
    setSelectedCourse(course);
    setIsDialogOpen(true);
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/+34600000000?text=Hola, estoy interesado en el ${selectedCourse?.title}. ¿Podrían darme más información?`,
      '_blank'
    );
  };

  return (
    <section id="courses-section" className="bg-[#fafafa] py-20">
      <div className="container-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-6">Nuestros Cursos y Equipos</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Descubre nuestra amplia gama de cursos certificados, packs formativos y tipos de equipos diseñados
            para impulsar tu carrera profesional en el sector logístico e industrial.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 rounded-full transition-all ${activeTab === "all" 
                ? "bg-primary text-white shadow-md" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              Todos
            </button>
            <button 
              onClick={() => setActiveTab("courses")}
              className={`px-6 py-2 rounded-full transition-all ${activeTab === "courses" 
                ? "bg-primary text-white shadow-md" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              Cursos
            </button>
            <button 
              onClick={() => setActiveTab("equipment")}
              className={`px-6 py-2 rounded-full transition-all ${activeTab === "equipment" 
                ? "bg-primary text-white shadow-md" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              Equipos
            </button>
          </div>

          {/* Only show location filter for courses */}
          {activeTab !== "equipment" && (
            <CourseLocationFilter 
              selectedLocation={selectedLocation}
              onLocationChange={setSelectedLocation}
            />
          )}
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:block">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {filteredCourses.map((course) => (
              <motion.div 
                key={course.id} 
                variants={item}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="overflow-hidden h-full cursor-pointer transition-all duration-300 hover:shadow-xl rounded-2xl" onClick={() => openCourseDetails(course)}>
                      <div className="relative">
                        <div 
                          className="h-52 bg-gray-300 bg-cover bg-center"
                          style={{ backgroundImage: `url(${course.image})` }}
                        >
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-accent hover:bg-accent/90 text-base px-4 py-1 shadow-lg">
                              {course.price}
                            </Badge>
                          </div>
                          {course.type === 'pack' && (
                            <div className="absolute top-4 left-4">
                              <Badge variant="outline" className="bg-white/90 border-none">
                                PACK
                              </Badge>
                            </div>
                          )}
                          {course.type === 'equipment' && (
                            <div className="absolute top-4 left-4">
                              <Badge variant="outline" className="bg-white/90 border-none flex items-center gap-1">
                                <Tools size={14} />
                                EQUIPO
                              </Badge>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-primary mb-4">{course.title}</h3>
                        
                        {course.mode && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar size={14} />
                              {course.mode}
                            </Badge>
                            {course.location && (
                              <Badge variant="outline" className="flex items-center gap-1">
                                <MapPin size={14} />
                                {course.location}
                              </Badge>
                            )}
                          </div>
                        )}
                        
                        <p className="text-gray-600 mb-6 line-clamp-2">{course.description}</p>
                      </div>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-4">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-lg font-semibold">{course.title}</h4>
                      <p className="text-sm text-gray-600">{course.details}</p>
                      <Badge className="self-start mt-2 bg-accent text-white">
                        {course.price}
                      </Badge>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredCourses.map((course) => (
                <CarouselItem key={course.id} className="pl-2 basis-full">
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
                        {course.type === 'pack' && (
                          <div className="absolute top-3 left-3">
                            <Badge variant="outline" className="bg-white/90 border-none">
                              PACK
                            </Badge>
                          </div>
                        )}
                        {course.type === 'equipment' && (
                          <div className="absolute top-3 left-3">
                            <Badge variant="outline" className="bg-white/90 border-none flex items-center gap-1">
                              <Tools size={14} />
                              EQUIPO
                            </Badge>
                          </div>
                        )}
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
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedCourse?.title}</DialogTitle>
            <DialogDescription>
              Detalles del {selectedCourse?.type === 'equipment' ? 'equipo' : 'curso'}
            </DialogDescription>
          </DialogHeader>

          {selectedCourse && (
            <div className="space-y-6">
              <div 
                className="h-52 bg-gray-300 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${selectedCourse.image})` }}
              ></div>
              
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-accent hover:bg-accent/90">
                  {selectedCourse.price}
                </Badge>
                {selectedCourse.mode && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar size={14} />
                    {selectedCourse.mode}
                  </Badge>
                )}
                {selectedCourse.location && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MapPin size={14} />
                    {selectedCourse.location}
                  </Badge>
                )}
                {selectedCourse.type === 'equipment' && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Tools size={14} />
                    Equipo
                  </Badge>
                )}
              </div>
              
              <p className="text-gray-700 text-lg">
                {selectedCourse.details}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={openWhatsApp}
                  className="btn-accent flex-1 flex items-center justify-center gap-2"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.5027 3.49782C18.2087 1.24482 15.2067 0 12.0507 0C5.48573 0 0.101732 5.38306 0.101732 11.9931C0.101732 14.0728 0.648732 16.1525 1.70473 17.9961L0 24.0009L6.14373 22.3269C7.90673 23.2955 9.95973 23.8069 12.0507 23.8069C18.6157 23.8069 24.0007 18.4238 24.0007 11.8138C24.0007 8.65782 22.7557 5.65582 20.5027 3.49782ZM12.0507 21.8064C10.2756 21.8064 8.53627 21.2951 7.04943 20.2935L6.68327 20.0902L2.86673 21.0918L3.88873 17.3935L3.66073 17.0093C2.56273 15.4556 1.98273 13.7239 1.98273 11.9931C1.98273 6.45566 6.51273 1.92823 12.0507 1.92823C14.6885 1.92823 17.1422 2.96517 19.0135 4.81577C20.8657 6.66636 21.9637 9.14045 21.9637 11.8138C21.9637 17.3513 17.5888 21.8064 12.0507 21.8064ZM17.4925 14.4915C17.2067 14.3559 15.7577 13.6412 15.5297 13.5483C15.3017 13.4554 15.0967 13.4137 14.9107 13.6994C14.6847 13.9851 14.1213 14.597 13.9353 14.8011C13.7685 14.9833 13.5824 15.0069 13.2967 14.8714C11.0047 13.7303 9.50673 12.8211 7.99664 10.2078C7.59364 9.51882 8.12464 9.47711 8.61864 8.48877C8.73564 8.28341 8.69364 8.09983 8.63064 7.96425C8.56764 7.82866 8.04865 6.38015 7.80164 5.79297C7.55464 5.22757 7.30776 5.30615 7.12776 5.29753C6.96076 5.28892 6.75564 5.28892 6.55064 5.28892C6.34564 5.28892 6.01664 5.35178 5.78865 5.62141C5.56064 5.89105 4.80173 6.60584 4.80173 8.05434C4.80173 9.50285 5.81064 10.9083 5.96564 11.1136C6.12064 11.319 8.03673 14.3329 10.9997 15.6236C12.9087 16.4589 13.6663 16.5283 14.6323 16.3669C15.2167 16.2611 16.3725 15.6236 16.6195 14.9358C16.8665 14.2479 16.8665 13.6607 16.8035 13.563C16.7405 13.4653 16.5355 13.3989 16.2497 13.271C16.2487 13.271 16.2487 13.271 16.2487 13.271 16.2487 13.271L17.4925 14.4915Z" fill="currentColor"/>
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
    </section>
  );
};

export default CoursesSection;
