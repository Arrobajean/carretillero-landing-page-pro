
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Cookie } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to="/" className="text-sm font-medium underline-offset-4 hover:underline text-muted-foreground">Inicio</Link>
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
              <h1 className="text-3xl font-bold text-gray-900">Política de Cookies</h1>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-6">
                Última actualización: 9 de mayo de 2025
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">1. ¿Qué son las Cookies?</h2>
                <p className="text-gray-600 mb-4">
                  Las cookies son pequeños archivos de texto que los sitios web colocan en su dispositivo cuando los visita. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Tipos de Cookies que Utilizamos</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Cookies Estrictamente Necesarias</h3>
                    <p className="text-gray-600">
                      Estas cookies son esenciales para permitirle moverse por el sitio web y utilizar sus funciones. Sin estas cookies, no podemos proporcionar muchos servicios que usted solicita.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Cookies de Rendimiento</h3>
                    <p className="text-gray-600">
                      Estas cookies recopilan información sobre cómo los visitantes utilizan un sitio web, por ejemplo, qué páginas visitan los visitantes con más frecuencia. Estas cookies no recopilan información que identifique a un visitante.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Cookies de Funcionalidad</h3>
                    <p className="text-gray-600">
                      Estas cookies permiten que el sitio web recuerde las elecciones que realiza y proporcione funciones más personales. Pueden recordar su nombre de usuario, idioma o región.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Cookies de Publicidad</h3>
                    <p className="text-gray-600">
                      Estas cookies se utilizan para entregar anuncios más relevantes para usted y sus intereses. También se utilizan para limitar el número de veces que ve un anuncio, así como ayudar a medir la efectividad de una campaña publicitaria.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Cómo Controlar las Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Usted puede controlar y administrar las cookies de varias maneras. Tenga en cuenta que eliminar o bloquear cookies puede afectar su experiencia de usuario y es posible que no pueda acceder a ciertas partes de nuestro sitio web.
                </p>
                <p className="text-gray-600">
                  La mayoría de los navegadores web le permiten controlar la mayoría de las cookies a través de la configuración del navegador. Para obtener más información sobre las cookies, incluido cómo ver qué cookies se han configurado y cómo administrarlas y eliminarlas, visite <a href="https://www.allaboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Cookies de Terceros</h2>
                <p className="text-gray-600 mb-4">
                  Además de nuestras propias cookies, también podemos utilizar varias cookies de terceros para informar estadísticas del uso del sitio, entregar anuncios en y a través del Servicio, etc.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Contacto</h2>
                <p className="text-gray-600">
                  Si tiene alguna pregunta sobre nuestro uso de cookies, comuníquese con nosotros en <a href="mailto:info@tucarretillero.com" className="text-primary hover:underline">info@tucarretillero.com</a>.
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
