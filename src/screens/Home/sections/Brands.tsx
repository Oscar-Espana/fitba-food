import BrandSlideshow from "@/screens/components/BrandSlideshow";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const images = [
  "/images/fitness&balance/recomposicion-corporal-1.jpeg",
  "/images/fitness&balance/recomposicion-corporal-2.jpeg",
  "/images/fitness&balance/recomposicion-corporal-3.jpeg",
  "/images/fitness&balance/recomposicion-corporal-4.jpeg",
];

const Brands = () => {
  return (
    <Box
      component="section"
      sx={{
        pt: 0,
        pb: {
          xs: 8,
          sm: 10,
          md: 13,
        },
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
          }}
        >
          Conoce nuestras
        </Typography>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 5,
          }}
        >
          MARCAS ALIADAS
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: {
                  xs: "center",
                  md: "start",
                },
              }}
            >
              <Typography variant="subtitle1" mb={0.5}>
                Fitness&Balance:
              </Typography>

              <Typography mb={4}>
                Asesoramiento nutricional y deportivo
              </Typography>
              <Image
                src="/icons/fitness&balance.svg"
                alt="Logo Fitness&Balance"
                width={175}
                height={175}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} mt={4} alignItems="center">
            <BrandSlideshow images={images} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Brands;
