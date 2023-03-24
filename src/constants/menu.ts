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
const drinksCategory: IProductCategory = { id: "drinks", name: "Bedidas" };
const dessertFitCategory: IProductCategory = {
  id: "dessertFit",
  name: "Postres",
};

export const menu: IProduct[] = [
  {
    url: "/images/brownie-fitba.jpg",
    name: "Brownie FITBA",
    price: 3.2,
    categories: [dessertFitCategory],
  },
  {
    url: "/images/burrito-fit.jpg",
    name: "Burrito fit",
    price: 3.5,
    categories: [mexicanCategory],
  },
  {
    url: "/images/french-toast-fit.jpg",
    name: "French toast fit",
    price: 4.5,
    categories: [dessertFitCategory],
  },
  {
    url: "/images/bolon-fit.jpg",
    name: "Bolón fit",
    price: 2.0,
    categories: [ecuadorianCategory],
  },
  {
    url: "/images/lasagna-fit.jpg",
    name: "Lasagna fit",
    price: 4.0,
    categories: [italianCategory],
  },
  {
    url: "/images/manzana-cake.jpg",
    name: "Manzana cake",
    price: 3.0,
    categories: [dessertFitCategory],
  },
  {
    url: "/images/oat-bowls.jpg",
    name: "Oat bowls",
    price: 4.0,
    categories: [bowlsCategory],
  },
  {
    url: "/images/shakes-fit.jpg",
    name: "Shakes fit",
    price: 3.5,
    categories: [drinksCategory],
  },
  {
    url: "/images/nachos-fit.jpg",
    name: "Nachos fit",
    price: 4,
    categories: [mexicanCategory],
  },
  {
    url: "/images/pizza-fit.jpg",
    name: "Pizza fit",
    price: 3.6,
    categories: [italianCategory, fastFitCategory],
  },
  {
    url: "/images/tacos-fit.jpg",
    name: "Tacos fit",
    price: 3,
    categories: [mexicanCategory],
  },
  {
    url: "/images/alitas-fit.jpg",
    name: "Alitas fit",
    price: 5,
    categories: [fastFitCategory],
  },
  {
    url: "/images/majado-fit.jpg",
    name: "Majado fit",
    price: 3.6,
    categories: [ecuadorianCategory, breakfastsCategory],
  },
  {
    url: "/images/hamburguesa-fit.jpg",
    name: "Hamburguesa fit",
    price: 3.6,
    categories: [fastFitCategory],
  },
  {
    url: "/images/sandwich-fit.jpg",
    name: "Sandwich fit",
    price: 2.8,
    categories: [ecuadorianCategory, breakfastsCategory],
  },
  {
    url: "/images/zanahoria-cake.jpg",
    name: "Zanahoria cake",
    price: 3,
    categories: [dessertFitCategory],
  },
];
