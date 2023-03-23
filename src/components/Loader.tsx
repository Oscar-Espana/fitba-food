import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <Box
      component={motion.div}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        touchAction: "none",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.25 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        src="/icons/logo-fitba-food.svg"
        alt="Logo Fitbafood"
        width={250}
        height={225}
      />
    </Box>
  );
};

export default Loader;
