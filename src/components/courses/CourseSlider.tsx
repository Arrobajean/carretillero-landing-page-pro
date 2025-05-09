
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/courses/CourseCard';
import { motion } from 'framer-motion';
import { Course } from '@/data/courses';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CourseSliderProps {
  courses: Course[];
  title: string;
  description?: string;
  autoRotate?: boolean;
  autoRotateInterval?: number;
}

const CourseSlider = ({ 
  courses, 
  title, 
  description,
  autoRotate = true,
  autoRotateInterval = 5000
}: CourseSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, Math.ceil(courses.length / 3) - 1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Auto rotation effect
  useEffect(() => {
    if (autoRotate && courses.length > 3) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, autoRotateInterval);
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [autoRotate, courses.length, maxIndex, autoRotateInterval]);
  
  // Stop auto-rotation when user interacts
  const handleManualNavigation = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentIndex(index);
  };

  // Desktop view with grid display and pagination controls
  const DesktopView = () => (
    <div className="hidden md:block">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.slice(currentIndex * 3, (currentIndex * 3) + 3).map((course) => (
          <motion.div 
            key={course.id} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <CourseCard course={course} />
          </motion.div>
        ))}
      </div>
      
      {/* Pagination Controls */}
      {courses.length > 3 && (
        <div className="flex justify-center mt-8 gap-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => handleManualNavigation(currentIndex <= 0 ? maxIndex : currentIndex - 1)}
            className="rounded-full"
          >
            <ArrowLeft size={16} />
            <span className="sr-only">Anterior</span>
          </Button>
          
          <div className="flex gap-2 items-center">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleManualNavigation(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? "bg-primary scale-125" : "bg-gray-300"
                }`}
                aria-label={`Ir a página ${idx + 1}`}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => handleManualNavigation(currentIndex >= maxIndex ? 0 : currentIndex + 1)}
            className="rounded-full"
          >
            <ArrowRight size={16} />
            <span className="sr-only">Siguiente</span>
          </Button>
        </div>
      )}
    </div>
  );

  // Mobile view with carousel
  const MobileView = () => (
    <div className="md:hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-sm mx-auto"
      >
        <CarouselContent className="-ml-2">
          {courses.map((course) => (
            <CarouselItem key={course.id} className="pl-2 basis-[100%]">
              <div className="p-1">
                <CourseCard course={course} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 gap-2">
          <CarouselPrevious className="static translate-y-0 mx-2" />
          <CarouselNext className="static translate-y-0 mx-2" />
        </div>
      </Carousel>
    </div>
  );

  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {title}
        </h2>
        {description && (
          <>
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-4"></div>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
              {description}
            </p>
          </>
        )}
      </div>
      
      <DesktopView />
      <MobileView />
    </section>
  );
};

export default CourseSlider;
