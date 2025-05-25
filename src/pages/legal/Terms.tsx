
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
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
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to="/" className="text-sm font-medium underline-offset-4 hover:underline text-muted-foreground">Inicio</Link>
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
              <h1 className="text-3xl font-bold text-gray-900">Términos y Condiciones</h1>
            </div>

            <div className="prose prose-gray max-w-none space-y-6">
              <p className="text-gray-600 text-sm">
                Última actualización: 9 de mayo de 2025
              </p>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Introducción</h2>
                <p className="text-gray-600 mb-3">
                  Estos Términos y Condiciones rigen el uso del sitio web operado por Professional Categories SL (en adelante, "TuCarretillero") y cualquier contenido, funcionalidad y servicios ofrecidos.
                </p>
                <p className="text-gray-600">
                  Al utilizar nuestro sitio web, usted acepta estos términos en su totalidad. Si no está de acuerdo con estos términos o cualquier parte de ellos, no debe utilizar nuestro sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Uso del Sitio Web</h2>
                <p className="text-gray-600 mb-3">
                  Nuestro sitio web está destinado únicamente a personas que tengan al menos 18 años de edad.
                </p>
                <p className="text-gray-600 mb-2">
                  Al utilizar nuestro sitio web, usted garantiza y declara que:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Tiene al menos 18 años de edad.</li>
                  <li>Proporcionará información verdadera, precisa, actual y completa cuando se le solicite.</li>
                  <li>Mantendrá y actualizará sin demora la información de registro para mantenerla verdadera, precisa, actual y completa.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Inscripción en Cursos</h2>
                <p className="text-gray-600 mb-2">
                  La inscripción en nuestros cursos está sujeta a los siguientes términos:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Las inscripciones se confirman únicamente tras el pago completo o acuerdo de pago establecido.</li>
                  <li>Nos reservamos el derecho de cancelar o reprogramar cursos con previo aviso.</li>
                  <li>Las cancelaciones por parte del cliente pueden estar sujetas a cargos según nuestra política de cancelación.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Propiedad Intelectual</h2>
                <p className="text-gray-600 mb-3">
                  Todo el contenido, diseño, gráficos, interfaces y código de este sitio web son propiedad de TuCarretillero y están protegidos por leyes de propiedad intelectual.
                </p>
                <p className="text-gray-600">
                  El uso no autorizado de estos materiales puede violar las leyes de derechos de autor, marcas registradas y otras leyes aplicables.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Limitación de Responsabilidad</h2>
                <p className="text-gray-600">
                  En ningún caso TuCarretillero será responsable por daños indirectos, consecuentes o punitivos que surjan de o en conexión con el uso de nuestro sitio web o servicios. Nuestra responsabilidad total ante usted por todos los daños no excederá el monto pagado por usted, si corresponde, por acceder a nuestro sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Modificaciones</h2>
                <p className="text-gray-600 mb-3">
                  Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigencia inmediatamente después de su publicación en nuestro sitio web.
                </p>
                <p className="text-gray-600">
                  Su uso continuado del sitio web después de cualquier modificación constituye su aceptación de los nuevos términos. Le recomendamos que revise estos términos regularmente.
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
