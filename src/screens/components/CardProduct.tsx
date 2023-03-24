import { IProduct } from "@/intertafaces";
import { currency } from "@/utils";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  product: IProduct;
}

const CardProduct: FC<Props> = ({ product }) => {
  return (
    <Box aria-label="card-product">
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
          src={product.url}
          alt={product.name}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "top right",
          }}
        />
      </Box>
      <Box
        sx={{
          background: "#fafafa",
          py: 1.5,
        }}
      >
        <DetailProduct name={product.name} price={product.price} />
        {product.variants?.map((variant, index) => (
          <DetailProduct
            key={index}
            name={variant.name}
            price={variant.price}
          />
        ))}
      </Box>
    </Box>
  );
};

const DetailProduct = ({ name, price }: { name: string; price: number }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap={1.5}
      px={2.5}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 500,
        }}
      >
        {name}
      </Typography>
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
  );
};

export default CardProduct;
