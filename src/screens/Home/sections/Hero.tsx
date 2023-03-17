import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <Image
        src="/images/tacos-guacamole.jpg"
        alt="Pizzas FIT"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        sx={{
          background: "black",
          opacity: "0.45",
        }}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h1" color="white" fontFamily="var(--Poppins)">
            Fitba
            <Typography component={"span"} variant="h1" fontWeight="700">
              Food
            </Typography>
          </Typography>
          <Typography variant="body1" color="white">
            Alimentarse de forma saludable nunca fue tan rico
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
