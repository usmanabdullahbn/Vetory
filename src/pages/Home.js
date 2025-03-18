import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import Footer from "../component/Footer";
import LetConnect from "../component/LetConnect";
import PortfolioSection from "../component/Portfolio";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <PortfolioSection/>
      <LetConnect/>
      <Footer/>
    </div>
  );
};

export default Home;
