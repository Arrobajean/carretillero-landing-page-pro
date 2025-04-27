
import { motion } from "framer-motion";
import { 
  BadgeCheck, 
  Clock, 
  Award, 
  Users, 
  Star, 
  HeartHandshake, 
  BookCheck, 
  Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Operarios certificados",
    description: "Certificación oficial reconocida a nivel nacional",
    icon: <BadgeCheck className="h-10 w-10" />
  },
  {
    id: 2,
    title: "10 años de experiencia",
    description: "Amplia trayectoria formando profesionales",
    icon: <Award className="h-10 w-10" />
  },
  {
    id: 3,
    title: "Precios congelados",
    description: "Las mejores tarifas del mercado garantizadas",
    icon: <Star className="h-10 w-10" />
  },
  {
    id: 4,
    title: "Centros certificados",
    description: "Instalaciones homologadas y certificadas",
    icon: <BookCheck className="h-10 w-10" />
  },
  {
    id: 5,
    title: "Cursos presenciales y online",
    description: "Adaptados a tus necesidades y disponibilidad",
    icon: <Users className="h-10 w-10" />
  },
  {
    id: 6,
    title: "Flexibilidad horaria",
    description: "Múltiples horarios para adaptarnos a ti",
    icon: <Clock className="h-10 w-10" />
  },
  {
    id: 7,
    title: "Atención personalizada",
    description: "Te acompañamos durante todo el proceso",
    icon: <HeartHandshake className="h-10 w-10" />
  },
  {
    id: 8,
    title: "Alta empleabilidad",
    description: "Formación orientada a la inserción laboral",
    icon: <Calendar className="h-10 w-10" />
  }
];

const WhyChooseUsSection = () => {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="why-choose-us-section" className="bg-white py-20 min-h-screen flex items-center">
      <div className="container-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">¿Por qué elegir TuCarretillero?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Somos líderes en formación para operarios de carretillas elevadoras 
            y maquinaria de carga. Estas son algunas de las razones por las que 
            confiar en nosotros.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.id} variants={item}>
              <div className={cn(
                "flex flex-col items-center text-center p-6 rounded-lg border border-gray-100",
                "hover:border-primary/20 hover:shadow-md transition-all duration-300",
                "bg-white h-full"
              )}>
                <div className="text-accent mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
