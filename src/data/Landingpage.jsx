import React from 'react'
// import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Page from "../components/Page";
import Layanan from "../components/Layanan";
import Rating from "../components/Rating";
import Keunggulan from "../components/Keunggulan";
import Faq from "../components/FAQ";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import Header from '../components/Header';

const Landingpage = () => {
  return ( 
    <div className="overflow-hidden">
      {/* <Navbar /> */}
      <Header />
      <Home />
      <Page />
      <Layanan />
      <Rating />
      <Keunggulan />
      <Faq />
      <Accordion />
      <Footer />
    </div>
  )
}

export default Landingpage;
