import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { colors, fonts, radius } from "./tokens";

// Material Design theme built on the Carretillero design tokens.
const theme = createTheme({
  palette: {
    primary: { main: colors.dark, contrastText: colors.white },
    secondary: { main: colors.black, contrastText: colors.white },
    text: { primary: colors.dark, secondary: colors.dark },
    background: { default: colors.light, paper: colors.white },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: fonts.main,
    h1: { fontSize: "3.5rem", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-2.24px" },
    h2: { fontSize: "3rem", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.96px" },
    h3: { fontSize: "2.5rem", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.8px" },
    h4: { fontSize: "2rem", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.64px" },
    h5: { fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.48px" },
    h6: { fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.4px" },
    body1: { fontSize: "1rem", fontWeight: 500, lineHeight: 1.4, letterSpacing: "-0.32px" },
    body2: { fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.28px" },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "-0.32px",
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: radius.ultra, paddingInline: 24, minHeight: 44 },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: { borderRadius: radius.big, "&::before": { display: "none" } },
      },
    },
  },
});

export default responsiveFontSizes(theme, { factor: 1.5 });
