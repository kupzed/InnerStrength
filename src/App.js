import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login.jsx';
import Landingpage from './pages/Landingpage.jsx';
import Pageone from './pages/Tentang Kami/Pageone.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Pageone" element={<Pageone />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Page from "./components/Page";
// import Layanan from "./components/Layanan";
// import Rating from "./components/Rating";
// import Keunggulan from "./components/Keunggulan";
// import Faq from "./components/FAQ";
// import Accordion from "./components/Accordion";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="overflow-hidden">
//       <Navbar />
//       <Home />
//       <Page />
//       <Layanan />
//       <Rating />
//       <Keunggulan />
//       <Faq />
//       <Accordion />
//       <Footer />
//     </div>
//   );
// }

// export default App;
