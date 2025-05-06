
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button"; 
import CourseCard from "./CourseCard";
import CourseLocationFilter from "./CourseLocationFilter";
import courses from "@/data/courses";

type Location = "Todos" | "Coslada" | "Alcorcón" | "Ciempozuelos" | "Alcantarilla";
type TabType = "all" | "courses" | "equipment";

const CoursesSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location>("Todos");
  const [activeTab, setActiveTab] = useState<TabType>("all");

  // Filter courses based on location and active tab
  const filteredCourses = courses.filter(course => {
    // Filter by location if it's a course type
    const locationMatch = course.type !== "equipment" 
      ? (selectedLocation === "Todos" || (course.locations && course.locations.includes(selectedLocation)))
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
            key={`${activeTab}-${selectedLocation}`}
          >
            {filteredCourses.slice(0, 6).map((course) => (
              <motion.div key={course.id} variants={item}>
                <CourseCard course={course} />
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
              {filteredCourses.slice(0, 6).map((course) => (
                <CarouselItem key={course.id} className="pl-2 basis-full">
                  <CourseCard course={course} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="static translate-y-0 mx-2" />
              <CarouselNext className="static translate-y-0 mx-2" />
            </div>
          </Carousel>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Button asChild>
            <Link to="/cursos" className="px-8 py-6 text-base font-medium">
              Ver todos los cursos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
