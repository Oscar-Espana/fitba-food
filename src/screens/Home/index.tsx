import React from "react";
import Footer from "../components/Footer";
import Brands from "./sections/Brands";
import Hero from "./sections/Hero";
import MenuProducts from "./sections/MenuProducts";
import Phrase from "./sections/Phrase";

const Home = () => {
  return (
    <>
      <Hero />
      <Phrase />
      <MenuProducts />
      <Brands />
      <Footer />
    </>
  );
};

export default Home;
