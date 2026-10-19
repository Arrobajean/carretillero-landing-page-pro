import {
  Breadcrumbs,
  Link as MuiLink,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Cookie from "@mui/icons-material/Cookie";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="black" />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
            <MuiLink component={Link} to="/" underline="hover" color="text.secondary" sx={{ fontWeight: 500 }}>
              Inicio
            </MuiLink>
            <Typography sx={{ fontWeight: 500, color: "text.primary" }}>Política de Cookies</Typography>
          </Breadcrumbs>

          <Paper elevation={1} className="max-w-3xl mx-auto p-6 md:p-8">
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
              <Cookie sx={{ fontSize: 32, color: "primary.main" }} />
              <Typography variant="h3" component="h1" sx={{ fontSize: "1.875rem", color: "text.primary" }}>
                Política de Cookies
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
                  1. ¿Qué son las Cookies?
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    Las cookies son pequeños archivos de texto que los sitios
                    web colocan en su dispositivo cuando los visita. En este
                    proyecto de demostración, se implementan las mejores
                    prácticas de gestión de cookies, aunque no se recopilan
                    datos reales de usuarios.
                  </p>
                  <p className="text-gray-600">
                    Este proyecto muestra cómo se implementaría correctamente
                    una política de cookies en un sitio web profesional,
                    siguiendo las regulaciones actuales de privacidad.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  2. Implementación de Cookies en este Proyecto
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Cookies Técnicas
                    </h3>
                    <p className="text-gray-600">
                      Este proyecto implementa cookies técnicas necesarias para
                      el funcionamiento básico del sitio web, como la gestión de
                      preferencias de usuario y el estado de la sesión.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Gestión de Preferencias
                    </h3>
                    <p className="text-gray-600">
                      Se implementa un sistema de gestión de cookies que permite
                      a los usuarios controlar sus preferencias de privacidad,
                      demostrando las mejores prácticas de cumplimiento con GDPR
                      y otras regulaciones.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Sin Recopilación de Datos
                    </h3>
                    <p className="text-gray-600">
                      Como proyecto de demostración, no se recopilan datos
                      reales de usuarios. Las cookies implementadas son
                      únicamente para fines técnicos y educativos.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  3. Cómo Controlar las Cookies
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    Usted puede controlar y administrar las cookies de varias
                    maneras. Tenga en cuenta que eliminar o bloquear cookies
                    puede afectar su experiencia de usuario y es posible que no
                    pueda acceder a ciertas partes de nuestro sitio web.
                  </p>
                  <p className="text-gray-600">
                    La mayoría de los navegadores web le permiten controlar la
                    mayoría de las cookies a través de la configuración del
                    navegador. Para obtener más información sobre las cookies,
                    incluido cómo ver qué cookies se han configurado y cómo
                    administrarlas y eliminarlas, visite{" "}
                    <a
                      href="https://www.allaboutcookies.org"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.allaboutcookies.org
                    </a>
                    .
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  4. Cookies de Terceros
                </h2>
                <p className="text-gray-600">
                  Además de nuestras propias cookies, también podemos utilizar
                  varias cookies de terceros para informar estadísticas del uso
                  del sitio, entregar anuncios en y a través del Servicio, etc.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  5. Contacto y Colaboración
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    Este proyecto demuestra la implementación correcta de
                    políticas de cookies y gestión de privacidad. Si tienes
                    preguntas sobre la implementación técnica o estás interesado
                    en colaborar, no dudes en contactar.
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
                    Este proyecto demuestra competencias en gestión de cookies,
                    cumplimiento de GDPR, y mejores prácticas de privacidad en
                    desarrollo web moderno.
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

export default Cookies;
