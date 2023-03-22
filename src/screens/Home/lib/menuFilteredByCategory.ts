import { IProduct, IProductCategory } from "@/intertafaces/menu";

export const menuFilteredByCategory = (
  allMenu: IProduct[],
  categorySelected: IProductCategory | "all"
) => {
  if (categorySelected === "all") {
    return allMenu;
  }

  return allMenu.filter((menu) => {
    const categoryFounded = menu.categories.find(
      (category) => category === categorySelected
    );
    return categoryFounded ? true : false;
  });
};
