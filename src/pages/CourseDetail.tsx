
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MapPin, Calendar, Phone, MessageSquare, Wrench, Star } from 'lucide-react';
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

const CourseDetail = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
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
                  <BreadcrumbPage>{course.title}</BreadcrumbPage>
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
                <h1 className="heading-lg mb-6">{course.title}</h1>
                
                {/* Rating display */}
                <div className="flex items-center gap-2 mb-4">
                  {renderRating(course.rating)}
                  <span className="text-sm text-gray-500">
                    ({Math.floor(Math.random() * 50) + 50} valoraciones)
                  </span>
                </div>
                
                {/* Image */}
                <div className="rounded-xl overflow-hidden mb-8 shadow-md">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-auto object-cover"
                  />
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
                  {course.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Syllabus if available */}
                {course.syllabus && course.syllabus.length > 0 && (
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
                {course.faqs && course.faqs.length > 0 && (
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
                      {course.price}
                    </Badge>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-4 mb-6">
                    {course.mode && (
                      <div className="flex items-start gap-3">
                        <Calendar size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium">Modalidad</p>
                          <p className="text-gray-600">{course.mode}</p>
                        </div>
                      </div>
                    )}
                    
                    {course.locations && (
                      <div className="flex items-start gap-3">
                        <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium">Ubicaciones</p>
                          <p className="text-gray-600">{course.locations}</p>
                        </div>
                      </div>
                    )}
                    
                    {course.duration && (
                      <div className="flex items-start gap-3">
                        <Calendar size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium">Duración</p>
                          <p className="text-gray-600">{course.duration}</p>
                        </div>
                      </div>
                    )}
                    
                    {course.type && (
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
            <div className="mt-20">
              <h2 className="heading-md mb-10 text-center">Otros cursos que podrían interesarte</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses
                  .filter(c => c.id !== course.id && c.type === course.type)
                  .slice(0, 3)
                  .map(relatedCourse => (
                    <Link 
                      key={relatedCourse.id} 
                      to={`/cursos/${relatedCourse.slug}`}
                      className={cn(
                        "group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300",
                        "flex flex-col h-full bg-white border border-gray-100"
                      )}
                    >
                      <div 
                        className="h-40 bg-cover bg-center"
                        style={{ backgroundImage: `url(${relatedCourse.image})` }}
                      ></div>
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                          {relatedCourse.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{relatedCourse.shortDescription}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <Badge className="bg-accent/90">{relatedCourse.price}</Badge>
                          <span className="text-sm text-primary font-medium">Ver detalles →</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
