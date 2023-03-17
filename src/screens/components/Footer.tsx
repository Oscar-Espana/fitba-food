import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "#fafafa",
        py: 10,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          component="h2"
          fontFamily="var(--Poppins)"
          sx={{ fontSize: 52, mb: 3 }}
        >
          Fitba
          <Typography
            component={"span"}
            variant="h2"
            fontWeight="700"
            sx={{ fontSize: 52 }}
          >
            Food
          </Typography>
        </Typography>
        <Link href="mailto:test@gmail.com">test@fitbafoo.com</Link>
        <Link href="tel:+593968345938">0968345938</Link>
        <Typography>
          Espinoza de los Monteros y Juan Pablo Segundo (Esquina)
        </Typography>
        <Box>
          <SocialIcon
            target={"_blank"}
            url="https://www.instagram.com"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            target={"_blank"}
            url="https://www.facebook.com"
            fgColor="gray"
            bgColor="transparent"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
