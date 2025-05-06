
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const CookieBanner = () => {
  const { showBanner, acceptCookies, rejectCookies } = useCookieConsent();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render on server or if consent has already been given
  if (!isMounted || !showBanner) {
    return null;
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:max-w-md",
            "bg-[#f5f5dc] text-[#654321] border border-[#e6e0d4] rounded-lg shadow-lg z-50",
            "p-4 md:p-6 font-poppins"
          )}
        >
          <div className="flex items-start gap-4">
            <Cookie className="h-8 w-8 flex-shrink-0 text-accent" />
            <div className="space-y-3">
              <h3 className="font-medium text-lg">Política de cookies</h3>
              <p className="text-sm">
                Este sitio web utiliza cookies técnicas necesarias para su funcionamiento y cookies de análisis 
                para mejorar su experiencia. Puedes aceptar todas las cookies o personalizar tu elección.
              </p>
              
              <div className="flex flex-col xs:flex-row gap-2 pt-2">
                <Button 
                  onClick={acceptCookies} 
                  variant="default" 
                  className="bg-accent hover:bg-accent/90"
                >
                  Aceptar todas
                </Button>
                <Button 
                  onClick={rejectCookies} 
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10"
                >
                  Solo esenciales
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
