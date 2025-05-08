
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Forklift, Tag, Star } from 'lucide-react';
import { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  // Helper function to get appropriate badge text based on course type and mode
  const getBadgeText = () => {
    if (course.type === 'equipment') return 'Equipos incluidos';
    if (course.mode && course.mode.includes('Online')) return 'Online + Presencial';
    if (course.type === 'pack') return 'Pack completo';
    return 'Certificación incluida';
  };
  
  // Function to render stars based on rating
  const renderRating = (rating: number = 4.8) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
        )}
        <span className="text-sm font-medium ml-1 text-gray-700">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <motion.div
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="overflow-hidden h-full bg-white border-0 transition-all duration-300 hover:shadow-xl rounded-2xl shadow-md">
        <Link to={`/cursos/${course.slug}`} className="flex flex-col h-full">
          {/* Image Container with Badge */}
          <div className="relative">
            <div 
              className="h-48 bg-gray-100 bg-cover bg-center rounded-t-2xl"
              style={{ backgroundImage: `url(${course.image})` }}
            >
              {/* Top Badge - Certification, Online, etc */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 text-primary border-0 backdrop-blur-sm shadow-sm px-3 py-1">
                  {getBadgeText()}
                </Badge>
              </div>
            </div>
          </div>

          <CardContent className="p-5 flex flex-col flex-grow">
            {/* Tags Row */}
            {course.mode && (
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="bg-gray-50 text-gray-700 flex items-center gap-1 font-normal">
                  <Calendar size={14} />
                  {course.mode}
                </Badge>
                {course.locations && (
                  <Badge variant="outline" className="bg-gray-50 text-gray-700 flex items-center gap-1 font-normal">
                    <MapPin size={14} />
                    {course.locations}
                  </Badge>
                )}
                {course.type === 'equipment' && (
                  <Badge variant="outline" className="bg-gray-50 text-gray-700 flex items-center gap-1 font-normal">
                    <Forklift size={14} />
                    Equipo
                  </Badge>
                )}
              </div>
            )}
            
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
            
            {/* Description */}
            <p className="text-gray-600 mb-4 text-sm line-clamp-2 flex-grow">{course.shortDescription}</p>
            
            {/* Price and Rating Row */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-accent font-bold text-xl">{course.price}</div>
              {renderRating(4.8)}
            </div>
            
            {/* CTA Button */}
            <div className="mt-auto">
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                Ver detalles
                {course.type === 'equipment' ? (
                  <Forklift size={18} />
                ) : (
                  <Tag size={18} />
                )}
              </button>
            </div>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
