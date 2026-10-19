import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  Chip,
  Rating,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import Forklift from "@mui/icons-material/Forklift";
import LocalOffer from "@mui/icons-material/LocalOffer";
import Place from "@mui/icons-material/Place";
import { Course } from '@/data/courses';
import { useImageReady } from '@/hooks/useImageReady';

interface CourseCardProps {
  course: Course;
  compact?: boolean; // narrower card centered in its column, used in the home grid
}

const CourseCard = ({ course, compact = false }: CourseCardProps) => {
  const isImageReady = useImageReady(course.image);
  const rating = course.rating || 4.8;

  // Helper function to get appropriate badge text based on course type and mode
  const getBadgeText = () => {
    if (course.type === 'equipment') return 'Equipos incluidos';
    if (course.mode && course.mode.includes('Online')) return 'Online + Presencial';
    if (course.type === 'pack') return 'Pack completo';
    return 'Certificación incluida';
  };

  return (
    <motion.div
      className="h-full"
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      {/* Fixed 4:5 proportion so every card has the same size */}
      <Card
        elevation={2}
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 5',
          maxWidth: compact ? 300 : undefined,
          mx: compact ? 'auto' : undefined,
          overflow: 'hidden',
          bgcolor: 'primary.main',
          color: 'common.white',
          transition: 'box-shadow 300ms',
          '&:hover': { boxShadow: 6 },
          '&:hover .course-card-media': { transform: 'scale(1.05)' },
        }}
      >
        {/* Full-bleed image, also the link to the course */}
        <CardActionArea
          component={Link}
          to={`/cursos/${course.slug}`}
          sx={{ position: 'absolute', inset: 0, height: '100%' }}
        >
          <Box
            className="course-card-media"
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${course.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 500ms ease',
            }}
          />
          {!isImageReady && (
            <Skeleton variant="rectangular" sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
          )}
        </CardActionArea>

        {!compact && (
          <Chip
            label={getBadgeText()}
            size="small"
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              bgcolor: 'rgba(255, 255, 255, 0.9)',
              color: 'primary.main',
              fontWeight: 500,
              backdropFilter: 'blur(4px)',
            }}
          />
        )}

        {/* Bottom overlay with the course data */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            p: 3,
            pt: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            background: 'linear-gradient(to top, rgba(27, 27, 27, 0.96) 45%, rgba(27, 27, 27, 0))',
            pointerEvents: 'none',
            '& > *': { pointerEvents: 'auto' },
          }}
        >
          {/* Title: always two lines tall so the rows below line up across cards */}
          <Typography
            variant="h6"
            component="h3"
            sx={{
              color: 'common.white',
              lineHeight: 1.25,
              minHeight: compact ? undefined : '2.5em',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {course.title}
          </Typography>

          {/* Location and equipment chips, below the title */}
          {!compact && (course.locations || course.type === 'equipment') && (
            <Stack direction="row" flexWrap="wrap" useFlexGap gap={1}>
              {course.locations && (
                <Chip
                  size="small"
                  variant="outlined"
                  icon={<Place />}
                  label={course.locations}
                  sx={{ color: 'common.white', borderColor: 'rgba(255, 255, 255, 0.4)', '& .MuiChip-icon': { color: 'common.white' } }}
                />
              )}
              {course.type === 'equipment' && (
                <Chip
                  size="small"
                  variant="outlined"
                  icon={<Forklift />}
                  label="Equipo"
                  sx={{ color: 'common.white', borderColor: 'rgba(255, 255, 255, 0.4)', '& .MuiChip-icon': { color: 'common.white' } }}
                />
              )}
            </Stack>
          )}

          {/* Price and Rating Row */}
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
            <Typography
              sx={{ color: 'common.white', fontWeight: 700, fontSize: '1.25rem', fontFamily: '"Bricolage Grotesque", sans-serif' }}
            >
              {course.price}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Rating
                value={rating}
                precision={0.1}
                readOnly
                size="small"
                sx={{ '& .MuiRating-iconEmpty': { color: 'rgba(255, 255, 255, 0.35)' } }}
              />
              <Typography variant="body2" sx={{ color: 'common.white', fontWeight: 500 }}>
                {rating.toFixed(1)}
              </Typography>
            </Stack>
          </Stack>

          {/* CTA Button */}
          <Button
            component={Link}
            to={`/cursos/${course.slug}`}
            variant="contained"
            fullWidth
            endIcon={course.type === 'equipment' ? <Forklift /> : <LocalOffer />}
            sx={{ bgcolor: 'common.white', color: 'primary.main', '&:hover': { bgcolor: 'grey.200' } }}
          >
            Ver detalles
          </Button>
        </Box>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
