export interface Course {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  price: string;
  mode?: "Presencial" | "Online" | "Presencial y Online";
  locations?: string;
  image: string;
  duration?: string;
  syllabus?: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  type: "course" | "pack" | "equipment";
  rating?: number;
  seoTitle?: string;
  seoDescription?: string;
}

const courses: Course[] = [
  // Courses
  {
    id: 1,
    slug: "curso-basico-carretillero",
    title: "Curso Básico de Carretillero",
    shortDescription:
      "Carretillero en un solo día: teoría, prácticas con máquinas reales y certificado.",
    longDescription:
      "Este curso te prepara para manejar una carretilla elevadora con seguridad. Dura 8 horas: una parte de teoría sobre normativa y tipos de carretilla, y después prácticas con equipos reales en nuestras instalaciones.\n\nVerás seis bloques: normativa de seguridad, tipos de carretillas elevadoras, mantenimiento básico, técnicas de conducción, manipulación de cargas y prácticas con equipos reales. No necesitas experiencia previa.\n\nAl terminar recibes un certificado con validez en toda España. Acredita tus competencias para trabajar con carretillas en almacenes, industrias y centros logísticos.",
    price: "50€",
    mode: "Presencial",
    locations: "Todas las sedes",
    image:
      "/images/cursos/mujer-conduciendo-la-maquina-de-carga-de-almacen.jpg",
    duration: "1 día (8 horas)",
    syllabus: [
      "Módulo 1: Normativa de seguridad",
      "Módulo 2: Tipos de carretillas elevadoras",
      "Módulo 3: Mantenimiento básico",
      "Módulo 4: Técnicas de conducción",
      "Módulo 5: Manipulación de cargas",
      "Módulo 6: Prácticas con equipos reales",
    ],
    faqs: [
      {
        question: "¿Necesito experiencia previa para realizar este curso?",
        answer:
          "No. El curso básico está pensado para personas que nunca han manejado una carretilla.",
      },
      {
        question: "¿El certificado tiene validez nacional?",
        answer:
          "Sí. El certificado vale en toda España y cumple la normativa vigente de prevención de riesgos laborales.",
      },
    ],
    type: "course",
    rating: 4.8,
  },
  {
    id: 2,
    slug: "carretillero-puente-grua",
    title: "Carretillero + Puente Grúa",
    shortDescription:
      "Dos cursos en dos días: carretillero y puente grúa, con certificado para cada uno.",
    longDescription:
      "Este pack reúne dos formaciones en dos días. El primer día es de carretillero elevador. El segundo es de puente grúa: la grúa que se desplaza sobre raíles en la parte alta de la nave y levanta cargas pesadas.\n\nCada día combina teoría y práctica con equipos reales. Al terminar recibes un certificado por cada especialidad, así que no necesitas hacer dos cursos por separado.",
    price: "90€",
    mode: "Presencial",
    locations: "Coslada, Alcorcón, Ciempozuelos",
    image:
      "/images/cursos/carretilla-elevadora.avif",
    duration: "2 días (16 horas)",
    syllabus: [
      "Módulo Carretillero (1er día)",
      "Módulo Puente Grúa (2º día)",
      "Prácticas combinadas",
      "Evaluación y certificación",
    ],
    type: "course",
    rating: 4.9,
  },
  {
    id: 3,
    slug: "carretillero-manipulador-alimentos",
    title: "Carretillero + Manipulador de Alimentos",
    shortDescription:
      "Carretillero y manipulador de alimentos en un solo curso, para trabajar en logística alimentaria.",
    longDescription:
      "Este curso es para quien quiere trabajar en logística alimentaria. Dura 12 horas y da dos certificados: carretillero y manipulador de alimentos.\n\nEn el módulo de carretillero aprendes a manejar la máquina con seguridad. En el de manipulación de alimentos, los protocolos de higiene y las buenas prácticas que exige la normativa.\n\nEl curso es presencial y online. Consulta por WhatsApp qué parte se hace en cada formato. Al terminar tienes los dos certificados, útiles en almacenes, centros logísticos y empresas de distribución de alimentos.",
    price: "70€",
    mode: "Presencial y Online",
    locations: "Todas las sedes",
    image: "/images/cursos/manipulador-alimentos.jpg",
    duration: "1 día y medio (12 horas)",
    type: "course",
    rating: 4.7,
  },
  {
    id: 4,
    slug: "pack-top-formacion",
    title: "PACK TOP FORMACIÓN",
    shortDescription:
      "Cinco formaciones en cinco días: carretillero, plataforma elevadora, puente grúa, radiofrecuencia y manipulador de alimentos.",
    longDescription:
      "El Pack Top reúne cinco formaciones en cinco días, 40 horas en total. Al terminar obtienes los cinco certificados.\n\nCarretillero cubre el manejo de carretillas elevadoras. Plataforma elevadora enseña a trabajar en altura con seguridad. Puente grúa cubre el control de la elevación industrial. Radiofrecuencia enseña a gestionar el inventario con sistemas RF. Manipulador de alimentos trata la higiene y la seguridad alimentaria.\n\nCada módulo mezcla teoría y práctica con equipos reales.",
    price: "160€",
    mode: "Presencial",
    locations: "Coslada, Alcorcón",
    image:
      "/images/cursos/empleados-de-trabajo-en-equipo-en-almacen.jpg",
    duration: "5 días (40 horas)",
    type: "pack",
    rating: 5.0,
  },
  {
    id: 5,
    slug: "pack-mega-formacion",
    title: "PACK MEGA FORMACIÓN",
    shortDescription:
      "Los cinco certificados del Pack Top y, además, formación en equipos de limpieza industrial.",
    longDescription:
      "El Pack Mega incluye todo el Pack Top y un módulo más: equipos de limpieza industrial. Son seis días, 48 horas, y seis certificados.\n\nEs para quien quiere un perfil polivalente en almacenes, fábricas y logística. Cada módulo usa equipos profesionales en la práctica.",
    price: "190€",
    mode: "Presencial",
    locations: "Coslada",
    image: "/images/cursos/pack-mega-formacion.jpg",
    duration: "6 días (48 horas)",
    type: "pack",
    rating: 4.9,
  },
  // Equipment
  {
    id: 6,
    slug: "carretilla-frontal",
    title: "Carretilla Frontal",
    shortDescription:
      "Maneja carretillas frontales, las más habituales en almacenes.",
    longDescription:
      "La carretilla frontal tiene el contrapeso en la parte trasera. Es la que más se ve en almacenes y centros logísticos, por eso saber manejarla es una de las competencias más pedidas.\n\nLa jornada empieza con teoría sobre seguridad y normativa. La práctica se hace con carretillas frontales reales: arranque, conducción, carga y maniobras de precisión.\n\nAl terminar recibes un certificado de formación conforme al Real Decreto 1215/1997, sobre equipos de trabajo.",
    price: "50€",
    mode: "Presencial",
    locations: "Todas las sedes",
    image: "/images/cursos/forklift.webp",
    duration: "1 día (8 horas)",
    type: "equipment",
    rating: 4.8,
  },
  {
    id: 7,
    slug: "carretilla-retractil",
    title: "Carretilla Retráctil",
    shortDescription:
      "Maneja carretillas retráctiles para trabajar en pasillos estrechos.",
    longDescription:
      "La carretilla retráctil tiene un mástil que avanza para alcanzar la carga. Por eso trabaja en pasillos estrechos y aprovecha la altura del almacén.\n\nEl curso repasa las especificaciones técnicas de la máquina, la normativa de seguridad y la conducción en espacios reducidos. La práctica incluye la gestión del almacenaje en altura, con equipos profesionales.\n\nAl terminar recibes un certificado que acredita tu manejo de carretillas retráctiles.",
    price: "50€",
    mode: "Presencial",
    locations: "Coslada, Alcorcón",
    image: "/images/cursos/carretilla-elevadora.avif",
    duration: "1 día (8 horas)",
    type: "equipment",
    rating: 4.7,
  },
  {
    id: 8,
    slug: "transpaleta-electrica",
    title: "Transpaleta Eléctrica",
    shortDescription:
      "Mueve pallets por el almacén con transpaletas eléctricas.",
    longDescription:
      "La transpaleta eléctrica levanta el pallet unos centímetros y lo mueve por el suelo: dentro del almacén, hasta el camión o hasta el muelle de carga. Parece sencilla, pero la carga, la frenada y los giros en espacios pequeños requieren técnica.\n\nDurante el curso verás los distintos modelos, cómo funciona cada sistema, las normas de seguridad, la distribución de la carga y el mantenimiento básico. La formación combina teoría breve con prácticas en entornos reales de trabajo.\n\nAl terminar recibes un certificado que acredita tu manejo de transpaletas eléctricas.",
    price: "50€",
    mode: "Presencial",
    locations: "Todas las sedes",
    image: "/images/cursos/transpaleta-electrica.jpg",
    duration: "1 día (8 horas)",
    type: "equipment",
    rating: 4.6,
  },
  {
    id: 9,
    slug: "recogepedidos",
    title: "Recogepedidos",
    shortDescription: "Prepara pedidos desde la plataforma de un recogepedidos, a varios metros de altura.",
    longDescription:
      "El recogepedidos es una plataforma que sube con el operario encima para coger artículos de estanterías altas. Se usa en almacenes de preparación de pedidos y necesita formación específica por su altura y su estabilidad.\n\nEl curso trata los sistemas de seguridad y estabilización, el desplazamiento, la elevación y el picking en altura. Las prácticas se hacen con equipos reales en un entorno de almacén simulado.\n\nAl terminar recibes un certificado que acredita tu especialización en picking en altura.",
    price: "50€",
    mode: "Presencial",
    locations: "Coslada, Alcorcón",
    image: "/images/cursos/recogepedidos.jpg",
    duration: "1 día (8 horas)",
    type: "equipment",
    rating: 4.7,
  },
  {
    id: 10,
    slug: "apilador",
    title: "Apilador",
    shortDescription: "Apila pallets con apiladores eléctricos en pasillos de almacén.",
    longDescription:
      "El apilador eléctrico levanta la carga en vertical y la deja a la altura de las estanterías. Combina rasgos de la transpaleta y de la carretilla elevadora, y sirve en almacenes de cualquier tamaño.\n\nDurante el curso aprendes los tipos de apilador, sus capacidades y limitaciones, las normas de seguridad aplicables, la conducción y la elevación, y el procedimiento de trabajo seguro. Las prácticas se hacen con equipos reales en un entorno controlado.\n\nAl terminar recibes un certificado que valida tu manejo de apiladores eléctricos.",
    price: "50€",
    mode: "Presencial",
    locations: "Todas las sedes",
    image: "/images/cursos/apilador.jpg",
    duration: "1 día (8 horas)",
    type: "equipment",
    rating: 4.6,
  },
];

export default courses;
