import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import CardProduct from "@/screens/components/CardProduct";

const Menu = () => {
  return (
    <Box
      sx={{
        py: {
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
          Descubre
        </Typography>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
          }}
        >
          NUESTRO MENÚ
        </Typography>
        <Grid container spacing={3} mt={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardProduct name={product.name} url={product.url} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Menu;

const products = [
  {
    url: "/images/bowl-cereales-fit.jpg",
    name: "Bowl de cererales fit",
  },
  {
    url: "/images/brownie-fit.jpg",
    name: "Brownie fit",
  },
  {
    url: "/images/burritos-fit.jpg",
    name: "Burritos fit",
  },
  {
    url: "/images/french-toast.jpg",
    name: "French toast",
  },
  {
    url: "/images/bolon-fit.jpg",
    name: "Bolón fit",
  },
  {
    url: "/images/lasana-fit.jpg",
    name: "Lasaña fit",
  },
  {
    url: "/images/majado-fit.jpg",
    name: "Majado fit",
  },

  {
    url: "/images/nachos-fit.jpg",
    name: "Nachos fit",
  },

  {
    url: "/images/pizza-fit.jpg",
    name: "Pizza fit",
  },
  {
    url: "/images/tacos-fit.jpg",
    name: "Tacos fit",
  },
  {
    url: "/images/alitas.jpg",
    name: "Alitas",
  },
];
