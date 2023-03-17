import React from "react";
import Footer from "../components/Footer";
import Hero from "./sections/Hero";
import MenuProducts from "./sections/MenuProducts";
import Phrase from "./sections/Phrase";

const Home = () => {
  return (
    <>
      <Hero />
      <Phrase />
      <MenuProducts />
      <Footer />
    </>
  );
};

export default Home;
