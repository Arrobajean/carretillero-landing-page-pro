import { useState } from "react";

export interface Location {
  id: number;
  name: string;
  address: string;
  mapsUrl: string;
  coordinates: { lat: number; lng: number };
}

const locations: Location[] = [
  {
    id: 1,
    name: "Coslada",
    address: "Av. de la Cañada, 64, 28823 Coslada, Madrid",
    mapsUrl:
      "https://maps.google.com/?q=Av.+de+la+Cañada,+64,+28823+Coslada,+Madrid",
    coordinates: { lat: 40.42582, lng: -3.53549 },
  },
  {
    id: 2,
    name: "Alcorcón",
    address: "Calle Ebanistas, 1, 28923 Alcorcón, Madrid",
    mapsUrl:
      "https://maps.google.com/?q=Calle+Ebanistas,+1,+28923+Alcorcón,+Madrid",
    coordinates: { lat: 40.34555, lng: -3.83773 },
  },
  {
    id: 3,
    name: "Ciempozuelos",
    address: "C. de la Moda, 13, 28350 Ciempozuelos, Madrid",
    mapsUrl:
      "https://maps.google.com/?q=C.+de+la+Moda,+13,+28350+Ciempozuelos,+Madrid",
    coordinates: { lat: 40.16075, lng: -3.61171 },
  },
  {
    id: 4,
    name: "Alcantarilla",
    address: "C. del Ing. José Alegría, 1, 30820 Alcantarilla, Murcia",
    mapsUrl:
      "https://maps.google.com/?q=C.+del+Ing.+José+Alegría,+1,+30820+Alcantarilla,+Murcia",
    coordinates: { lat: 37.97113, lng: -1.22187 },
  },
];

export function useLocations() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(
    locations[0]
  );

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const getMapEmbedUrl = (location: Location) => {
    const { lat, lng } = location.coordinates;
    return `https://www.google.com/maps?q=${lat},${lng}&hl=es&z=14&output=embed`;
  };

  return { locations, selectedLocation, handleLocationClick, getMapEmbedUrl };
}
