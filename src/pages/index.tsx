import React from "react";
import Home from "@/screens/Home";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>FitbaFood</title>
        <meta
          name="description"
          content="Fitbafood: Alimentarse de forma saludable nunca fue tan delicioso"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/logo-fitba-food.svg" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
