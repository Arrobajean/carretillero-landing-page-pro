import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { File } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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
                <BreadcrumbPage>Términos y Condiciones</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <File className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-gray-900">
                Términos y Condiciones
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
                  1. Introducción
                </h2>
                <p className="text-gray-600 mb-4">
                  Este sitio web es un proyecto de demostración creado con fines
                  educativos y de portafolio. No representa una empresa real en
                  funcionamiento, sino que ha sido desarrollado para mostrar
                  habilidades técnicas en desarrollo web moderno.
                </p>
                <p className="text-gray-600">
                  Al explorar este sitio web, reconoces que es un proyecto de
                  demostración y que no se ofrecen servicios reales. Este
                  proyecto ha sido creado siguiendo las mejores prácticas de
                  desarrollo web y experiencia de usuario.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  2. Uso del Sitio Web
                </h2>
                <p className="text-gray-600 mb-4">
                  Nuestro sitio web está destinado únicamente a personas que
                  tengan al menos 18 años de edad.
                </p>
                <p className="text-gray-600 mb-4">
                  Al utilizar nuestro sitio web, usted garantiza y declara que:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
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
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  3. Propósito del Proyecto
                </h2>
                <p className="text-gray-600 mb-4">
                  Este proyecto de demostración ha sido creado para los
                  siguientes propósitos:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    Mostrar habilidades técnicas en desarrollo frontend moderno
                    (React, TypeScript, Tailwind CSS).
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
                    Presentar un portafolio de trabajo profesional en desarrollo
                    web.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  4. Propiedad Intelectual
                </h2>
                <p className="text-gray-600 mb-4">
                  Este proyecto de demostración ha sido desarrollado como un
                  trabajo original. El código fuente, diseño y contenido han
                  sido creados específicamente para este proyecto de portafolio.
                </p>
                <p className="text-gray-600">
                  Las imágenes utilizadas son de uso libre o han sido obtenidas
                  de fuentes que permiten su uso en proyectos de demostración.
                  El diseño y la implementación técnica son obra original del
                  desarrollador.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
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
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  5. Contacto y Colaboración
                </h2>
                <p className="text-gray-600 mb-4">
                  Este proyecto ha sido desarrollado como una demostración de
                  habilidades técnicas. Si estás interesado en colaborar, tienes
                  preguntas sobre la implementación técnica, o buscas servicios
                  de desarrollo web, no dudes en contactar.
                </p>
                <p className="text-gray-600 mb-4">
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
                  Tailwind CSS, diseño responsivo, optimización de rendimiento y
                  mejores prácticas de desarrollo web moderno.
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

export default Terms;
