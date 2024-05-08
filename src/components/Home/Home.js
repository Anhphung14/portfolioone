// Home.js
import React from "react";
import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import Fields from "../fields/Fields";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import FooterBottom from "../footer/FooterBottom";
import News from "../news/News";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-auto bg-gradient-to-br from-yellow-300 via-pink-300 to-blue-500 text-lightText">
        <Banner />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Fields />
        <News />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
};

export default Home;
