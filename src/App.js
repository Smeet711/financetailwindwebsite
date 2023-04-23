import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Cards />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;
