import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import FooterBottom from "../footer/FooterBottom";
import Contact from "./Contact";

const ContactPage = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-screen-xl mx-auto">
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
};

export default ContactPage;
