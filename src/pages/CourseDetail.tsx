
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MapPin, Calendar, Phone, MessageSquare, Wrench, Star, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import courses, { Course } from '@/data/courses';
import { cn } from '@/lib/utils';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CourseCard from '@/components/CourseCard';

const CourseDetail = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundCourse = courses.find((c) => c.slug === slug);
    
    if (foundCourse) {
      setCourse(foundCourse);
    }
    
    setLoading(false);
  }, [slug]);

  // Function to render rating stars based on the course's rating
  const renderRating = (rating: number = 4.8) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star size={18} className="fill-yellow-400 text-yellow-400" />
        )}
        <span className="text-sm font-medium ml-1 text-gray-700">{rating.toFixed(1)}</span>
      </div>
    );
  };

  // Function to handle user rating
  const handleRating = (rating: number) => {
    setUserRating(rating);
    
    toast({
      title: "¡Gracias por tu valoración!",
      description: `Has valorado este curso con ${rating} ${rating === 1 ? 'estrella' : 'estrellas'}.`,
    });

    // In a real app, you would send this rating to your backend
    console.log(`User rated course ${course?.id} with ${rating} stars`);
  };

  // Function to render interactive rating stars for user input
  const renderUserRatingStars = () => {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700">Valora este curso:</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(null)}
              className="focus:outline-none"
              aria-label={`Puntuar ${star} ${star === 1 ? 'estrella' : 'estrellas'}`}
            >
              <Star 
                size={24} 
                className={cn(
                  "transition-all duration-200",
                  (hoverRating !== null ? star <= hoverRating : star <= (userRating || 0))
                    ? "fill-yellow-400 text-yellow-400 scale-110"
                    : "text-gray-300 hover:text-yellow-400"
                )}
              />
            </button>
          ))}
        </div>
        {userRating && (
          <span className="text-sm font-medium text-accent">
            ¡Gracias por tu valoración!
          </span>
        )}
      </div>
    );
  };

  const openWhatsApp = () => {
    if (course) {
      window.open(
        `https://wa.me/+34600000000?text=Hola, estoy interesado en el ${course.title}. ¿Podrían darme más información?`,
        '_blank'
      );
      
      toast({
        title: "WhatsApp",
        description: "Abriendo chat de WhatsApp...",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-pulse text-2xl">Cargando...</div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container-section py-20 flex-grow flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-6 text-center">Curso no encontrado</h1>
          <p className="text-gray-600 mb-8 text-center">
            Lo sentimos, no hemos podido encontrar el curso que estás buscando.
          </p>
          <Link to="/" className="btn-primary">
            Volver a la página principal
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related courses of the same type, excluding the current course
  const relatedCourses = courses
    .filter(c => c.id !== course.id && c.type === course.type)
    .slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-gray-50 to-white pt-10 md:pt-16">
          <div className="container-section">
            {/* Breadcrumbs using Shadcn UI */}
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Inicio</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/cursos">Cursos</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{course?.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content - 2/3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <h1 className="heading-lg mb-6">{course?.title}</h1>
                
                {/* Rating display */}
                <div className="flex items-center gap-2 mb-4">
                  {course && renderRating(course.rating)}
                  <span className="text-sm text-gray-500">
                    ({Math.floor(Math.random() * 50) + 50} valoraciones)
                  </span>
                </div>
                
                {/* Image */}
                <div className="rounded-xl overflow-hidden mb-8 shadow-md">
                  <img 
                    src={course?.image} 
                    alt={course?.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* User Rating Section - NEW */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">¿Qué te ha parecido este curso?</h3>
                  {renderUserRatingStars()}
                </div>
                
                {/* Tabs for mobile */}
                <div className="lg:hidden grid grid-cols-2 gap-3 mb-8">
                  <Button 
                    onClick={openWhatsApp}
                    variant="default" 
                    className="bg-accent hover:bg-accent/90 text-white flex items-center gap-2"
                  >
                    <MessageSquare size={18} />
                    WhatsApp
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a href="tel:+34600000000">
                      <Phone size={18} />
                      Llamar
                    </a>
                  </Button>
                </div>
                
                {/* Description */}
                <div className="prose max-w-none mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Descripción del curso</h2>
                  {course?.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Syllabus if available */}
                {course?.syllabus && course.syllabus.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Contenido del curso</h2>
                    <ul className="space-y-2">
                      {course.syllabus.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-accent flex-shrink-0 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* FAQs if available */}
                {course?.faqs && course.faqs.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Preguntas frecuentes</h2>
                    <Accordion type="single" collapsible className="w-full">
                      {course.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-gray-700">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}
              </motion.div>
              
              {/* Sidebar - 1/3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 sticky top-24">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Información del curso</h2>
                    <Badge className="bg-accent text-white text-lg px-3 py-1">
                      {course?.price}
                    </Badge>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-4 mb-6">
                    {course?.mode && (
                      <div className="flex items-start gap-3">
                        <Calendar size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium">Modalidad</p>
                          <p className="text-gray-600">{course.mode}</p>
                        </div>
                      </div>
                    )}
                    
                    {course?.locations && (
                      <div className="flex items-start gap-3">
                        <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium">Ubicaciones</p>
                          <p className="text-gray-600">{course.locations}</p>
                        </div>
                      </div>
                    )}
                    
                    {course?.duration && (
                      <div className="flex items-start gap-3">
                        <Calendar size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium">Duración</p>
                          <p className="text-gray-600">{course.duration}</p>
                        </div>
                      </div>
                    )}
                    
                    {course?.type && (
                      <div className="flex items-start gap-3">
                        <Wrench size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium">Tipo</p>
                          <p className="text-gray-600">
                            {course.type === 'course' ? 'Curso' : 
                             course.type === 'pack' ? 'Pack Formativo' : 'Equipo'}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      onClick={openWhatsApp}
                      className="w-full bg-accent hover:bg-accent/90 flex items-center justify-center gap-2 h-auto py-3"
                    >
                      <MessageSquare size={18} />
                      Consultar por WhatsApp
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2 h-auto py-3"
                      asChild
                    >
                      <a href="tel:+34600000000">
                        <Phone size={18} />
                        Llamar
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Related Courses Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="my-24 py-10 px-4 bg-gray-50 rounded-3xl shadow-inner"
            >
              <div className="text-center mb-10">
                <h2 className="heading-md relative inline-block">
                  Otros cursos que podrían interesarte
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent rounded-full"></div>
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                  Descubre más cursos y certificaciones para ampliar tus habilidades profesionales
                </p>
              </div>

              {/* Desktop Grid View */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCourses.map((relatedCourse) => (
                  <motion.div 
                    key={relatedCourse.id} 
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <CourseCard course={relatedCourse} />
                  </motion.div>
                ))}
              </div>

              {/* Mobile Carousel View */}
              <div className="md:hidden">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent className="-ml-2">
                    {relatedCourses.map((relatedCourse) => (
                      <CarouselItem key={relatedCourse.id} className="pl-2 basis-[85%]">
                        <CourseCard course={relatedCourse} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-6 gap-2">
                    <CarouselPrevious className="static translate-y-0 mx-2" />
                    <CarouselNext className="static translate-y-0 mx-2" />
                  </div>
                </Carousel>
              </div>

              {/* View All Courses Button */}
              <div className="mt-10 text-center">
                <Button asChild className="px-8 py-6 text-base shadow-lg group">
                  <Link to="/cursos" className="flex items-center gap-2">
                    Ver todos los cursos
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </Button>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
