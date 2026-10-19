import {
  Breadcrumbs,
  Link as MuiLink,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Article from "@mui/icons-material/Article";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="black" />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
            <MuiLink component={Link} to="/" underline="hover" color="text.secondary" sx={{ fontWeight: 500 }}>
              Inicio
            </MuiLink>
            <Typography sx={{ fontWeight: 500, color: "text.primary" }}>Términos y Condiciones</Typography>
          </Breadcrumbs>

          <Paper elevation={1} className="max-w-3xl mx-auto p-6 md:p-8">
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
              <Article sx={{ fontSize: 32, color: "primary.main" }} />
              <Typography variant="h3" component="h1" sx={{ fontSize: "1.875rem", color: "text.primary" }}>
                Términos y Condiciones
              </Typography>
            </Stack>

            <div className="prose prose-gray max-w-none space-y-6">
              <p className="text-gray-600 text-sm">
                Última actualización:{" "}
                {new Date().toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              {/* Nota del proyecto */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm leading-relaxed">
                  <strong>Nota importante:</strong> Esta página web es un
                  proyecto de demostración desarrollado con fines educativos y
                  de portafolio. Aunque se ha diseñado con las mejores prácticas
                  de desarrollo web y experiencia de usuario, no representa una
                  empresa real en funcionamiento. Este proyecto ha sido creado
                  para mostrar habilidades técnicas en desarrollo frontend,
                  diseño UX/UI y implementación de sitios web modernos.
                </p>
              </div>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  1. Introducción
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    Este sitio web es un proyecto de demostración creado con
                    fines educativos y de portafolio. No representa una empresa
                    real en funcionamiento, sino que ha sido desarrollado para
                    mostrar habilidades técnicas en desarrollo web moderno.
                  </p>
                  <p className="text-gray-600">
                    Al explorar este sitio web, reconoces que es un proyecto de
                    demostración y que no se ofrecen servicios reales. Este
                    proyecto ha sido creado siguiendo las mejores prácticas de
                    desarrollo web y experiencia de usuario.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  2. Uso del Sitio Web
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    Nuestro sitio web está destinado únicamente a personas que
                    tengan al menos 18 años de edad.
                  </p>
                  <p className="text-gray-600">
                    Al utilizar nuestro sitio web, usted garantiza y declara
                    que:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Tiene al menos 18 años de edad.</li>
                    <li>
                      Proporcionará información verdadera, precisa, actual y
                      completa cuando se le solicite.
                    </li>
                    <li>
                      Mantendrá y actualizará sin demora la información de
                      registro para mantenerla verdadera, precisa, actual y
                      completa.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  3. Propósito del Proyecto
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    Este proyecto de demostración ha sido creado para los
                    siguientes propósitos:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>
                      Mostrar habilidades técnicas en desarrollo frontend
                      moderno (React, TypeScript, Tailwind CSS).
                    </li>
                    <li>
                      Demostrar competencias en diseño UX/UI y experiencia de
                      usuario.
                    </li>
                    <li>
                      Exhibir implementación de sitios web responsivos y
                      accesibles.
                    </li>
                    <li>
                      Presentar un portafolio de trabajo profesional en
                      desarrollo web.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  4. Propiedad Intelectual
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    Este proyecto de demostración ha sido desarrollado como un
                    trabajo original. El código fuente, diseño y contenido han
                    sido creados específicamente para este proyecto de
                    portafolio.
                  </p>
                  <p className="text-gray-600">
                    Las imágenes utilizadas son de uso libre o han sido
                    obtenidas de fuentes que permiten su uso en proyectos de
                    demostración. El diseño y la implementación técnica son obra
                    original del desarrollador.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  5. Limitación de Responsabilidad
                </h2>
                <p className="text-gray-600">
                  En ningún caso TuCarretillero será responsable por daños
                  indirectos, consecuentes o punitivos que surjan de o en
                  conexión con el uso de nuestro sitio web o servicios. Nuestra
                  responsabilidad total ante usted por todos los daños no
                  excederá el monto pagado por usted, si corresponde, por
                  acceder a nuestro sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  6. Contacto y Colaboración
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    Este proyecto ha sido desarrollado como una demostración de
                    habilidades técnicas. Si estás interesado en colaborar,
                    tienes preguntas sobre la implementación técnica, o buscas
                    servicios de desarrollo web, no dudes en contactar.
                  </p>
                  <p className="text-gray-600">
                    Para consultas técnicas sobre este proyecto o colaboraciones
                    profesionales, contacta con{" "}
                    <a
                      href="https://404studios.digital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      404 Studios Digital
                    </a>
                    , liderada por Jean Paul Castañeda Huerta.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Este proyecto demuestra competencias en React, TypeScript,
                    Tailwind CSS, diseño responsivo, optimización de rendimiento
                    y mejores prácticas de desarrollo web moderno.
                  </p>
                </div>
              </section>
            </div>
          </Paper>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
