import { useState } from "react";
import courses from "@/data/courses";

export type Location =
  | "Todos"
  | "Coslada"
  | "Alcorcón"
  | "Ciempozuelos"
  | "Alcantarilla";
export type TabType = "all" | "courses" | "equipment";

export function useCoursesFilter() {
  const [selectedLocation, setSelectedLocation] = useState<Location>("Todos");
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const filteredCourses = courses.filter((course) => {
    const locationMatch =
      course.type !== "equipment"
        ? selectedLocation === "Todos" ||
          (course.locations && course.locations.includes(selectedLocation))
        : true;

    const tabMatch =
      activeTab === "all" ||
      (activeTab === "courses" &&
        (course.type === "course" || course.type === "pack")) ||
      (activeTab === "equipment" && course.type === "equipment");

    return locationMatch && tabMatch;
  });

  return {
    selectedLocation,
    setSelectedLocation,
    activeTab,
    setActiveTab,
    filteredCourses,
  };
}
