
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué incluye el curso?",
    answer: "Nuestro curso incluye formación teórica y práctica completa, materiales de estudio, acceso a maquinaria real para prácticas, evaluación de competencias, certificación oficial y asesoramiento laboral. Todo lo necesario para que puedas iniciar tu carrera como carretillero profesional."
  },
  {
    question: "¿Cuánto dura?",
    answer: "El curso tiene una duración de una jornada completa (8 horas). Está diseñado para ser intensivo y eficiente, permitiéndote obtener tu certificado oficial en un solo día sin comprometer la calidad del aprendizaje."
  },
  {
    question: "¿Puedo hacerlo sin experiencia?",
    answer: "¡Absolutamente! Nuestro curso está diseñado tanto para principiantes como para operarios con experiencia que necesitan certificarse. Empezamos desde lo básico y nuestros instructores te guiarán paso a paso en todo el proceso de aprendizaje."
  },
  {
    question: "¿Es presencial u online?",
    answer: "El curso es 100% presencial, como exige el Artículo 19 del Real Decreto Ley de Prevención de Riesgos Laborales para la formación de operarios de maquinaria. Esto garantiza que adquieras las habilidades prácticas necesarias y obtengas una certificación válida y reconocida."
  },
  {
    question: "¿Qué tipos de carretillas se enseñan a manejar?",
    answer: "Nuestro curso cubre varios tipos de carretillas, incluyendo carretillas frontales, retráctiles, transpaletas eléctricas y apiladoras. Esto te brinda una formación completa y versátil para adaptarte a diferentes entornos laborales."
  },
  {
    question: "¿La certificación es reconocida a nivel nacional?",
    answer: "Sí, nuestro certificado cumple con todos los requisitos del Real Decreto 1215/1997 y la Ley de Prevención de Riesgos Laborales, siendo reconocido por empresas e inspecciones de trabajo en todo el territorio nacional."
  },
  {
    question: "¿Ofrecen bolsa de empleo?",
    answer: "Sí, contamos con una amplia red de empresas colaboradoras que confían en nuestros alumnos para cubrir sus vacantes. Al finalizar el curso, tendrás acceso a nuestra bolsa de empleo exclusiva con ofertas actualizadas semanalmente."
  },
  {
    question: "¿Qué debo llevar el día del curso?",
    answer: "Solo necesitas traer tu DNI o documento de identidad, ropa cómoda y calzado de seguridad si lo tienes (si no dispones de él, te lo proporcionaremos). Todo el material didáctico y equipos de protección individual están incluidos en el precio del curso."
  }
];

const FAQSection = () => {
  return (
    <section id="faq-section" className="bg-white py-20">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Resolvemos tus dudas sobre nuestros cursos de carretillero
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p className="py-2">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              ¿No has encontrado respuesta a tu pregunta?
            </p>
            <a
              href="https://wa.me/+34600000000?text=Hola, tengo una pregunta sobre el curso de carretillero."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5027 3.49782C18.2087 1.24482 15.2067 0 12.0507 0C5.48573 0 0.101732 5.38306 0.101732 11.9931C0.101732 14.0728 0.648732 16.1525 1.70473 17.9961L0 24.0009L6.14373 22.3269C7.90673 23.2955 9.95973 23.8069 12.0507 23.8069C18.6157 23.8069 24.0007 18.4238 24.0007 11.8138C24.0007 8.65782 22.7557 5.65582 20.5027 3.49782ZM12.0507 21.8064C10.2756 21.8064 8.53627 21.2951 7.04943 20.2935L6.68327 20.0902L2.86673 21.0918L3.88873 17.3935L3.66073 17.0093C2.56273 15.4556 1.98273 13.7239 1.98273 11.9931C1.98273 6.45566 6.51273 1.92823 12.0507 1.92823C14.6885 1.92823 17.1422 2.96517 19.0135 4.81577C20.8657 6.66636 21.9637 9.14045 21.9637 11.8138C21.9637 17.3513 17.5888 21.8064 12.0507 21.8064Z" />
              </svg>
              Contáctanos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
