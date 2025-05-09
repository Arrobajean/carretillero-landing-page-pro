
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { FileText } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
                <BreadcrumbPage>Política de Privacidad</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-gray-900">Política de Privacidad</h1>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-6">
                Última actualización: 9 de mayo de 2025
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Información que Recopilamos</h2>
                <p className="text-gray-600 mb-4">
                  En Professional Categories SL (en adelante, "TuCarretillero"), nos comprometemos a proteger y respetar su privacidad. Esta política establece la base sobre la cual procesaremos cualquier dato personal que recopilemos de usted o que nos proporcione.
                </p>
                <p className="text-gray-600 mb-4">
                  Podemos recopilar y procesar los siguientes datos:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Información que nos proporciona al completar formularios en nuestro sitio.</li>
                  <li>Registros de correspondencia si se comunica con nosotros.</li>
                  <li>Detalles de sus visitas a nuestro sitio y los recursos a los que accede.</li>
                  <li>Información proporcionada al registrarse para nuestros cursos o servicios.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Cómo Utilizamos su Información</h2>
                <p className="text-gray-600 mb-4">
                  Utilizamos la información que tenemos sobre usted de las siguientes maneras:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Para proporcionarle información sobre nuestros cursos y servicios.</li>
                  <li>Para cumplir con nuestras obligaciones derivadas de cualquier contrato entre usted y nosotros.</li>
                  <li>Para permitirle participar en las funciones interactivas de nuestro servicio, cuando elija hacerlo.</li>
                  <li>Para notificarle sobre cambios en nuestro servicio.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Divulgación de su Información</h2>
                <p className="text-gray-600 mb-4">
                  No vendemos, distribuimos ni arrendamos su información personal a terceros a menos que tengamos su permiso o estemos obligados por ley a hacerlo. Podemos utilizar su información personal para enviarle información promocional sobre terceros que creemos que pueden ser de su interés.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Sus Derechos</h2>
                <p className="text-gray-600 mb-4">
                  Tiene derecho a solicitar una copia de la información personal que tenemos sobre usted. Puede solicitarnos que corrijamos o eliminemos cualquier información que considere incorrecta.
                </p>
                <p className="text-gray-600">
                  Si desea ejercer alguno de estos derechos, contáctenos en <a href="mailto:privacidad@tucarretillero.com" className="text-primary hover:underline">privacidad@tucarretillero.com</a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Cambios en nuestra Política de Privacidad</h2>
                <p className="text-gray-600">
                  Cualquier cambio que hagamos en nuestra política de privacidad en el futuro se publicará en esta página. Consulte con frecuencia para ver las actualizaciones o cambios en nuestra política de privacidad.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Contacto</h2>
                <p className="text-gray-600">
                  Las preguntas, comentarios y solicitudes relacionadas con esta política de privacidad son bienvenidos y deben dirigirse a <a href="mailto:info@tucarretillero.com" className="text-primary hover:underline">info@tucarretillero.com</a>.
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
