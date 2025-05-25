// src/data/companies.ts
export interface Company {
  name: string;
  logo: string;
}

export const companies: Company[] = [
  { name: "Mercadona", logo: "/images/companies/mercadonna.png" },
  { name: "El Corte Inglés", logo: "/images/companies/el_corte_ingles.png" },
  { name: "Leroy Merlín", logo: "/images/companies/leroy-merlin.png" },
  { name: "Carrefour", logo: "/images/companies/carrefour.png" },
  { name: "MediaMarkt", logo: "/public/images/companies/media-markt.svg" },
  { name: "SEUR", logo: "/images/companies/seur.svg" },
  { name: "DHL", logo: "/images/companies/dhl.png" },
];
