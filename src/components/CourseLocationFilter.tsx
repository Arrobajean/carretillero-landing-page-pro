import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { colors } from "@/theme/tokens";

type Location = "Todos" | "Coslada" | "Alcorcón" | "Ciempozuelos" | "Alcantarilla";

interface CourseLocationFilterProps {
  selectedLocation: Location;
  onLocationChange: (location: Location) => void;
}

const locations: Location[] = ["Todos", "Coslada", "Alcorcón", "Ciempozuelos", "Alcantarilla"];

const CourseLocationFilter = ({ selectedLocation, onLocationChange }: CourseLocationFilterProps) => {
  // Create a local state to ensure the component re-renders correctly
  const [activeLocation, setActiveLocation] = useState<Location>(selectedLocation);

  // Update parent state when local state changes
  useEffect(() => {
    onLocationChange(activeLocation);
  }, [activeLocation, onLocationChange]);

  // Update local state when prop changes
  useEffect(() => {
    setActiveLocation(selectedLocation);
  }, [selectedLocation]);

  const handleLocationChange = (location: Location) => {
    setActiveLocation(location);
  };

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      useFlexGap
      justifyContent="center"
      gap={1.5}
      sx={{ mb: 6 }}
    >
      {locations.map((location) => {
        const isActive = activeLocation === location;

        return (
          <Box
            key={location}
            component="button"
            type="button"
            aria-pressed={isActive}
            onClick={() => handleLocationChange(location)}
            sx={{
              position: "relative",
              isolation: "isolate",
              px: 2.5,
              py: 1,
              borderRadius: "100px",
              border: 1,
              borderColor: isActive ? "transparent" : "divider",
              bgcolor: "transparent",
              color: isActive ? colors.white : "text.primary",
              fontFamily: "inherit",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "color 200ms, border-color 200ms",
              "&:hover": { borderColor: "primary.main" },
            }}
          >
            {/* Shared layout pill: it slides from the previous chip to the new one */}
            {isActive && (
              <motion.span
                layoutId="location-pill"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 100,
                  backgroundColor: colors.dark,
                  zIndex: -1,
                }}
              />
            )}
            {location}
          </Box>
        );
      })}
    </Stack>
  );
};

export default CourseLocationFilter;
