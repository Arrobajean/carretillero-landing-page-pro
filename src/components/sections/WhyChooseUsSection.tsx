import { motion } from "framer-motion";
import { Box, Stack, Typography } from "@mui/material";
import Verified from "@mui/icons-material/Verified";
import EmojiEvents from "@mui/icons-material/EmojiEvents";
import Sell from "@mui/icons-material/Sell";
import Groups from "@mui/icons-material/Groups";
import { benefitColumns } from "@/data/benefits";
import { benefitIcons } from "@/lib/iconMap";
import { fadeUpItem } from "@/lib/motionVariants";

const columnIcons: Record<string, JSX.Element> = {
  Certificación: <Verified />,
  Experiencia: <EmojiEvents />,
  "Precio y horario": <Sell />,
  "Formación y atención": <Groups />,
};

const WhyChooseUsSection = () => {
  return (
    <section
      id="why-choose-us-section"
      className="bg-primary py-20 min-h-screen flex items-center"
    >
      <div className="container-section mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Typography variant="h2" sx={{ mb: 3, color: "#FFFFFF" }}>
            ¿Por qué elegir TuCarretillero?
          </Typography>
          <Typography sx={{ color: "rgba(255, 255, 255, 0.9)" }}>
            Formamos a operarios de carretillas elevadoras y maquinaria de carga.
            Estos son los puntos que ofrecemos, agrupados por tema.
          </Typography>
        </motion.div>

        {/* Kanban board: one column per theme, each benefit is a row inside its column */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {benefitColumns.map((column) => (
            <Box
              key={column.name}
              sx={{
                bgcolor: "#e4e4e40d",
                border: 1,
                borderColor: "#e4e4e41a",
                borderRadius: "20px",
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Stack direction="row" justifyContent="center" alignItems="center" spacing={1.5}>
                <Box sx={{ color: "#FFFFFF", display: "grid", "& svg": { fontSize: 26 } }}>
                  {columnIcons[column.name]}
                </Box>
                <Typography variant="h6" component="h3" sx={{ fontSize: "1.125rem", color: "#FFFFFF", textAlign: "center" }}>
                  {column.name}
                </Typography>
              </Stack>

              <Stack spacing={3}>
                {column.items.map((benefit) => (
                  <motion.div key={benefit.id} variants={fadeUpItem} style={{ textAlign: "center" }}>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                      <Box sx={{ color: "#FFFFFF", display: "grid", "& svg": { fontSize: 22 } }}>
                        {benefitIcons[benefit.id]}
                      </Box>
                      <Typography variant="h6" component="h4" sx={{ fontSize: "1rem", color: "#FFFFFF", textAlign: "center" }}>
                        {benefit.title}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.9)", mt: 0.75, textAlign: "center" }}>
                      {benefit.description}
                    </Typography>
                  </motion.div>
                ))}
              </Stack>
            </Box>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
