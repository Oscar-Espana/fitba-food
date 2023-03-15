import { createTheme, ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: ["var(--Caudex)", "sans-serif", "Roboto"].join(","),
  },
};

export const lightTheme = createTheme(lightThemeOptions);
