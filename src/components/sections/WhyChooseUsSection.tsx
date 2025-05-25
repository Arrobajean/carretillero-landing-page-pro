import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { benefits } from "@/data/benefits";
import { benefitIcons } from "@/lib/iconMap";
// import the correct variant from motionVariants
// import the correct variant from motionVariants
import { fadeUpItem } from "@/lib/motionVariants"; // Make sure fadeUpItem is exported from motionVariants.ts

const WhyChooseUsSection = () => {
  return (
    <section
      id="why-choose-us-section"
      className="bg-white py-20 min-h-screen flex items-center"
    >
      <div className="container-section mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="heading-lg mb-6">¿Por qué elegir TuCarretillero?</h2>
          <p className="text-gray-700">
            Somos líderes en formación para operarios de carretillas elevadoras
            y maquinaria de carga. Estas son algunas de las razones por las que
            confiar en nosotros.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.id} variants={fadeUpItem}>
              <div
                className={cn(
                  "flex flex-col items-center text-center p-6 rounded-lg border border-gray-100",
                  "hover:border-primary/20 hover:shadow-md transition-all duration-300",
                  "bg-white h-full"
                )}
              >
                <div className="text-accent mb-4">
                  {benefitIcons[benefit.id]}
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
