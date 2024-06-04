import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './data/Login.jsx';
import Landingpage from './data/Landingpage.jsx';
import Daftar from './data/Daftar.jsx';
import LoginTerapis from './data/LoginTerapis.jsx';
import SignUp from './components/SignUp.jsx';
import DaftarTerapis from './data/DaftarTerapis.jsx';
import Pageone from './pages/Tentang Kami/Pageone.jsx';
import Konsultasi from './pages/Konsultasi.jsx';
import Komunitas from './pages/Komunitas.jsx';
import Layout from './components/shared/Layout.jsx';
import Dashboard from './components/shared/Dashboard.jsx';
import Pasien from './components/shared/Pasien.jsx';
import JanjiTemu from './components/shared/JanjiTemu.jsx';
import Pesan from './components/shared/Pesan.jsx';
import Jadwal from './components/shared/Jadwal.jsx';
import TransitionChart from './components/shared/TransactionChart.jsx';
import BuyerProfileChart from './components/shared/BuyerProfileChart.jsx';
import IsiPesan from './components/shared/IsiPesan.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Pageone" element={<Pageone />} />
          <Route path='/Konsultasi' element={<Konsultasi />} />
          <Route path='/Komunitas' element={<Komunitas />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path='/LoginTerapis' element={<LoginTerapis />} />
          <Route path='/DaftarTerapis' element={<DaftarTerapis />} />
          <Route path="/Layout" element={<Layout />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Pasien" element={<Pasien />} />
          <Route path="/Pesan" element={<Pesan />} />
          <Route path="/JanjiTemu" element={<JanjiTemu />} />
          <Route path="/Jadwal" element={<Jadwal />} />
          <Route path="/TransitionChart" element={<TransitionChart />} />
          <Route path="/BuyerProfileChart" element={<BuyerProfileChart />} />
          <Route path="/IsiPesan" element={<IsiPesan />} />        
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
