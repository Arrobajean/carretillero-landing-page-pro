import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CourseCard from "@/components/courses/CourseCard";
import CourseLocationFilter from "../CourseLocationFilter";
import { useCoursesFilter, TabType } from "@/hooks/useCoursesFilter";

// Each card animates its own entrance, so cards that mount after a filter change still appear.
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.08 },
  }),
};

const tabs: { value: TabType; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "courses", label: "Cursos" },
  { value: "equipment", label: "Equipos" },
];

const CoursesSection = () => {
  const {
    selectedLocation,
    setSelectedLocation,
    activeTab,
    setActiveTab,
    rankedCourses,
  } = useCoursesFilter();
  const matchCount = rankedCourses.filter(({ matches }) => matches).length;

  return (
    <section id="courses-section" className="bg-[#fafafa] py-12">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <Typography variant="h2" sx={{ mb: 3 }}>
            Cursos, packs y equipos
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ maxWidth: 768, mx: "auto", mb: 3 }}
          >
            Cursos de carretillero, packs con varias formaciones y cursos para
            equipos concretos: frontal, retráctil, transpaleta, apilador y
            recogepedidos. Filtra por tipo o por sede.
          </Typography>

          {/* Tabs */}
          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            justifyContent="center"
            gap={2}
            sx={{ mb: 4 }}
          >
            {tabs.map((tab) => (
              <Button
                key={tab.value}
                variant={activeTab === tab.value ? "contained" : "outlined"}
                aria-pressed={activeTab === tab.value}
                onClick={() => setActiveTab(tab.value)}
                sx={{ px: 3 }}
              >
                {tab.label}
              </Button>
            ))}
          </Stack>

          {/* Filtro por sede */}
          {activeTab !== "equipment" && (
            <CourseLocationFilter
              selectedLocation={selectedLocation}
              onLocationChange={setSelectedLocation}
            />
          )}
        </motion.div>

        {matchCount === 0 && (
          <Typography color="text.secondary" sx={{ textAlign: "center", mb: 4 }}>
            Ninguna formación coincide con estos filtros. Prueba otra sede o quita el tipo.
          </Typography>
        )}

        {/* Grid desktop: cards reorder with the filters, they are never unmounted */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rankedCourses.slice(0, 8).map(({ item: course, matches }, index) => (
              <motion.div
                key={course.id}
                layout
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="show"
              >
                <Box
                  sx={{
                    height: "100%",
                    opacity: matches ? 1 : 0.4,
                    filter: matches ? "none" : "grayscale(0.6)",
                    transition: "opacity 400ms, filter 400ms",
                  }}
                >
                  <CourseCard course={course} compact />
                </Box>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carrusel mobile: remounted on filter change so the carousel re-initializes */}
        <div className="md:hidden">
          <Carousel
            key={`${activeTab}-${selectedLocation}`}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {rankedCourses.slice(0, 8).map(({ item: course, matches }) => (
                <CarouselItem key={course.id} className="pl-2 basis-full">
                  <Box sx={{ opacity: matches ? 1 : 0.4, filter: matches ? "none" : "grayscale(0.6)" }}>
                    <CourseCard course={course} />
                  </Box>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>

        {/* Botón de ver más */}
        <div className="flex justify-center mt-8">
          <Button
            component={Link}
            to="/cursos"
            variant="contained"
            size="large"
            sx={{ px: 4 }}
          >
            Ver todos los cursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
