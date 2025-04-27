
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const LegalNoticeSection = () => {
  return (
    <section id="legal-notice-section" className="bg-secondary py-20">
      <div className="container-section">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary p-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-accent mb-4">Información Legal</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Formación obligatoria según Real Decreto de Prevención de Riesgos Laborales
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6"
          >
            <div className="prose max-w-none">
              <p className="mb-4">
                El <strong>Artículo 19</strong> del Real Decreto de Prevención de Riesgos Laborales establece 
                la <strong>obligatoriedad de la formación presencial</strong> para los operarios de maquinaria 
                de carga y elevación.
              </p>

              <blockquote className={cn(
                "border-l-4 border-primary pl-4 italic my-6 text-gray-700",
                "bg-gray-50 p-4 rounded-r"
              )}>
                "En cumplimiento del deber de protección, el empresario deberá garantizar que cada 
                trabajador reciba una formación teórica y práctica, suficiente y adecuada, en materia 
                preventiva, tanto en el momento de su contratación, cualquiera que sea la modalidad o 
                duración de ésta, como cuando se produzcan cambios en las funciones que desempeñe o se 
                introduzcan nuevas tecnologías o cambios en los equipos de trabajo."
              </blockquote>

              <p className="mb-4">
                En TuCarretillero cumplimos con todos los requisitos legales para la formación de operarios,
                garantizando que nuestros alumnos reciben la capacitación adecuada según la normativa vigente.
              </p>

              <p className="font-medium text-primary">
                Todos nuestros cursos incluyen:
              </p>

              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Formación teórica sobre prevención de riesgos</li>
                <li>Prácticas con maquinaria real</li>
                <li>Evaluación de competencias</li>
                <li>Certificación oficial</li>
              </ul>

              <p className="text-sm text-gray-600">
                Para más información sobre requisitos legales, consulta el Real Decreto 1215/1997 sobre 
                disposiciones mínimas de seguridad y salud para la utilización de equipos de trabajo.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LegalNoticeSection;
