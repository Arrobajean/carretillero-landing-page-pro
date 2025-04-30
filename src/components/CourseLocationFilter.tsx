
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

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
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {locations.map((location) => (
        <Badge
          key={location}
          variant={activeLocation === location ? "default" : "outline"}
          className={cn(
            "px-4 py-2 text-sm cursor-pointer transition-all duration-200",
            activeLocation === location 
              ? "bg-primary hover:bg-primary/90" 
              : "hover:bg-accent/10 hover:text-accent"
          )}
          onClick={() => handleLocationChange(location)}
        >
          {location}
        </Badge>
      ))}
    </div>
  );
};

export default CourseLocationFilter;
