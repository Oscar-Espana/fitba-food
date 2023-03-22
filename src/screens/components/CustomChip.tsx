import React, { FC } from "react";
import { Box, Chip, Typography } from "@mui/material";

interface Props {
  name: string;
  isSeleted: boolean;
  onClick?: () => void;
}
const CustomChip: FC<Props> = ({ name, isSeleted, onClick }) => {
  return (
    <Chip
      onClick={onClick}
      sx={{
        borderColor: "#aaa",
        backgroundColor: isSeleted ? "#F2B410" : "none",
        color: isSeleted ? "white" : "inherit",
        py: 0.75,
        px: 2,
        fontSize: 15,
        ":hover": {
          backgroundColor: isSeleted ? "#F2B410" : "none",
        },
        ":active": {
          backgroundColor: isSeleted ? "#F2B410" : "none",
        },
      }}
      variant={isSeleted ? "filled" : "outlined"}
      label={name}
    ></Chip>
  );
};

export default CustomChip;
