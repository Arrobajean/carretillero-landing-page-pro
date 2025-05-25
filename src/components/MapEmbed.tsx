interface MapEmbedProps {
  src: string;
  title?: string;
  id: string | number; // se usa como key para forzar el render
}

const MapEmbed = ({ src, title = "Mapa", id }: MapEmbedProps) => {
  return (
    <iframe
      key={id} // 🔁 fuerza el re-render al cambiar de sede
      title={title}
      width="100%"
      height="600"
      style={{ border: 0 }}
      src={src}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full"
    />
  );
};

export default MapEmbed;
