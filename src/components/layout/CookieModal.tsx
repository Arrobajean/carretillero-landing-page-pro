import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check, Settings } from "lucide-react";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const CookieModal = () => {
  const { showBanner, acceptCookies, rejectCookies } = useCookieConsent();
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  const handleAccept = () => {
    acceptCookies();
  };

  const handleReject = () => {
    rejectCookies();
  };

  const handleSavePreferences = () => {
    if (preferences.analytics || preferences.marketing) {
      acceptCookies();
    } else {
      rejectCookies();
    }
  };

  if (!showBanner) return null;

  return (
    <Dialog open={showBanner} onOpenChange={() => {}}>
      <DialogContent className="w-full max-w-lg sm:max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogTitle className="flex items-center gap-2">
          <Cookie className="h-5 w-5 text-accent" />
          <span>Configuración de cookies</span>
        </DialogTitle>

        <DialogDescription className="text-gray-600 text-sm">
          Este sitio web utiliza cookies para mejorar tu experiencia de
          navegación. Puedes personalizar tus preferencias o aceptar todas las
          cookies.
        </DialogDescription>

        <AnimatePresence mode="wait">
          {!showCustomize ? (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                <Button
                  onClick={handleAccept}
                  className="bg-accent hover:bg-accent/90 w-full sm:w-auto"
                >
                  <Check size={16} className="mr-2" />
                  Aceptar todas
                </Button>
                <Button
                  onClick={() => setShowCustomize(true)}
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <Settings size={16} className="mr-2" />
                  Personalizar
                </Button>
                <Button
                  onClick={handleReject}
                  variant="outline"
                  className="w-full sm:w-auto border-gray-300"
                >
                  <X size={16} className="mr-2" />
                  Rechazar
                </Button>
              </div>

              <div className="text-xs text-center text-gray-500 leading-relaxed max-w-prose mx-auto">
                <p>
                  Al hacer clic en "Aceptar todas", consientes el uso de cookies
                  para analizar el tráfico y personalizar el contenido. Consulta
                  nuestra{" "}
                  <Link
                    to="/politica-cookies"
                    className="text-accent hover:underline"
                  >
                    Política de Cookies
                  </Link>{" "}
                  para más información.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="customize"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {[
                  {
                    id: "necessary",
                    label: "Cookies necesarias",
                    description: "Esenciales para el funcionamiento del sitio",
                    value: true,
                    disabled: true,
                  },
                  {
                    id: "analytics",
                    label: "Cookies analíticas",
                    description: "Nos ayudan a mejorar nuestra web",
                    value: preferences.analytics,
                    onChange: (checked: boolean) =>
                      setPreferences((prev) => ({
                        ...prev,
                        analytics: checked,
                      })),
                  },
                  {
                    id: "marketing",
                    label: "Cookies de marketing",
                    description: "Publicidad personalizada",
                    value: preferences.marketing,
                    onChange: (checked: boolean) =>
                      setPreferences((prev) => ({
                        ...prev,
                        marketing: checked,
                      })),
                  },
                ].map((cookie) => (
                  <div
                    key={cookie.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium">{cookie.label}</p>
                      <p className="text-sm text-gray-500">
                        {cookie.description}
                      </p>
                    </div>
                    <Switch
                      checked={cookie.value}
                      disabled={cookie.disabled}
                      onCheckedChange={cookie.onChange}
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-3 justify-end flex-wrap">
                <Button
                  variant="outline"
                  onClick={() => setShowCustomize(false)}
                >
                  Volver
                </Button>
                <Button
                  variant="default"
                  onClick={handleSavePreferences}
                  className="bg-accent hover:bg-accent/90"
                >
                  Guardar preferencias
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default CookieModal;
