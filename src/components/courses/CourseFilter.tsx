import { Button, Stack } from '@mui/material';

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
    <Stack direction="row" flexWrap="wrap" useFlexGap justifyContent="center" gap={2} sx={{ mb: 5 }}>
      {tabs.map(tab => (
        <Button
          key={tab.id}
          variant={activeTab === tab.id ? 'contained' : 'outlined'}
          aria-pressed={activeTab === tab.id}
          onClick={() => onTabChange(tab.id as CourseType)}
          sx={{ px: 3 }}
        >
          {tab.label}
        </Button>
      ))}
    </Stack>
  );
};

export default CourseFilter;
