
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Location = "Todos" | "Coslada" | "Alcorcón" | "Ciempozuelos" | "Alcantarilla";

interface CourseLocationFilterProps {
  selectedLocation: Location;
  onLocationChange: (location: Location) => void;
}

const locations: Location[] = ["Todos", "Coslada", "Alcorcón", "Ciempozuelos", "Alcantarilla"];

const CourseLocationFilter = ({ selectedLocation, onLocationChange }: CourseLocationFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {locations.map((location) => (
        <Badge
          key={location}
          variant={selectedLocation === location ? "default" : "outline"}
          className={cn(
            "px-4 py-2 text-sm cursor-pointer transition-all duration-200",
            selectedLocation === location 
              ? "bg-primary hover:bg-primary/90" 
              : "hover:bg-accent"
          )}
          onClick={() => onLocationChange(location)}
        >
          {location}
        </Badge>
      ))}
    </div>
  );
};

export default CourseLocationFilter;
