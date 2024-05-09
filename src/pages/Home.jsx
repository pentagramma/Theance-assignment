import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Questions from "../components/Questions";
import Submitted from "../pages/Submitted";

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
