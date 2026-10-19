
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "¿Qué incluye el curso?",
    answer: "Formación teórica y práctica, material de estudio, prácticas con máquinas reales, evaluación y certificado. También te asesoramos sobre salidas laborales."
  },
  {
    question: "¿Cuánto dura?",
    answer: "Una jornada de 8 horas. El curso básico acaba el mismo día, y puedes salir con el certificado en la mano."
  },
  {
    question: "¿Puedo hacerlo sin experiencia?",
    answer: "Sí. El curso básico empieza por las normas de seguridad y el manejo de la máquina, y el instructor te acompaña en cada práctica. Si ya trabajas con carretillas y necesitas acreditarte, también puedes hacerlo."
  },
  {
    question: "¿Es presencial u online?",
    answer: "Las prácticas se hacen con la máquina, y eso exige estar en la sede. El curso Carretillero + Manipulador de Alimentos combina modalidad presencial y online."
  },
  {
    question: "¿Qué tipos de carretillas se enseñan a manejar?",
    answer: "Frontales, retráctiles, transpaletas eléctricas y apiladores. También hay un curso de recogepedidos para el picking en altura."
  },
  {
    question: "¿La certificación es reconocida a nivel nacional?",
    answer: "Sí. El certificado sigue el Real Decreto 1215/1997, sobre equipos de trabajo, y la Ley 31/1995 de Prevención de Riesgos Laborales. Lo aceptan empresas e inspecciones de trabajo en toda España."
  },
  {
    question: "¿Ofrecen bolsa de empleo?",
    answer: "Sí. Trabajamos con empresas colaboradoras que contratan a nuestros alumnos. Al terminar el curso tienes acceso a la bolsa de empleo, con ofertas que se actualizan cada semana."
  },
  {
    question: "¿Qué debo llevar el día del curso?",
    answer: "Tu DNI y ropa cómoda. Si tienes calzado de seguridad, tráelo; si no, te lo proporcionamos. El material didáctico y los equipos de protección individual van incluidos en el precio."
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
          <Typography variant="h2" sx={{ mb: 2 }}>
            Preguntas frecuentes
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ fontSize: "1.125rem", maxWidth: 768, mx: "auto" }}
          >
            Cursos, certificado, sedes y empleo
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              disableGutters
              variant="outlined"
              sx={{
                mb: 1.5,
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography sx={{ fontSize: "1.125rem", fontWeight: 500 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}

          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              ¿Tienes otra pregunta? Escríbenos por WhatsApp.
            </Typography>
            <Button
              href="https://wa.me/+34600000000?text=Hola, tengo una pregunta sobre el curso de carretillero."
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="secondary"
              startIcon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5027 3.49782C18.2087 1.24482 15.2067 0 12.0507 0C5.48573 0 0.101732 5.38306 0.101732 11.9931C0.101732 14.0728 0.648732 16.1525 1.70473 17.9961L0 24.0009L6.14373 22.3269C7.90673 23.2955 9.95973 23.8069 12.0507 23.8069C18.6157 23.8069 24.0007 18.4238 24.0007 11.8138C24.0007 8.65782 22.7557 5.65582 20.5027 3.49782ZM12.0507 21.8064C10.2756 21.8064 8.53627 21.2951 7.04943 20.2935L6.68327 20.0902L2.86673 21.0918L3.88873 17.3935L3.66073 17.0093C2.56273 15.4556 1.98273 13.7239 1.98273 11.9931C1.98273 6.45566 6.51273 1.92823 12.0507 1.92823C14.6885 1.92823 17.1422 2.96517 19.0135 4.81577C20.8657 6.66636 21.9637 9.14045 21.9637 11.8138C21.9637 17.3513 17.5888 21.8064 12.0507 21.8064Z" />
                </svg>
              }
            >
              Contáctanos
            </Button>
          </Box>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
