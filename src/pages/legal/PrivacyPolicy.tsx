import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { FileText } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header variant="black" />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
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
                <BreadcrumbPage>Política de Privacidad</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Content card */}
          <div className="max-w-4xl mx-auto bg-white dark:bg-muted rounded-xl shadow-sm p-6 md:p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">
                Política de Privacidad
              </h1>
            </div>

            {/* Legal content */}
            <div className="prose prose-gray dark:prose-invert max-w-none text-base leading-relaxed">
              <p className="text-muted-foreground mb-6">
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
                <h2>1. Información que Recopilamos</h2>
                <p>
                  Esta página web es un proyecto de demostración y no recopila
                  datos personales reales. Sin embargo, para fines educativos,
                  describimos las prácticas estándar de privacidad que
                  implementaría una empresa real de formación profesional.
                </p>
                <p>En un entorno real, podríamos recopilar:</p>
                <ul>
                  <li>
                    Información de contacto proporcionada voluntariamente a
                    través de formularios.
                  </li>
                  <li>
                    Datos de navegación anónimos para mejorar la experiencia del
                    usuario.
                  </li>
                  <li>
                    Información técnica básica del dispositivo y navegador.
                  </li>
                  <li>
                    Cookies necesarias para el funcionamiento del sitio web.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>2. Cómo Utilizamos su Información</h2>
                <p>
                  Utilizamos la información que tenemos sobre usted de las
                  siguientes maneras:
                </p>
                <ul>
                  <li>
                    Para proporcionarle información sobre nuestros cursos y
                    servicios.
                  </li>
                  <li>
                    Para cumplir con nuestras obligaciones derivadas de
                    cualquier contrato entre usted y nosotros.
                  </li>
                  <li>
                    Para permitirle participar en las funciones interactivas de
                    nuestro servicio, cuando elija hacerlo.
                  </li>
                  <li>Para notificarle sobre cambios en nuestro servicio.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Divulgación de su Información</h2>
                <p>
                  No vendemos, distribuimos ni arrendamos su información
                  personal a terceros a menos que tengamos su permiso o estemos
                  obligados por ley a hacerlo. Podemos utilizar su información
                  personal para enviarle información promocional sobre terceros
                  que creemos que pueden ser de su interés.
                </p>
              </section>

              <section className="mb-8">
                <h2>4. Sus Derechos</h2>
                <p>
                  Tiene derecho a solicitar una copia de la información personal
                  que tenemos sobre usted. Puede solicitarnos que corrijamos o
                  eliminemos cualquier información que considere incorrecta.
                </p>
                <p>
                  Si desea ejercer alguno de estos derechos, contáctenos en{" "}
                  <a
                    href="mailto:privacidad@tucarretillero.com"
                    className="text-primary hover:underline"
                  >
                    privacidad@tucarretillero.com
                  </a>
                  .
                </p>
              </section>

              <section className="mb-8">
                <h2>5. Cambios en nuestra Política de Privacidad</h2>
                <p>
                  Cualquier cambio que hagamos en nuestra política de privacidad
                  en el futuro se publicará en esta página. Consulte con
                  frecuencia para ver las actualizaciones o cambios en nuestra
                  política de privacidad.
                </p>
              </section>

              <section>
                <h2>6. Contacto</h2>
                <p>
                  Como este es un proyecto de demostración, no hay datos reales
                  que procesar. Sin embargo, si tienes preguntas sobre el
                  desarrollo de este proyecto o estás interesado en colaborar,
                  puedes contactar al desarrollador.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Este proyecto ha sido desarrollado siguiendo las mejores
                  prácticas de desarrollo web moderno. Para consultas técnicas
                  sobre la implementación o colaboraciones profesionales,
                  contacta con{" "}
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
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
