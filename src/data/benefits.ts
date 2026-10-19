// src/data/benefits.ts
export interface Benefit {
  id: number;
  title: string;
  description: string;
  column: string; // kanban column the benefit belongs to
}

export const benefits: Benefit[] = [
  {
    id: 1,
    title: "Operarios certificados",
    description: "Certificado con validez en toda España",
    column: "Certificación",
  },
  {
    id: 2,
    title: "10 años de experiencia",
    description: "Más de 10 años formando operarios de carretillas",
    column: "Experiencia",
  },
  {
    id: 3,
    title: "Precios congelados",
    description: "El precio no ha subido en 10 años. El curso básico cuesta 50 €.",
    column: "Precio y horario",
  },
  {
    id: 4,
    title: "Centros certificados",
    description: "Centros propios en Madrid y Murcia, con máquinas para practicar",
    column: "Certificación",
  },
  {
    id: 5,
    title: "Formación presencial",
    description: "Las prácticas se hacen con máquinas reales en nuestras sedes",
    column: "Formación y atención",
  },
  {
    id: 6,
    title: "Flexibilidad horaria",
    description: "Pregunta por fechas y horarios antes de reservar",
    column: "Precio y horario",
  },
  {
    id: 7,
    title: "Atención personalizada",
    description: "Un instructor te guía en las prácticas, paso a paso",
    column: "Formación y atención",
  },
  {
    id: 8,
    title: "Alta empleabilidad",
    description: "Bolsa de empleo con empresas colaboradoras",
    column: "Experiencia",
  },
];

export interface BenefitColumn {
  name: string;
  items: Benefit[];
}

// Groups the benefits into kanban columns, keeping the order of first appearance.
export const benefitColumns = benefits.reduce<BenefitColumn[]>((columns, benefit) => {
  const column = columns.find((c) => c.name === benefit.column);
  if (column) {
    column.items.push(benefit);
  } else {
    columns.push({ name: benefit.column, items: [benefit] });
  }
  return columns;
}, []);
