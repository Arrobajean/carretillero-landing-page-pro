import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import { colors } from "@/theme/tokens";

interface HeaderProps {
  variant?: "default" | "black";
}

const Header = ({ variant = "default" }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("cta-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { pathname } = useLocation();
  const isBlack = variant === "black";
  // Transparent only at the top of the home page, where the bar merges with the hero photo.
  const isOnHero = pathname === "/" && !isBlack && !isScrolled;

  const buttonSx = {
    bgcolor: isOnHero ? colors.white : colors.black,
    color: isOnHero ? colors.dark : colors.white,
    "&:hover": { bgcolor: isOnHero ? "#f0f0f0" : colors.dark },
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={isOnHero ? 0 : 4}
      sx={{
        bgcolor: isBlack ? colors.black : isOnHero ? "transparent" : colors.white,
        color: isOnHero || isBlack ? colors.white : colors.dark,
        transition: "all 300ms",
      }}
    >
      <Toolbar
        disableGutters
        className="container mx-auto px-4 md:px-8 justify-between"
        sx={{ py: 3, minHeight: "auto" }}
      >
        <Link to="/" onClick={scrollToTop} aria-label="TuCarretillero, ir al inicio" className="flex">
          {/* Reversed to white over the hero and the black bar, natural colors on the white bar */}
          <img
            src="/logo-transparent.png"
            alt="TuCarretillero"
            className="h-9 md:h-11 w-auto block"
            style={{
              filter: isOnHero || isBlack ? "brightness(0) invert(1)" : "none",
              transition: "filter 300ms",
            }}
          />
        </Link>

        <Stack direction="row" spacing={1.5} alignItems="center">
          <Button
            component={Link}
            to="/cursos"
            variant="contained"
            sx={{ ...buttonSx, display: { xs: "none", md: "inline-flex" } }}
          >
            Cursos
          </Button>
          <Button variant="contained" onClick={scrollToContact} sx={buttonSx}>
            Contáctanos
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
