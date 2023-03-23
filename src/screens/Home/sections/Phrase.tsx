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
            xs: 4,
            lg: 8,
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              component="h2"
              variant="h3"
              sx={{
                mb: 3,
                fontFamily: "var(--Poppins)",
                fontWeight: 500,
                color: "primary.main",
                textAlign: "center",
              }}
            >
              La comida es medicina
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                letterSpacing: "-0.5px",
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              {`"Tu cuerpo cada día lucha para proteger tu corazón y alma, no la dañes.`}
            </Typography>
            <Typography
              sx={{
                mt: 1,
                fontSize: "24px",
                letterSpacing: "-0.5px",
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              {`Ámalo en un futuro lo agradecerás"`}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 3,
                textAlign: "right",
              }}
            >
              Fitness&balance
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
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
                quality={90}
                className="healty-food"
                src="/images/majado-fitba.jpg"
                alt="majado fit"
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
