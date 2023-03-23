import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Poppins, Dancing_Script } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import { lightTheme } from "../themes/light-theme";
import "@/styles/globals.css";
import Loader from "@/components/Loader";

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1250);
  }, []);

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
        <AnimatePresence>{isLoading ? <Loader /> : null}</AnimatePresence>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
