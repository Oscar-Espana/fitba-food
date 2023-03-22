import React, { FC } from "react";
import { Box } from "@mui/material";
import { IProductCategory } from "@/intertafaces/menu";
import CategoryItem from "./CustomChip";
import CustomChip from "./CustomChip";

interface Props {
  categories: IProductCategory[];
  categorySelected: IProductCategory | "all";
  onCategorySelected: (categorySelected: "all" | IProductCategory) => void;
}
const CategoriesProduct: FC<Props> = ({
  categories,
  categorySelected,
  onCategorySelected,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        columnGap: { xs: 2, sm: 3, md: 3.5 },
        rowGap: 2,
      }}
    >
      <CustomChip
        name="Todos"
        isSeleted={categorySelected === "all"}
        onClick={() => onCategorySelected("all")}
      />
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          name={category.name}
          isSeleted={categorySelected === category}
          onClick={() => onCategorySelected(category)}
        />
      ))}
    </Box>
  );
};

export default CategoriesProduct;
