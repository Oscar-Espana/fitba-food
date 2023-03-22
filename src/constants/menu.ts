import { IProduct, IProductCategory } from "@/intertafaces/menu";

const italianCategory: IProductCategory = { id: "italian", name: "Italiana" };
const mexicanCategory: IProductCategory = { id: "mexican", name: "Mexicana" };
const ecuadorianCategory: IProductCategory = {
  id: "ecuadorian",
  name: "Ecuatoriana",
};
const fastFitCategory: IProductCategory = { id: "fastFit", name: "Fast fit" };
const breakfastsCategory: IProductCategory = {
  id: "breakfasts",
  name: "Desayunos",
};
const bowlsCategory: IProductCategory = { id: "bowls", name: "Bowls" };
const dessertFitCategory: IProductCategory = {
  id: "dessertFit",
  name: "Postres",
};

export const menu: IProduct[] = [
  {
    url: "/images/bowl-cereales-fit.jpg",
    name: "Bowl de cererales fit",
    categories: [breakfastsCategory, bowlsCategory],
  },
  {
    url: "/images/brownie-fit.jpg",
    name: "Brownie fit",
    categories: [dessertFitCategory],
  },
  {
    url: "/images/burritos-fit.jpg",
    name: "Burritos fit",
    categories: [mexicanCategory],
  },
  {
    url: "/images/french-toast.jpg",
    name: "French toast",
    categories: [dessertFitCategory],
  },
  {
    url: "/images/bolon-fit.jpg",
    name: "Bolón fit",
    categories: [ecuadorianCategory],
  },
  {
    url: "/images/lasana-fit.jpg",
    name: "Lasaña fit",
    categories: [italianCategory],
  },
  {
    url: "/images/majado-fit.jpg",
    name: "Majado fit",
    categories: [ecuadorianCategory, breakfastsCategory],
  },

  {
    url: "/images/nachos-fit.jpg",
    name: "Nachos fit",
    categories: [mexicanCategory],
  },

  {
    url: "/images/pizza-fit.jpg",
    name: "Pizza fit",
    categories: [italianCategory, fastFitCategory],
  },
  {
    url: "/images/tacos-fit.jpg",
    name: "Tacos fit",
    categories: [mexicanCategory],
  },
  {
    url: "/images/alitas.jpg",
    name: "Alitas",
    categories: [fastFitCategory],
  },
];
