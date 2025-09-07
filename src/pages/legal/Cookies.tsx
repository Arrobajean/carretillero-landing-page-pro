import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Cookie } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="black" />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link
                  to="/"
                  className="text-sm font-medium underline-offset-4 hover:underline text-muted-foreground"
                >
                  Inicio
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Política de Cookies</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-gray-900">
                Política de Cookies
              </h1>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-6">
                Última actualización:{" "}
                {new Date().toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              {/* Nota del proyecto */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
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

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  1. ¿Qué son las Cookies?
                </h2>
                <p className="text-gray-600 mb-4">
                  Las cookies son pequeños archivos de texto que los sitios web
                  colocan en su dispositivo cuando los visita. En este proyecto
                  de demostración, se implementan las mejores prácticas de
                  gestión de cookies, aunque no se recopilan datos reales de
                  usuarios.
                </p>
                <p className="text-gray-600">
                  Este proyecto muestra cómo se implementaría correctamente una
                  política de cookies en un sitio web profesional, siguiendo las
                  regulaciones actuales de privacidad.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
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

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  3. Cómo Controlar las Cookies
                </h2>
                <p className="text-gray-600 mb-4">
                  Usted puede controlar y administrar las cookies de varias
                  maneras. Tenga en cuenta que eliminar o bloquear cookies puede
                  afectar su experiencia de usuario y es posible que no pueda
                  acceder a ciertas partes de nuestro sitio web.
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
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  4. Cookies de Terceros
                </h2>
                <p className="text-gray-600 mb-4">
                  Además de nuestras propias cookies, también podemos utilizar
                  varias cookies de terceros para informar estadísticas del uso
                  del sitio, entregar anuncios en y a través del Servicio, etc.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  3. Contacto y Colaboración
                </h2>
                <p className="text-gray-600 mb-4">
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
                <p className="text-gray-600 text-sm mt-4">
                  Este proyecto demuestra competencias en gestión de cookies,
                  cumplimiento de GDPR, y mejores prácticas de privacidad en
                  desarrollo web moderno.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
