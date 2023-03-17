import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import CardProduct from "@/screens/components/CardProduct";

const Menu = () => {
  return (
    <Box
      sx={{
        py: 13,
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
    url: "/images/pizzas-fit.jpg",
    name: "Pizza fit",
  },
  {
    url: "/images/postre-chocolate.jpg",
    name: "Postre de chocolate ",
  },
  {
    url: "/images/postre-fresas.jpg",
    name: "Postre de fresas",
  },
  {
    url: "/images/tacos-fit.jpg",
    name: "Tacos al Pastor",
  },
  {
    url: "/images/tacos-guacamole.jpg",
    name: "Tacos de la casa",
  },
];
