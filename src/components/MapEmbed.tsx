interface MapEmbedProps {
  src: string;
  title?: string;
  hidden?: boolean; // keep the iframe loaded, only hide it, so switching is instant
}

const MapEmbed = ({ src, title = "Mapa", hidden = false }: MapEmbedProps) => {
  return (
    <iframe
      title={title}
      width="100%"
      height="600"
      style={{
        border: 0,
        gridArea: "1 / 1",
        visibility: hidden ? "hidden" : "visible",
      }}
      src={src}
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full"
    />
  );
};

export default MapEmbed;
