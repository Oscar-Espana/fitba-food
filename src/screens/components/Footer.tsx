import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

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
        <Image
          src="/icons/logo-fitba-food.svg"
          alt="Logo Fitbafood"
          width={250}
          height={225}
        />

        <Link href="mailto:sebas2240@live.com">sebas2240@live.com</Link>
        <Link href="tel:+593968345938">+593 96 834 5938</Link>
        <Typography align="center">
          Espinoza de los Monteros y Juan Pablo Segundo (Esquina)
        </Typography>
        <Box>
          <SocialIcon
            target={"_blank"}
            url="https://www.instagram.com/fitbafood/?igshid=YWVjMmZiZjg%3D"
            fgColor="gray"
            bgColor="transparent"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
