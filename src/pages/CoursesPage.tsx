
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import courses from '@/data/courses';

type CourseType = 'all' | 'course' | 'pack' | 'equipment';

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState<CourseType>('all');
  
  const filteredCourses = courses.filter(course => 
    activeTab === 'all' || course.type === activeTab
  );

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
      <main>
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            <div className="text-center mb-16">
              <h1 className="heading-lg mb-6">Catálogo de Cursos</h1>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Explora nuestra oferta formativa completa. Ofrecemos cursos especializados, 
                packs formativos y formación en diferentes tipos de equipos industriales.
              </p>
            </div>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                onClick={() => setActiveTab('all')}
                variant={activeTab === 'all' ? 'default' : 'outline'}
                className="rounded-full"
              >
                Todos
              </Button>
              <Button 
                onClick={() => setActiveTab('course')}
                variant={activeTab === 'course' ? 'default' : 'outline'}
                className="rounded-full"
              >
                Cursos
              </Button>
              <Button 
                onClick={() => setActiveTab('pack')}
                variant={activeTab === 'pack' ? 'default' : 'outline'}
                className="rounded-full"
              >
                Packs
              </Button>
              <Button 
                onClick={() => setActiveTab('equipment')}
                variant={activeTab === 'equipment' ? 'default' : 'outline'}
                className="rounded-full"
              >
                Equipos
              </Button>
            </div>
            
            {/* Course Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
              key={activeTab} // Re-render animation when tab changes
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
                    No se encontraron cursos en esta categoría.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
