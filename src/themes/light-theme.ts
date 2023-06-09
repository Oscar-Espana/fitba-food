import { createTheme, ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: ["var(--Poppins)", "sans-serif", "Roboto"].join(","),
    h1: {
      fontFamily: "var(--Dancing_Script)",
      fontSize: "88px",
      fontWeight: 400,
      color: "#F2B410",
      "@media (max-width:600px)": {
        fontSize: "70px",
      },
    },
    h2: {
      fontFamily: "var(--Dancing_Script)",
      fontSize: "72px",
      fontWeight: 700,
      color: "#F2B410",
      lineHeight: 0.95,
      "@media (max-width:600px)": {
        fontSize: "62px",
      },
    },
    h3: {
      fontFamily: "var(--Poppins)",
      fontSize: "49px",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "42px",
      },
    },
    subtitle1: {
      fontFamily: "var(--Poppins)",
      fontSize: "24px",
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: "var(--Poppins)",
      fontSize: "22px",
      fontWeight: 500,
    },
    body1: {
      fontFamily: "var(--Poppins)",
      fontSize: "19px",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "var(--Poppins)",
      fontSize: "16px",
      fontWeight: 400,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#F2B410",
    },
  },
};

export const lightTheme = createTheme(lightThemeOptions);
