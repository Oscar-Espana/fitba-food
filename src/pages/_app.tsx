import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Poppins, Dancing_Script } from "next/font/google";
import "@/styles/globals.css";
import { lightTheme } from "../themes/light-theme";

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --Dancing_Script: ${dancingScript.style.fontFamily};
          --Poppins: ${poppins.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
