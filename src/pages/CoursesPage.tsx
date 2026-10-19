import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CourseCard from '@/components/courses/CourseCard';
import CatalogFilters, { CourseLocation, CourseType } from '@/components/courses/CatalogFilters';
import courses, { Course } from '@/data/courses';
import { rankByMatch } from '@/utils/rankByMatch';

// Cards enter one after another, each on its own, so cards mounted by a filter change still show
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: Math.min(index, 8) * 0.06 },
  }),
};

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState<CourseType>('all');
  const [selectedLocation, setSelectedLocation] = useState<CourseLocation>('Todos');

  // Filter by type and location (location only applies to non-equipment types)
  const isMatch = (course: Course) => {
    const typeMatch = activeTab === 'all' || course.type === activeTab;

    const locationMatch = course.type === 'equipment' ||
                         selectedLocation === 'Todos' ||
                         (course.locations && course.locations.includes(selectedLocation));

    return Boolean(typeMatch && locationMatch);
  };

  // Every course stays on the page; the ones matching the filters come first
  const rankedCourses = rankByMatch(courses, isMatch);
  const matchCount = rankedCourses.filter(({ matches }) => matches).length;

  const typeCounts: Record<CourseType, number> = {
    all: courses.length,
    course: courses.filter((course) => course.type === 'course').length,
    pack: courses.filter((course) => course.type === 'pack').length,
    equipment: courses.filter((course) => course.type === 'equipment').length,
  };

  const hasActiveFilters = activeTab !== 'all' || selectedLocation !== 'Todos';

  const resetFilters = () => {
    setActiveTab('all');
    setSelectedLocation('Todos');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', pt: { xs: 16, md: 20 }, pb: { xs: 10, md: 16 } }}
      >
        <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h1" component="h1" sx={{ maxWidth: '12ch', mb: 2.5 }}>
              Catálogo de Cursos
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.125rem', maxWidth: '60ch', mb: { xs: 5, md: 7 } }}>
              Cursos de carretillero, packs formativos y formación para equipos concretos.
              Filtra por tipo o por sede para ver qué se imparte cerca de ti.
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: '240px minmax(0, 1fr)' },
              gap: { xs: 4, lg: 6 },
              alignItems: 'start',
            }}
          >
            <Box sx={{ position: { lg: 'sticky' }, top: { lg: 120 } }}>
              <CatalogFilters
                activeTab={activeTab}
                onTabChange={setActiveTab}
                selectedLocation={selectedLocation}
                onLocationChange={setSelectedLocation}
                typeCounts={typeCounts}
                hasActiveFilters={hasActiveFilters}
                onReset={resetFilters}
              />
            </Box>

            <Box>
              <Typography sx={{ color: 'text.secondary', fontVariantNumeric: 'tabular-nums', mb: 3 }}>
                Mostrando {matchCount} de {courses.length} cursos
              </Typography>

              {matchCount === 0 && (
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                  <Typography color="text.secondary">Ningún curso coincide con estos filtros.</Typography>
                  <Button variant="outlined" onClick={resetFilters}>
                    Quitar filtros
                  </Button>
                </Box>
              )}

              {/* Cards reorder with the filters and are never unmounted */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: 'minmax(0, 1fr)',
                    sm: 'repeat(2, minmax(0, 1fr))',
                    lg: 'repeat(3, minmax(0, 1fr))',
                  },
                  gap: 3,
                }}
              >
                {rankedCourses.map(({ item: course, matches }, index) => (
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
                        height: '100%',
                        opacity: matches ? 1 : 0.4,
                        filter: matches ? 'none' : 'grayscale(0.6)',
                        transition: 'opacity 400ms, filter 400ms',
                      }}
                    >
                      <CourseCard course={course} />
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default CoursesPage;
