import React, { useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import CardProduct from "@/screens/components/CardProduct";
import { menu } from "@/constants/menu";
import { IProductCategory } from "@/intertafaces/menu";
import CategoriesProduct from "@/screens/components/CategoriesProduct";
import { menuFilteredByCategory } from "../lib/menuFilteredByCategory";

const Menu = () => {
  const categoriesInMenu = menu.reduce((acc: IProductCategory[], item) => {
    item.categories.forEach((category) => {
      const categoryFounded = acc.find((aux) => aux.id === category.id);
      if (!categoryFounded) acc.push(category);
    });
    return acc;
  }, []);

  const [categorySelected, setCategorySelected] = useState<
    "all" | IProductCategory
  >("all");

  const handleCategorySelected = (
    categorySelected: "all" | IProductCategory
  ) => {
    setCategorySelected(categorySelected);
  };
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
            mb: 5,
          }}
        >
          NUESTRO MENÚ
        </Typography>
        <CategoriesProduct
          categories={categoriesInMenu}
          categorySelected={categorySelected}
          onCategorySelected={handleCategorySelected}
        />
        <Grid container spacing={3} mt={3}>
          {menuFilteredByCategory(menu, categorySelected).map(
            (product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CardProduct
                  name={product.name}
                  url={product.url}
                  price={product.price}
                />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Menu;
