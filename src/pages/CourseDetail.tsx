
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MapPin, Calendar, Phone, MessageSquare, Wrench, Star, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
  const [votes, setVotes] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundCourse = courses.find((c) => c.slug === slug);
    
    if (foundCourse) {
      setCourse(foundCourse);
      // Initialize with random vote count and the course's rating
      const initialVotes = Math.floor(Math.random() * 50) + 50;
      setVotes(initialVotes);
      setAverageRating(foundCourse.rating || 4.5);
    }
    
    setLoading(false);
  }, [slug]);

  // Function to render rating stars based on the rating
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
        <span className="text-sm text-gray-500 ml-1">({votes} valoraciones)</span>
      </div>
    );
  };

  // Function to handle user rating
  const handleRating = (rating: number) => {
    setUserRating(rating);
    
    // Calculate new average rating - simulate backend processing
    const newTotalStars = averageRating * votes + rating;
    const newVotes = votes + 1;
    const newAverageRating = newTotalStars / newVotes;
    
    // Update state
    setVotes(newVotes);
    setAverageRating(newAverageRating);
    
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
      <div className="flex flex-col items-center sm:items-start gap-3">
        <span className="text-lg font-medium text-gray-700">Valora este curso:</span>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(null)}
              className="focus:outline-none group"
              aria-label={`Puntuar ${star} ${star === 1 ? 'estrella' : 'estrellas'}`}
            >
              <Star 
                size={32} 
                className={cn(
                  "transition-all duration-200",
                  (hoverRating !== null ? star <= hoverRating : star <= (userRating || 0))
                    ? "fill-yellow-400 text-yellow-400 scale-110"
                    : "text-gray-300 group-hover:text-yellow-400"
                )}
              />
            </button>
          ))}
        </div>
        {userRating && (
          <div className="mt-2 text-center sm:text-left">
            <span className="text-base font-semibold text-accent animate-fade-in">
              ¡Gracias por tu valoración!
            </span>
          </div>
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
          <Link to="/" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
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
      <main className="flex-grow pt-24 md:pt-28">
        <div className="bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            {/* Enhanced Breadcrumbs */}
            <Breadcrumb className="py-4 mb-6">
              <BreadcrumbList className="animate-fade-in">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center hover:text-primary transition-colors">
                      <span>Inicio</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/cursos" className="flex items-center hover:text-primary transition-colors">
                      <span>Cursos</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-medium">{course?.title}</BreadcrumbPage>
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
                {/* Enhanced Course Title and Rating */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{course?.title}</h1>
                
                {/* Enhanced Rating display */}
                <div className="flex items-center gap-2 mb-6">
                  {renderRating(averageRating)}
                </div>
                
                {/* Enhanced Image */}
                <div className="rounded-xl overflow-hidden mb-10 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={course?.image} 
                    alt={course?.title} 
                    className="w-full h-auto object-cover aspect-[16/9]"
                  />
                </div>

                {/* User Rating Section - Enhanced */}
                <Card className="mb-10 border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6 bg-white rounded-xl">
                    <h3 className="text-xl font-semibold mb-6 border-b pb-3 text-gray-800">¿Qué te ha parecido este curso?</h3>
                    {renderUserRatingStars()}
                  </CardContent>
                </Card>
                
                {/* Tabs for mobile */}
                <div className="lg:hidden grid grid-cols-2 gap-3 mb-8">
                  <Button 
                    onClick={openWhatsApp}
                    variant="default" 
                    className="bg-accent hover:bg-accent/90 text-white flex items-center gap-2 h-14 text-base"
                  >
                    <MessageSquare size={20} />
                    WhatsApp
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex items-center gap-2 h-14 text-base border-gray-300 hover:bg-gray-50"
                    asChild
                  >
                    <a href="tel:+34600000000">
                      <Phone size={20} />
                      Llamar
                    </a>
                  </Button>
                </div>
                
                {/* Enhanced Description */}
                <div className="prose max-w-none mb-10">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-800">Descripción del curso</h2>
                  {course?.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Enhanced Syllabus */}
                {course?.syllabus && course.syllabus.length > 0 && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contenido del curso</h2>
                    <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                      <ul className="space-y-3">
                        {course.syllabus.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-accent flex-shrink-0 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                            </span>
                            <span className="text-gray-700 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                {/* Enhanced FAQs */}
                {course?.faqs && course.faqs.length > 0 && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Preguntas frecuentes</h2>
                    <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm">
                      {course.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100">
                          <AccordionTrigger className="text-left py-4 px-6 hover:no-underline hover:bg-gray-50 rounded-t-xl">
                            <span className="font-medium text-gray-900">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-gray-700">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}
              </motion.div>
              
              {/* Sidebar - Enhanced */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <Card className="sticky top-28 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-0">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-primary/5 to-transparent p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900">Información del curso</h2>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border border-green-200 text-lg px-3 py-1 rounded-xl">
                          {course?.price}
                        </Badge>
                      </div>
                      
                      <Separator className="my-6 bg-gray-200" />
                      
                      <div className="space-y-5 mb-8">
                        {course?.mode && (
                          <div className="flex items-start gap-3">
                            <Calendar size={20} className="text-accent flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold text-gray-900">Modalidad</p>
                              <p className="text-gray-700">{course.mode}</p>
                            </div>
                          </div>
                        )}
                        
                        {course?.locations && (
                          <div className="flex items-start gap-3">
                            <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold text-gray-900">Ubicaciones</p>
                              <p className="text-gray-700">{course.locations}</p>
                            </div>
                          </div>
                        )}
                        
                        {course?.duration && (
                          <div className="flex items-start gap-3">
                            <Calendar size={20} className="text-accent flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold text-gray-900">Duración</p>
                              <p className="text-gray-700">{course.duration}</p>
                            </div>
                          </div>
                        )}
                        
                        {course?.type && (
                          <div className="flex items-start gap-3">
                            <Wrench size={20} className="text-accent flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold text-gray-900">Tipo</p>
                              <p className="text-gray-700">
                                {course.type === 'course' ? 'Curso' : 
                                course.type === 'pack' ? 'Pack Formativo' : 'Equipo'}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <Button 
                        onClick={openWhatsApp}
                        className="w-full bg-accent hover:bg-accent/90 flex items-center justify-center gap-2 h-auto py-4 text-base font-medium shadow-sm"
                      >
                        <MessageSquare size={20} />
                        Consultar por WhatsApp
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 h-auto py-4 text-base font-medium border-gray-300 hover:bg-gray-50 shadow-sm"
                        asChild
                      >
                        <a href="tel:+34600000000">
                          <Phone size={20} />
                          Llamar
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            {/* Related Courses Section - Enhanced */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="my-24 py-12 px-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-inner"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Otros cursos que podrían interesarte
                </h2>
                <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-4"></div>
                <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                  Descubre más cursos y certificaciones para ampliar tus habilidades profesionales
                </p>
              </div>

              {/* Desktop Grid View - Enhanced */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {relatedCourses.map((relatedCourse) => (
                  <motion.div 
                    key={relatedCourse.id} 
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="h-full"
                  >
                    <CourseCard course={relatedCourse} />
                  </motion.div>
                ))}
              </div>

              {/* Mobile Carousel View - Enhanced */}
              <div className="md:hidden">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full max-w-sm mx-auto"
                >
                  <CarouselContent className="-ml-2">
                    {relatedCourses.map((relatedCourse) => (
                      <CarouselItem key={relatedCourse.id} className="pl-2 basis-[100%]">
                        <div className="p-1">
                          <CourseCard course={relatedCourse} />
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

              {/* View All Courses Button - Enhanced */}
              <div className="mt-12 text-center">
                <Button asChild className="px-8 py-6 text-base shadow-lg group bg-primary hover:bg-primary/90">
                  <Link to="/cursos" className="flex items-center gap-2 font-medium">
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
