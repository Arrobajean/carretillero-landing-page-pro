
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

type CourseType = 'all' | 'course' | 'pack' | 'equipment';

interface CourseFilterProps {
  activeTab: CourseType;
  onTabChange: (tab: CourseType) => void;
}

const CourseFilter = ({ activeTab, onTabChange }: CourseFilterProps) => {
  const tabs = [
    { id: 'all', label: 'Todos' },
    { id: 'course', label: 'Cursos' },
    { id: 'pack', label: 'Packs' },
    { id: 'equipment', label: 'Equipos' }
  ];

  return (
    <div className="relative mb-10">
      <div className="flex flex-wrap justify-center gap-4">
        {tabs.map(tab => (
          <Button
            key={tab.id}
            onClick={() => onTabChange(tab.id as CourseType)}
            variant={activeTab === tab.id ? 'default' : 'outline'}
            className="rounded-full px-6 relative"
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="activePill"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: "spring", duration: 0.6 }}
                style={{ zIndex: -1 }}
              />
            )}
            {tab.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CourseFilter;
