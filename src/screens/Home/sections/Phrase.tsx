import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";

const Phrase = () => {
  return (
    <Box
      component={"section"}
      sx={{
        pt: {
          xs: 8,
          sm: 10,
          md: 13,
        },
        pb: 0,
      }}
    >
      <Container>
        <Grid
          container
          spacing={{
            xs: 2,
            md: 4,
            lg: 8,
          }}
        >
          <Grid item xs={12} sm={4}>
            <Typography
              sx={{
                fontSize: "32px",
                letterSpacing: "-0.5px",
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              {`"Que la comida sea tu medicina y la medicina sea tu comida."`}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box
              component="picture"
              sx={{
                display: "block",
                position: "relative",
                width: "100%",
                height: "450px",
                overflow: "hidden",
                borderRadius: "20px",
              }}
            >
              <Image
                quality={85}
                className="healty-food"
                src="/images/comida-saludable.jpg"
                alt="pizzas"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Phrase;
