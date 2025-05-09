
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check, Settings } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

const CookieModal = () => {
  const { showBanner, acceptCookies, rejectCookies, consentStatus } = useCookieConsent();
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and disabled
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
    // Only initialize analytics if the user has consented
    if (preferences.analytics) {
      acceptCookies();
    } else {
      rejectCookies();
    }
  };

  if (!showBanner) {
    return null;
  }

  return (
    <Dialog open={showBanner} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md">
        <DialogTitle className="flex items-center gap-2">
          <Cookie className="h-5 w-5 text-accent" />
          <span>Configuración de cookies</span>
        </DialogTitle>
        
        <DialogDescription className="text-gray-600">
          Este sitio web utiliza cookies para mejorar tu experiencia de navegación.
          Puedes personalizar tus preferencias o aceptar todas las cookies.
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
                  variant="default" 
                  className="bg-accent hover:bg-accent/90 w-full"
                >
                  <Check size={16} className="mr-2" />
                  Aceptar todas
                </Button>
                <Button 
                  onClick={() => setShowCustomize(true)} 
                  variant="outline"
                  className="w-full"
                >
                  <Settings size={16} className="mr-2" />
                  Personalizar
                </Button>
                <Button 
                  onClick={handleReject} 
                  variant="outline"
                  className="w-full border-gray-300"
                >
                  <X size={16} className="mr-2" />
                  Rechazar
                </Button>
              </div>
              
              <div className="text-xs text-center text-gray-500">
                <p>
                  Al hacer clic en "Aceptar todas", consientes el uso de cookies para analizar el tráfico y personalizar el contenido.
                  Consulta nuestra{" "}
                  <Link to="/politica-cookies" className="text-accent hover:underline">
                    Política de Cookies
                  </Link>
                  {" "}para más información.
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
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Cookies necesarias</p>
                    <p className="text-sm text-gray-500">Esenciales para el funcionamiento del sitio</p>
                  </div>
                  <Switch checked={true} disabled />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Cookies analíticas</p>
                    <p className="text-sm text-gray-500">Nos ayudan a mejorar nuestra web</p>
                  </div>
                  <Switch 
                    checked={preferences.analytics} 
                    onCheckedChange={(checked) => setPreferences(prev => ({...prev, analytics: checked}))} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Cookies de marketing</p>
                    <p className="text-sm text-gray-500">Publicidad personalizada</p>
                  </div>
                  <Switch 
                    checked={preferences.marketing} 
                    onCheckedChange={(checked) => setPreferences(prev => ({...prev, marketing: checked}))} 
                  />
                </div>
              </div>
              
              <div className="flex gap-3 justify-end">
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
