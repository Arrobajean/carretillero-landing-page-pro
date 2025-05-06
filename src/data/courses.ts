
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
}

const courses: Course[] = [
  // Courses
  {
    id: 1,
    slug: "curso-basico-carretillero",
    title: "Curso Básico de Carretillero",
    shortDescription: "Formación completa de carretillero en un solo día. Incluye práctica con equipos reales y certificación oficial.",
    longDescription: "Nuestro curso básico de carretillero ofrece una formación completa y oficial para el manejo seguro y eficiente de carretillas elevadoras. En tan solo un día, obtendrás los conocimientos teóricos y prácticos necesarios para operar estos equipos con confianza y profesionalismo.\n\nEl curso incluye módulos sobre normativa de seguridad, mantenimiento básico de equipos, técnicas de conducción y manipulación de cargas, además de prácticas con equipos reales en nuestras instalaciones especializadas.\n\nAl finalizar, recibirás un diploma certificado válido en toda España que acreditará tus competencias como carretillero profesional, aumentando significativamente tus oportunidades laborales en sectores logísticos, industriales y de almacenaje.",
    price: "50€",
    mode: "Presencial",
    locations: "Todas las sedes",
    image: "https://images.unsplash.com/photo-1566459069038-41bdf98ae5e0?q=80&w=600&auto=format",
    duration: "1 día (8 horas)",
    syllabus: [
      "Módulo 1: Normativa de seguridad",
      "Módulo 2: Tipos de carretillas elevadoras",
      "Módulo 3: Mantenimiento básico",
      "Módulo 4: Técnicas de conducción",
      "Módulo 5: Manipulación de cargas",
      "Módulo 6: Prácticas con equipos reales"
    ],
    faqs: [
      {
        question: "¿Necesito experiencia previa para realizar este curso?",
        answer: "No, este curso está diseñado para principiantes y no requiere experiencia previa en el manejo de carretillas."
      },
      {
        question: "¿El certificado tiene validez nacional?",
        answer: "Sí, el certificado que obtendrás tiene validez en toda España y cumple con la normativa vigente de prevención de riesgos laborales."
      }
    ],
    type: "course"
  },
  {
    id: 2,
    slug: "carretillero-puente-grua",
    title: "Carretillero + Puente Grúa",
    shortDescription: "Formación dual para el manejo profesional de carretillas y puentes grúa.",
    longDescription: "Nuestro curso combinado de Carretillero y Puente Grúa ofrece una formación integral para profesionales del sector logístico e industrial. Esta formación dual te permitirá obtener dos certificaciones oficiales en un solo programa, maximizando tu empleabilidad y competencias técnicas.\n\nEl módulo de carretillero incluye formación completa para el manejo seguro y eficiente de carretillas elevadoras, mientras que el módulo de puente grúa te capacitará para operar estos sistemas de elevación con precisión y seguridad.\n\nAmbos módulos combinan teoría y práctica con equipos reales, asegurando que desarrolles habilidades aplicables inmediatamente en entornos laborales. Al finalizar, recibirás certificaciones oficiales para ambas especialidades.",
    price: "90€",
    mode: "Presencial",
    locations: "Coslada, Alcorcón, Ciempozuelos",
    image: "https://images.unsplash.com/photo-1566275412455-45804f3ca0bc?q=80&w=600&auto=format",
    duration: "2 días (16 horas)",
    syllabus: [
      "Módulo Carretillero (1er día)",
      "Módulo Puente Grúa (2º día)",
      "Prácticas combinadas",
      "Evaluación y certificación"
    ],
    type: "course"
  },
  {
    id: 3,
    slug: "carretillero-manipulador-alimentos",
    title: "Carretillero + Manipulador de Alimentos",
    shortDescription: "Certificación combinada para manejo de carretillas y manipulación de alimentos.",
    longDescription: "Este curso combinado está especialmente diseñado para profesionales que buscan trabajar en el sector de la logística alimentaria. Obtendrás dos certificaciones esenciales: carretillero profesional y manipulador de alimentos, ampliando significativamente tus oportunidades laborales.\n\nEl módulo de carretillero te proporcionará todas las competencias necesarias para el manejo seguro y eficiente de carretillas elevadoras, mientras que el módulo de manipulador de alimentos te formará en los protocolos de higiene, seguridad alimentaria y buenas prácticas exigidas por la normativa vigente.\n\nAl finalizar, contarás con ambas certificaciones oficiales, convirtiéndote en un candidato ideal para almacenes, centros logísticos y empresas distribuidoras del sector alimentario.",
    price: "70€",
    mode: "Presencial y Online",
    locations: "Todas las sedes",
    image: "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?q=80&w=600&auto=format",
    duration: "1 día y medio (12 horas)",
    type: "course"
  },
  {
    id: 4,
    slug: "pack-top-formacion",
    title: "PACK TOP FORMACIÓN",
    shortDescription: "Pack completo: Carretillero + Plataforma + Puente Grúa + Radiofrecuencia + Manipulador",
    longDescription: "Nuestro Pack Top Formación representa la opción más completa y ventajosa para profesionales que buscan maximizar su empleabilidad en el sector logístico e industrial. Este pack formativo integral incluye cinco certificaciones oficiales fundamentales:\n\n- Carretillero: Manejo profesional de carretillas elevadoras.\n- Plataforma Elevadora: Operación segura de plataformas de trabajo en altura.\n- Puente Grúa: Control y manejo de sistemas de elevación industrial.\n- Radiofrecuencia: Gestión y control de inventario mediante sistemas RF.\n- Manipulador de Alimentos: Protocolos de higiene y seguridad alimentaria.\n\nCada módulo combina teoría y práctica intensiva con equipos reales, garantizando una formación completa y aplicable. Al finalizar, obtendrás cinco certificaciones oficiales que transformarán tu perfil profesional, abriéndote puertas en múltiples sectores y especialidades.",
    price: "160€",
    mode: "Presencial",
    locations: "Coslada, Alcorcón",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format",
    duration: "5 días (40 horas)",
    type: "pack"
  },
  {
    id: 5,
    slug: "pack-mega-formacion",
    title: "PACK MEGA FORMACIÓN",
    shortDescription: "Pack premium con todos los cursos + equipos de limpieza",
    longDescription: "El Pack Mega Formación representa nuestra oferta formativa más completa y exclusiva, diseñada para profesionales que buscan dominar todas las áreas de la logística industrial. Este paquete premium incluye todas las certificaciones del Pack Top Formación (Carretillero, Plataforma Elevadora, Puente Grúa, Radiofrecuencia y Manipulador de Alimentos) y añade una especialización adicional en Equipos de Limpieza Industrial.\n\nEsta formación completa y diversificada te convertirá en un profesional altamente versátil, capaz de desempeñarte con excelencia en cualquier entorno industrial o logístico. Cada módulo combina teoría especializada con prácticas intensivas utilizando equipos profesionales de última generación.\n\nAl completar el programa, obtendrás seis certificaciones oficiales que potenciarán exponencialmente tus oportunidades laborales y tu valor como profesional del sector.",
    price: "190€",
    mode: "Presencial",
    locations: "Coslada",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format",
    duration: "6 días (48 horas)",
    type: "pack"
  },
  // Equipment
  {
    id: 6,
    slug: "carretilla-frontal",
    title: "Carretilla Frontal",
    shortDescription: "Aprende a maniobrar carretillas frontales con precisión y seguridad",
    longDescription: "Nuestro curso especializado en Carretillas Frontales ofrece una formación completa y práctica para el manejo profesional de estos equipos fundamentales en la logística y el almacenaje. La carretilla frontal es uno de los vehículos industriales más utilizados en almacenes y centros logísticos, por lo que su correcto manejo es una competencia muy demandada.\n\nEl programa formativo abarca desde los fundamentos teóricos de seguridad y normativa hasta sesiones prácticas extensivas con equipos reales, donde perfeccionarás las técnicas de conducción, manipulación de cargas y maniobras precisas.\n\nAl finalizar, obtendrás un certificado oficial conforme al RD de Prevención de Riesgos Laborales que acreditará tu capacitación para operar carretillas frontales de forma segura y eficiente en cualquier entorno industrial.",
    price: "50€",
    mode: "Presencial",
    locations: "Todas las sedes",
    image: "https://images.unsplash.com/photo-1566459069038-41bdf98ae5e0?q=80&w=600&auto=format",
    duration: "1 día (8 horas)",
    type: "equipment"
  },
  {
    id: 7,
    slug: "carretilla-retractil",
    title: "Carretilla Retráctil",
    shortDescription: "Especialización en carretillas retráctiles para almacenes",
    longDescription: "Nuestro curso de Carretilla Retráctil ofrece una formación especializada para profesionales que buscan dominar este tipo específico de equipo, ideal para trabajar en pasillos estrechos y optimizar el espacio en almacenes. Las carretillas retráctiles requieren técnicas de manejo precisas y un conocimiento específico por sus características particulares.\n\nEl programa formativo incluye módulos sobre las especificaciones técnicas de estos equipos, normativas de seguridad, técnicas de conducción en espacios reducidos, gestión eficiente del almacenaje en altura y prácticas extensivas con equipos profesionales.\n\nAl concluir el curso, recibirás un certificado oficial que acreditará tu especialización en el manejo de carretillas retráctiles, una competencia altamente valorada en el sector logístico y de almacenaje.",
    price: "50€",
    mode: "Presencial",
    locations: "Coslada, Alcorcón",
    image: "https://images.unsplash.com/photo-1566275412455-45804f3ca0bc?q=80&w=600&auto=format",
    duration: "1 día (8 horas)",
    type: "equipment"
  },
  {
    id: 8,
    slug: "transpaleta-electrica",
    title: "Transpaleta Eléctrica",
    shortDescription: "Manejo eficiente de transpaletas eléctricas para logística",
    longDescription: "El curso de Transpaleta Eléctrica está diseñado para capacitarte en el manejo profesional de estos equipos esenciales para el transporte horizontal de mercancías. Aunque aparentemente más sencillas que otros equipos, las transpaletas eléctricas requieren técnicas específicas para su uso óptimo y seguro.\n\nDurante la formación, aprenderás sobre los diferentes modelos de transpaletas, sus sistemas de funcionamiento, normativas de seguridad, técnicas de manejo eficiente, distribución de cargas y protocolos de mantenimiento básico. El curso combina teoría concisa con extensas prácticas en entornos reales de trabajo.\n\nAl finalizar, obtendrás un certificado oficial que acreditará tus competencias para operar transpaletas eléctricas de forma profesional en cualquier entorno logístico o industrial.",
    price: "50€",
    mode: "Presencial",
    locations: "Todas las sedes",
    image: "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?q=80&w=600&auto=format",
    duration: "1 día (8 horas)",
    type: "equipment"
  },
  {
    id: 9,
    slug: "recogepedidos",
    title: "Recogepedidos",
    shortDescription: "Especialización en equipos para picking en altura",
    longDescription: "Nuestro curso especializado en equipos Recogepedidos ofrece una formación completa para profesionales que necesitan dominar estos complejos sistemas de trabajo en altura. Los recogepedidos son equipos fundamentales en almacenes modernos que requieren una preparación específica debido a sus características técnicas y operativas.\n\nEl programa formativo aborda las particularidades de estos equipos, desde sus sistemas de seguridad y estabilización hasta las técnicas de elevación, desplazamiento y picking. Aprenderás a optimizar los procesos de preparación de pedidos en altura, maximizando la eficiencia y minimizando los riesgos laborales.\n\nLa formación incluye módulos teóricos especializados y prácticas intensivas con equipos reales en entornos simulados de almacén. Al completar el curso, recibirás una certificación oficial que acreditará tu especialización en estos sistemas avanzados de picking.",
    price: "50€",
    mode: "Presencial",
    locations: "Coslada, Alcorcón",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format",
    duration: "1 día (8 horas)",
    type: "equipment"
  },
  {
    id: 10,
    slug: "apilador",
    title: "Apilador",
    shortDescription: "Manejo seguro de apiladores eléctricos",
    longDescription: "El curso de Apilador está diseñado para formar profesionales capaces de operar con seguridad y eficiencia estos equipos fundamentales en la logística moderna. Los apiladores eléctricos son versátiles y ampliamente utilizados en almacenes de diversos tamaños, combinando características de las transpaletas y las carretillas elevadoras.\n\nDurante la formación, aprenderás sobre los distintos tipos de apiladores, sus capacidades y limitaciones, normativas de seguridad aplicables, técnicas específicas de conducción y elevación, y procedimientos de trabajo seguro. El programa combina sesiones teóricas con prácticas extensivas utilizando equipos reales en entornos controlados.\n\nAl finalizar el curso, obtendrás una certificación oficial que validará tus competencias para el manejo profesional de apiladores eléctricos, una cualificación muy demandada en el sector logístico e industrial.",
    price: "50€",
    mode: "Presencial",
    locations: "Todas las sedes",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format",
    duration: "1 día (8 horas)",
    type: "equipment"
  }
];

export default courses;
