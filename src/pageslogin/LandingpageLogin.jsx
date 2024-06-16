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
import HeaderLogin from "../components/HeaderLogin"

const Landingpage = () => {
  return ( 
    <div className="overflow-hidden">
      {/* <Navbar /> */}
      <HeaderLogin />
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
