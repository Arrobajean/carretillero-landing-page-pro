import { useState } from "react";
import courses, { Course } from "@/data/courses";
import { rankByMatch } from "@/utils/rankByMatch";

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

  const isMatch = (course: Course) => {
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
  };

  // Every course stays in the list; the ones matching the filters come first
  const rankedCourses = rankByMatch(courses, isMatch);

  return {
    selectedLocation,
    setSelectedLocation,
    activeTab,
    setActiveTab,
    rankedCourses,
  };
}
