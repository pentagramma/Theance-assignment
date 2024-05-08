import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Questions from "../components/Questions";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Questions />
      <Footer />
    </>
  );
};

export default Home;
