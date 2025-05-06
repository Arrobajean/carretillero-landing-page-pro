
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Wrench } from 'lucide-react';
import { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl rounded-2xl">
        <Link to={`/cursos/${course.slug}`} className="flex flex-col h-full">
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
                    <Wrench size={14} />
                    EQUIPO
                  </Badge>
                </div>
              )}
            </div>
          </div>

          <CardContent className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-primary mb-3">{course.title}</h3>
            
            {course.mode && (
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar size={14} />
                  {course.mode}
                </Badge>
                {course.locations && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MapPin size={14} />
                    {course.locations}
                  </Badge>
                )}
              </div>
            )}
            
            <p className="text-gray-600 mb-6 line-clamp-2 flex-grow">{course.shortDescription}</p>
            
            <div className="mt-auto">
              <button className="btn-accent w-full">Ver más detalles</button>
            </div>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
