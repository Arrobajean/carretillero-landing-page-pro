
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Button,
  IconButton,
  Link as MuiLink,
  List,
  ListItem,
  ListItemIcon,
  Rating,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Build from "@mui/icons-material/Build";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Chat from "@mui/icons-material/Chat";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import Schedule from "@mui/icons-material/Schedule";
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import courses, { Course } from '@/data/courses';
import RatingStars from '@/components/courses/RatingStars';
import CourseSlider from '@/components/courses/CourseSlider';
import { useImageReady } from '@/hooks/useImageReady';
import { fonts } from '@/theme/tokens';

const CourseDetail = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [votes, setVotes] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const { toast } = useToast();
  const isImageReady = useImageReady(course?.image);

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
      <div className="min-h-screen flex flex-col">
        <Header />
        <Box sx={{ flexGrow: 1, width: '100%', maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, pt: { xs: 16, md: 20 }, pb: 12 }}>
          <Skeleton variant="text" sx={{ fontSize: '3rem', maxWidth: 640, mb: 3 }} />
          <Skeleton variant="rectangular" sx={{ width: '100%', aspectRatio: '16 / 9', borderRadius: '12px' }} />
        </Box>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3, px: 2, pt: 20, pb: 12, textAlign: 'center' }}>
          <Typography variant="h3" component="h1">
            No encontramos ese curso
          </Typography>
          <Typography color="text.secondary">
            Puede que el enlace sea antiguo o que el curso ya no esté en el catálogo.
          </Typography>
          <Button component={Link} to="/" variant="contained" size="large">
            Volver al inicio
          </Button>
        </Box>
        <Footer />
      </div>
    );
  }

  // Three related courses: same type first, topped up with other courses when there are not enough
  const sameType = courses.filter(c => c.id !== course.id && c.type === course.type);
  const otherTypes = courses.filter(c => c.id !== course.id && c.type !== course.type);
  const relatedCourses = [...sameType, ...otherTypes].slice(0, 3);

  const typeLabel = course.type === 'course' ? 'Curso' : course.type === 'pack' ? 'Pack formativo' : 'Equipo';

  // Key facts shown in the strip under the title
  const facts = [
    { label: 'Modalidad', value: course.mode, icon: <CalendarMonth fontSize="small" /> },
    { label: 'Ubicaciones', value: course.locations, icon: <Place fontSize="small" /> },
    { label: 'Duración', value: course.duration, icon: <Schedule fontSize="small" /> },
    { label: 'Tipo', value: typeLabel, icon: <Build fontSize="small" /> },
  ].filter((fact) => Boolean(fact.value));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', pt: { xs: 16, md: 20 }, pb: { xs: 16, lg: 12 } }}
      >
        <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 } }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
            <MuiLink component={Link} to="/" underline="hover" color="text.secondary" sx={{ fontWeight: 500 }}>
              Inicio
            </MuiLink>
            <MuiLink component={Link} to="/cursos" underline="hover" color="text.secondary" sx={{ fontWeight: 500 }}>
              Cursos
            </MuiLink>
            <Typography sx={{ fontWeight: 500, color: 'text.primary' }}>{course.title}</Typography>
          </Breadcrumbs>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1fr) 340px' },
              gap: { xs: 4, lg: 8 },
              alignItems: 'start',
            }}
          >
            {/* Main column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, maxWidth: '18ch', mb: 2 }}
              >
                {course.title}
              </Typography>

              <Box sx={{ mb: 4 }}>
                <RatingStars rating={averageRating} votes={votes} size="small" />
              </Box>

              <Box sx={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: '12px', overflow: 'hidden', mb: 5 }}>
                {!isImageReady && (
                  <Skeleton variant="rectangular" sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
                )}
                <Box
                  component="img"
                  src={course.image}
                  alt={course.title}
                  sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              {facts.length > 0 && (
                <Box
                  component="dl"
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: `repeat(${facts.length}, minmax(0, 1fr))` },
                    borderTop: 1,
                    borderBottom: 1,
                    borderColor: 'divider',
                    m: 0,
                    mb: 8,
                  }}
                >
                  {facts.map((fact) => (
                    <Box key={fact.label} sx={{ py: 2.5, pr: 2 }}>
                      <Typography
                        component="dt"
                        variant="body2"
                        sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.5 }}
                      >
                        {fact.icon}
                        {fact.label}
                      </Typography>
                      <Typography component="dd" sx={{ m: 0, fontWeight: 600, color: 'text.primary' }}>
                        {fact.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}

              <Box component="section" sx={{ mb: 8, minHeight: 0 }}>
                <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
                  Descripción del curso
                </Typography>
                {course.longDescription.split('\n\n').map((paragraph, index) => (
                  <Typography
                    key={index}
                    sx={{ maxWidth: '68ch', fontSize: '1.0625rem', lineHeight: 1.7, color: 'text.primary', mb: 2 }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Box>

              {course.syllabus && course.syllabus.length > 0 && (
                <Box component="section" sx={{ mb: 8, minHeight: 0 }}>
                  <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
                    Contenido del curso
                  </Typography>
                  <List disablePadding>
                    {course.syllabus.map((item, index) => (
                      <ListItem
                        key={index}
                        disableGutters
                        sx={{ alignItems: 'flex-start', py: 1.5, borderBottom: 1, borderColor: 'divider' }}
                      >
                        <ListItemIcon sx={{ minWidth: 36, mt: 0.25 }}>
                          <CheckCircle sx={{ color: 'primary.main' }} />
                        </ListItemIcon>
                        <Typography sx={{ fontWeight: 500 }}>{item}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {course.faqs && course.faqs.length > 0 && (
                <Box component="section" sx={{ mb: 8, minHeight: 0 }}>
                  <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
                    Preguntas frecuentes
                  </Typography>
                  {course.faqs.map((faq, index) => (
                    <Accordion
                      key={index}
                      disableGutters
                      elevation={0}
                      square
                      sx={{
                        bgcolor: 'transparent',
                        borderTop: 1,
                        borderColor: 'divider',
                        '&:last-of-type': { borderBottom: 1 },
                        '&:before': { display: 'none' },
                      }}
                    >
                      <AccordionSummary expandIcon={<ExpandMore />} sx={{ px: 0 }}>
                        <Typography sx={{ fontWeight: 500, color: 'text.primary' }}>{faq.question}</Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ px: 0, pb: 3 }}>
                        <Typography sx={{ color: 'text.primary', maxWidth: '68ch' }}>{faq.answer}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              )}

              <Box component="section" sx={{ pt: 4, minHeight: 0, borderTop: 1, borderColor: 'divider' }}>
                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                  ¿Qué te ha parecido este curso?
                </Typography>
                <Stack direction="row" alignItems="center" flexWrap="wrap" useFlexGap spacing={2}>
                  <Rating
                    size="large"
                    value={userRating}
                    onChange={(_, value) => {
                      if (value) handleRating(value);
                    }}
                  />
                  {userRating && (
                    <Typography sx={{ fontWeight: 600, color: 'primary.main' }}>
                      ¡Gracias por tu valoración!
                    </Typography>
                  )}
                </Stack>
              </Box>
            </motion.div>

            {/* Purchase panel: one surface, sticky on desktop */}
            <Box
              component="aside"
              sx={{
                display: { xs: 'none', lg: 'block' },
                position: 'sticky',
                top: 120,
                bgcolor: 'background.paper',
                border: 1,
                borderColor: 'divider',
                borderRadius: '16px',
                p: 3.5,
                boxShadow: '0 16px 40px rgba(27, 27, 27, 0.1)',
              }}
            >
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Precio
              </Typography>
              <Typography
                sx={{
                  fontFamily: fonts.numbers,
                  fontWeight: 700,
                  fontSize: '3rem',
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  fontVariantNumeric: 'tabular-nums',
                  color: 'text.primary',
                  mb: 3,
                }}
              >
                {course.price}
              </Typography>
              <Stack spacing={1.5}>
                <Button
                  onClick={openWhatsApp}
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  startIcon={<Chat />}
                >
                  Consultar por WhatsApp
                </Button>
                <Button href="tel:+34600000000" variant="outlined" size="large" fullWidth startIcon={<Phone />}>
                  Llamar
                </Button>
              </Stack>
            </Box>
          </Box>

          {/* Related courses */}
          <Box sx={{ mt: 12 }}>
            <CourseSlider
              courses={relatedCourses}
              title="Otros cursos que podrían interesarte"
              description="Más formaciones que puedes hacer con nosotros"
              autoRotate={true}
              autoRotateInterval={6000}
            />
          </Box>
        </Box>
      </Box>

      {/* Mobile action bar: price and contact always within reach */}
      <Box
        sx={{
          display: { xs: 'flex', lg: 'none' },
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          alignItems: 'center',
          gap: 2,
          px: 2,
          py: 1.5,
          bgcolor: 'background.paper',
          borderTop: 1,
          borderColor: 'divider',
          boxShadow: '0 -8px 24px rgba(27, 27, 27, 0.08)',
        }}
      >
        <Box sx={{ mr: 'auto' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Precio
          </Typography>
          <Typography
            sx={{ fontFamily: fonts.numbers, fontWeight: 700, fontSize: '1.5rem', lineHeight: 1.1, fontVariantNumeric: 'tabular-nums' }}
          >
            {course.price}
          </Typography>
        </Box>
        <Button onClick={openWhatsApp} variant="contained" color="secondary" startIcon={<Chat />}>
          WhatsApp
        </Button>
        <IconButton href="tel:+34600000000" aria-label="Llamar" sx={{ border: 1, borderColor: 'divider' }}>
          <Phone />
        </IconButton>
      </Box>

      <Footer />
    </div>
  );
};

export default CourseDetail;
