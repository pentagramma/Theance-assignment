import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import Signup from "./components/Signup";
import Submitted from "./components/Submitted";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
