import { Box, Button, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { colors } from '@/theme/tokens';

export type CourseType = 'all' | 'course' | 'pack' | 'equipment';
export type CourseLocation = 'Todos' | 'Coslada' | 'Alcorcón' | 'Ciempozuelos' | 'Alcantarilla';

const typeOptions: { value: CourseType; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'course', label: 'Cursos' },
  { value: 'pack', label: 'Packs' },
  { value: 'equipment', label: 'Equipos' },
];

const locations: CourseLocation[] = ['Todos', 'Coslada', 'Alcorcón', 'Ciempozuelos', 'Alcantarilla'];

interface FilterOptionProps {
  layoutId: string;
  isActive: boolean;
  onClick: () => void;
  label: string;
  count?: number;
}

// Selected option gets a shared-layout pill, so it slides from the previous option to the new one
const FilterOption = ({ layoutId, isActive, onClick, label, count }: FilterOptionProps) => (
  <Box
    component="button"
    type="button"
    aria-pressed={isActive}
    onClick={onClick}
    sx={{
      position: 'relative',
      isolation: 'isolate',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      px: 2,
      py: 1.25,
      border: 0,
      borderRadius: '12px',
      bgcolor: 'transparent',
      color: isActive ? 'common.white' : 'text.primary',
      fontFamily: 'inherit',
      fontSize: '0.9375rem',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      textAlign: 'left',
      cursor: 'pointer',
      transition: 'color 200ms, background-color 200ms',
      '&:hover': { bgcolor: isActive ? 'transparent' : 'rgba(43, 43, 43, 0.06)' },
      '&:focus-visible': { outline: '2px solid', outlineColor: 'primary.main', outlineOffset: 2 },
    }}
  >
    {isActive && (
      <motion.span
        layoutId={layoutId}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 12,
          backgroundColor: colors.dark,
          zIndex: -1,
        }}
      />
    )}
    <span>{label}</span>
    {count !== undefined && (
      <Box component="span" sx={{ fontVariantNumeric: 'tabular-nums', opacity: isActive ? 0.8 : 0.55, fontSize: '0.8125rem' }}>
        {count}
      </Box>
    )}
  </Box>
);

const groupSx = {
  display: 'flex',
  flexDirection: { xs: 'row', lg: 'column' },
  gap: { xs: 1, lg: 0.5 },
  overflowX: { xs: 'auto', lg: 'visible' },
  pb: { xs: 1, lg: 0 },
};

interface CatalogFiltersProps {
  activeTab: CourseType;
  onTabChange: (tab: CourseType) => void;
  selectedLocation: CourseLocation;
  onLocationChange: (location: CourseLocation) => void;
  typeCounts: Record<CourseType, number>;
  hasActiveFilters: boolean;
  onReset: () => void;
}

const CatalogFilters = ({
  activeTab,
  onTabChange,
  selectedLocation,
  onLocationChange,
  typeCounts,
  hasActiveFilters,
  onReset,
}: CatalogFiltersProps) => (
  <Stack spacing={3}>
    <Box>
      <Typography variant="body2" sx={{ color: 'text.secondary', px: 2, mb: 1 }}>
        Tipo
      </Typography>
      <Box sx={groupSx}>
        {typeOptions.map((option) => (
          <FilterOption
            key={option.value}
            layoutId="catalog-type-pill"
            label={option.label}
            count={typeCounts[option.value]}
            isActive={activeTab === option.value}
            onClick={() => onTabChange(option.value)}
          />
        ))}
      </Box>
    </Box>

    {/* Sede only applies to non-equipment courses */}
    {activeTab !== 'equipment' && (
      <Box>
        <Typography variant="body2" sx={{ color: 'text.secondary', px: 2, mb: 1 }}>
          Sede
        </Typography>
        <Box sx={groupSx}>
          {locations.map((location) => (
            <FilterOption
              key={location}
              layoutId="catalog-location-pill"
              label={location}
              isActive={selectedLocation === location}
              onClick={() => onLocationChange(location)}
            />
          ))}
        </Box>
      </Box>
    )}

    {hasActiveFilters && (
      <Button
        variant="text"
        onClick={onReset}
        sx={{ alignSelf: 'flex-start', px: 2, color: 'text.primary', textDecoration: 'underline', textUnderlineOffset: 4 }}
      >
        Quitar filtros
      </Button>
    )}
  </Stack>
);

export default CatalogFilters;
