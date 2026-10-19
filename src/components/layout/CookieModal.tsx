import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import Cookie from "@mui/icons-material/Cookie";
import Check from "@mui/icons-material/Check";
import Close from "@mui/icons-material/Close";
import Settings from "@mui/icons-material/Settings";
import { useCookieConsent } from "@/hooks/useCookieConsent";
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
    // Non-dismissable: the user must choose an option, so closing is a no-op.
    <Dialog open={showBanner} onClose={() => {}} fullWidth maxWidth="sm">
      <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Cookie sx={{ color: "primary.main" }} />
        <span>Configuración de cookies</span>
      </DialogTitle>

      <DialogContent>
        <DialogContentText sx={{ fontSize: "0.875rem" }}>
          Usamos cookies para medir las visitas y mejorar la web. Puedes aceptarlas
          todas, rechazarlas o elegir cuáles activas.
        </DialogContentText>

        <AnimatePresence mode="wait">
          {!showCustomize ? (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                justifyContent="center"
                sx={{ mt: 3 }}
              >
                <Button
                  onClick={handleAccept}
                  variant="contained"
                  color="secondary"
                  startIcon={<Check />}
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                >
                  Aceptar todas
                </Button>
                <Button
                  onClick={() => setShowCustomize(true)}
                  variant="outlined"
                  startIcon={<Settings />}
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                >
                  Personalizar
                </Button>
                <Button
                  onClick={handleReject}
                  variant="outlined"
                  color="inherit"
                  startIcon={<Close />}
                  sx={{ width: { xs: "100%", sm: "auto" }, borderColor: "divider" }}
                >
                  Rechazar
                </Button>
              </Stack>

              <Typography
                sx={{ mt: 3, fontSize: "0.75rem", textAlign: "center", color: "text.secondary", lineHeight: 1.6, maxWidth: "65ch", mx: "auto" }}
              >
                Si aceptas todas, autorizas las cookies para medir el tráfico y
                personalizar el contenido. Más detalles en nuestra{" "}
                <Link
                  to="/politica-cookies"
                  style={{ color: "#2b2b2b", fontWeight: 500, textDecoration: "underline" }}
                >
                  Política de Cookies
                </Link>.
              </Typography>
            </motion.div>
          ) : (
            <motion.div
              key="customize"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Stack spacing={2.5} sx={{ mt: 3 }}>
                {[
                  {
                    id: "necessary",
                    label: "Cookies necesarias",
                    description: "Necesarias para que la web funcione",
                    value: true,
                    disabled: true,
                  },
                  {
                    id: "analytics",
                    label: "Cookies analíticas",
                    description: "Miden las visitas para saber qué páginas interesan",
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
                  <Stack
                    key={cookie.id}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <div>
                      <Typography sx={{ fontWeight: 500 }}>{cookie.label}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {cookie.description}
                      </Typography>
                    </div>
                    <Switch
                      checked={cookie.value}
                      disabled={cookie.disabled}
                      onChange={(_, checked) => cookie.onChange?.(checked)}
                    />
                  </Stack>
                ))}
              </Stack>

              <Stack direction="row" spacing={1.5} justifyContent="flex-end" flexWrap="wrap" useFlexGap sx={{ mt: 4 }}>
                <Button variant="outlined" onClick={() => setShowCustomize(false)}>
                  Volver
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleSavePreferences}
                >
                  Guardar preferencias
                </Button>
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default CookieModal;
