import { Link as RouterLink } from "react-router-dom";
import { IconButton, Link, Stack, Typography } from "@mui/material";
import Article from "@mui/icons-material/Article";
import Cookie from "@mui/icons-material/Cookie";
import Description from "@mui/icons-material/Description";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";

const linkSx = {
  color: "#e4e4e499",
  transition: "color 200ms",
  "&:hover": { color: "#FFFFFF" },
};

const socialSx = {
  color: "#e4e4e499",
  "&:hover": { color: "#FFFFFF", bgcolor: "transparent" },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1b1b1b] text-[#e4e4e4] py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <Typography component="h2" sx={{ mb: 2 }}>
              <RouterLink
                to="/"
                aria-label="TuCarretillero, ir al inicio"
                className="inline-flex rounded-lg bg-white px-2 py-1"
              >
                <img src="/logo.png" alt="TuCarretillero" className="h-14 w-auto block" />
              </RouterLink>
            </Typography>
            <Typography sx={{ color: "#e4e4e499", mb: 2 }}>
              Professional Categories SL
              <br />
              Formación de carretilleros y operarios de maquinaria desde hace más de 10 años.
            </Typography>
          </div>

          <div>
            <Typography component="h3" variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Contacto
            </Typography>
            <Stack
              spacing={1.5}
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Phone fontSize="small" sx={{ color: "#e4e4e4" }} />
                <Link
                  href="tel:+34600000000"
                  underline="hover"
                  sx={linkSx}
                >
                  +34 600 000 000
                </Link>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Email fontSize="small" sx={{ color: "#e4e4e4" }} />
                <Link
                  href="mailto:info@tucarretillero.com"
                  underline="hover"
                  sx={linkSx}
                >
                  info@tucarretillero.com
                </Link>
              </Stack>
            </Stack>
          </div>

          <div>
            <Typography component="h3" variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Sedes
            </Typography>
            <Stack
              component="ul"
              spacing={1}
              alignItems={{ xs: "center", md: "flex-start" }}
              sx={{ listStyle: "none", m: 0, p: 0, color: "#e4e4e499" }}
            >
              <li>Coslada</li>
              <li>Alcorcón</li>
              <li>Ciempozuelos</li>
              <li>Alcantarilla</li>
            </Stack>
          </div>

          <div>
            <Typography component="h3" variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Síguenos
            </Typography>
            <Stack spacing={2}>
              <Stack
                direction="row"
                spacing={1}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <IconButton
                  component="a"
                  href="#"
                  aria-label="Facebook"
                  sx={socialSx}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  aria-label="Instagram"
                  sx={socialSx}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                  </svg>
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  aria-label="Twitter"
                  sx={socialSx}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </IconButton>
              </Stack>

              <Stack
                spacing={1}
                sx={{ fontSize: "0.875rem" }}
                alignItems={{ xs: "center", md: "flex-start" }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Description fontSize="small" sx={{ color: "#e4e4e4" }} />
                  <Link
                    component={RouterLink}
                    to="/politica-privacidad"
                    underline="hover"
                    sx={linkSx}
                  >
                    Política de Privacidad
                  </Link>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Article fontSize="small" sx={{ color: "#e4e4e4" }} />
                  <Link
                    component={RouterLink}
                    to="/terminos-condiciones"
                    underline="hover"
                    sx={linkSx}
                  >
                    Términos de Uso
                  </Link>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Cookie fontSize="small" sx={{ color: "#e4e4e4" }} />
                  <Link
                    component={RouterLink}
                    to="/politica-cookies"
                    underline="hover"
                    sx={linkSx}
                  >
                    Política de Cookies
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <Typography sx={{ color: "#e4e4e499", fontSize: "0.875rem", textAlign: "center" }}>
            &copy; {currentYear} Professional Categories SL. Todos los derechos
            reservados.
          </Typography>
          <Typography
            sx={{ color: "#e4e4e499", fontSize: "0.875rem", textAlign: "center", mt: 1 }}
          >
            Sitio desarrollado por{" "}
            <Link
              href="https://www.404studios.es"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{
                color: "#e4e4e4",
                fontWeight: 500,
                transition: "color 200ms",
                "&:hover": { color: "#FFFFFF" },
              }}
            >
              404studios
            </Link>
          </Typography>
          <Typography
            sx={{ color: "#e4e4e466", fontSize: "0.75rem", textAlign: "center", mt: 0.5 }}
          >
            por Jean Paul Castañeda Huerta
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
