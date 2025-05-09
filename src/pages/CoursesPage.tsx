
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CourseCard from '@/components/courses/CourseCard';
import CourseFilter from '@/components/courses/CourseFilter';
import CourseLocationFilter from '@/components/CourseLocationFilter';
import { motion } from 'framer-motion';
import courses from '@/data/courses';

type CourseType = 'all' | 'course' | 'pack' | 'equipment';
type Location = "Todos" | "Coslada" | "Alcorcón" | "Ciempozuelos" | "Alcantarilla";

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState<CourseType>('all');
  const [selectedLocation, setSelectedLocation] = useState<Location>("Todos");
  
  // Filter courses based on type and location
  const filteredCourses = courses.filter(course => {
    // Filter by type
    const typeMatch = activeTab === 'all' || course.type === activeTab;
    
    // Filter by location (only for non-equipment types)
    const locationMatch = course.type === 'equipment' || 
                         selectedLocation === 'Todos' || 
                         (course.locations && course.locations.includes(selectedLocation));
    
    return typeMatch && locationMatch;
  });

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
      transition: { duration: 0.5 } 
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Catálogo de Cursos</h1>
              <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-4"></div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Explora nuestra oferta formativa completa. Ofrecemos cursos especializados, 
                packs formativos y formación en diferentes tipos de equipos industriales.
              </p>
            </motion.div>
            
            {/* Category Tabs */}
            <CourseFilter activeTab={activeTab} onTabChange={setActiveTab} />
            
            {/* Location Filter - Only show for non-equipment courses */}
            {activeTab !== 'equipment' && (
              <div className="mb-10">
                <CourseLocationFilter 
                  selectedLocation={selectedLocation}
                  onLocationChange={setSelectedLocation}
                />
              </div>
            )}
            
            {/* Course Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
              key={`${activeTab}-${selectedLocation}`} // Re-render animation when filters change
            >
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <motion.div key={course.id} variants={item}>
                    <CourseCard course={course} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <p className="text-gray-500 text-lg">
                    No se encontraron cursos con los filtros seleccionados.
                  </p>
                </div>
              )}
            </motion.div>
            
            {/* Results summary */}
            {filteredCourses.length > 0 && (
              <div className="mt-10 text-center text-gray-600">
                Mostrando {filteredCourses.length} {filteredCourses.length === 1 ? 'curso' : 'cursos'}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
