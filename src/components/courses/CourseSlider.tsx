
import { useState, useEffect, useRef } from 'react';
import { IconButton, Typography } from '@mui/material';
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
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
        <div className="flex justify-center items-center mt-8 gap-4">
          <IconButton
            aria-label="Anterior"
            onClick={() => handleManualNavigation(currentIndex <= 0 ? maxIndex : currentIndex - 1)}
            sx={{ border: 1, borderColor: 'divider' }}
          >
            <ArrowBack fontSize="small" />
          </IconButton>

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

          <IconButton
            aria-label="Siguiente"
            onClick={() => handleManualNavigation(currentIndex >= maxIndex ? 0 : currentIndex + 1)}
            sx={{ border: 1, borderColor: 'divider' }}
          >
            <ArrowForward fontSize="small" />
          </IconButton>
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
        {courses.length > 3 && (
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        )}
      </Carousel>
    </div>
  );

  return (
    <section className="py-12 md:py-16 min-h-0">
      <div className="mb-8">
        <Typography variant="h4" component="h2" sx={{ color: 'text.primary', mb: 1 }}>
          {title}
        </Typography>
        {description && (
          <Typography color="text.secondary" sx={{ maxWidth: '60ch' }}>
            {description}
          </Typography>
        )}
      </div>

      <DesktopView />
      <MobileView />
    </section>
  );
};

export default CourseSlider;
