import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  url: string;
  name: string;
}
const CardProduct: FC<Props> = ({ url, name }) => {
  return (
    <Box
      aria-label="card-product"
      sx={{
        background: "#fafafa",
        pb: 2,
      }}
    >
      <Box
        component="picture"
        sx={{
          display: "block",
          position: "relative",
          width: "100%",
          height: "350px",
          overflow: "hidden",
          transition: "all 0.7s linear",
        }}
      >
        <Image
          className="card-product"
          src={url}
          alt={name}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
      <Typography
        variant="subtitle2"
        sx={{
          mt: 1,
          textAlign: "center",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default CardProduct;
