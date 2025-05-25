// src/data/benefits.ts
export interface Benefit {
  id: number;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    id: 1,
    title: "Operarios certificados",
    description: "Certificación oficial reconocida a nivel nacional",
  },
  {
    id: 2,
    title: "10 años de experiencia",
    description: "Amplia trayectoria formando profesionales",
  },
  {
    id: 3,
    title: "Precios congelados",
    description: "Las mejores tarifas del mercado garantizadas",
  },
  {
    id: 4,
    title: "Centros certificados",
    description: "Instalaciones homologadas y certificadas",
  },
  {
    id: 5,
    title: "Cursos presenciales y online",
    description: "Adaptados a tus necesidades y disponibilidad",
  },
  {
    id: 6,
    title: "Flexibilidad horaria",
    description: "Múltiples horarios para adaptarnos a ti",
  },
  {
    id: 7,
    title: "Atención personalizada",
    description: "Te acompañamos durante todo el proceso",
  },
  {
    id: 8,
    title: "Alta empleabilidad",
    description: "Formación orientada a la inserción laboral",
  },
];
