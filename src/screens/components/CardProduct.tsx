import { currency } from "@/utils";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  url: string;
  name: string;
  price: number;
}

const CardProduct: FC<Props> = ({ url, name, price }) => {
  return (
    <Box
      aria-label="card-product"
      sx={{
        background: "#fafafa",
      }}
    >
      <Box
        component="picture"
        sx={{
          display: "block",
          position: "relative",
          width: "100%",
          height: "375px",
          overflow: "hidden",
          transition: "all 0.7s linear",
        }}
      >
        <Image
          src={url}
          alt={name}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "top right",
          }}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={1.5}
        px={3}
      >
        <Typography variant="subtitle2">{name}</Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "primary.main",
            fontWeight: 600,
          }}
        >
          {currency.format(price)}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardProduct;
