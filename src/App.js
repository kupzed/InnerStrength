import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './data/Login.jsx';
import Landingpage from './data/Landingpage.jsx';
import Daftar from './data/Daftar.jsx';
import Bipolar from './pages/Bipolar.jsx';
import Depression from './pages/Depression.jsx';
import Anxiety from './pages/Anxiety.jsx';
import LoginTerapis from './data/LoginTerapis.jsx';
import SignUp from './components/SignUp.jsx';
import DaftarTerapis from './data/DaftarTerapis.jsx';
import Pageone from './pages/Tentang Kami/Pageone.jsx';
import Komunitas from './pages/Komunitas.jsx';
import Layout from './components/shared/Layout.jsx';
import Dashboard from './components/shared/Dashboard.jsx';
import Pasien from './components/shared/Pasien.jsx';
import PasienOnline from './components/shared/PasienOnline.jsx';
import PasienOffline from './components/shared/PasienOffline.jsx';
import JanjiTemu from './components/shared/JanjiTemu.jsx';
import JanjiOnline from './components/shared/JanjiOnline.jsx';
import JanjiOffline from './components/shared/JanjiOffline.jsx';
import Pesan from './components/shared/Pesan.jsx';
import Jadwal from './components/shared/Jadwal.jsx';
import TransitionChart from './components/shared/TransactionChart.jsx';
import BuyerProfileChart from './components/shared/BuyerProfileChart.jsx';
import IsiPesan from './components/shared/IsiPesan.jsx';
// Bagian Setelah Login
import LandingpageLogin from './pageslogin/LandingpageLogin.jsx';
import Notifikasi from './data/Notifikasi.jsx';
import ProfileDash from './components/shared/ProfileDash.jsx';
import Notifications from './components/shared/Notifications.jsx';
import TentangkamiLogin from './pageslogin/TentangkamiLogin.jsx';
import Consultation from './pages/konsultasi/Consultation.jsx';
import Konsultasi from './pages/konsultasi/Konsultasi.jsx';
import KonsultasiLogin from './pageslogin/KonsultasiLogin.jsx';
import MyProfile from './pageslogin/MyProfile.jsx';
import Rekomen1 from './pagesrekomendasi/Rekomen1.jsx';
import Rekomen2 from './pagesrekomendasi/Rekomen2.jsx';
import Rekomen3 from './pagesrekomendasi/Rekomen3.jsx';
import Rekomen4 from './pagesrekomendasi/Rekomen4.jsx';
import Rekomen5 from './pagesrekomendasi/Rekomen5.jsx';
import Rekomen6 from './pagesrekomendasi/Rekomen6.jsx';
import Rekomen7 from './pagesrekomendasi/Rekomen7.jsx';
import Rekomen9 from './pagesrekomendasi/Rekomen9.jsx';
import Rekomen10 from './pagesrekomendasi/Rekomen10.jsx';
import Rekomen11 from './pagesrekomendasi/Rekomen11.jsx';
import Rekomen12 from './pagesrekomendasi/Rekomen12.jsx';
import KomunitasLogin from './pageslogin/KomunitasLogin.jsx';
import KomunitasAnda from './pageslogin/KomunitasAnda.jsx';
import KomunitasSalingjaga from './components/shared/KomunitasSalingjaga.jsx';
import KomunitasMentarisehat from './components/shared/KomunitasMentarisehat.jsx';
import KomunitasPikiransejahtera from './components/shared/KomunitasPikiransejahtera.jsx';
import KomunitasBugarmental from './components/shared/KomunitasBugarmental.jsx';
import KomunitasHatiwaras from './components/shared/KomunitasHatiwaras.jsx';
import KomunitasBicarabaik from './components/shared/KomunitasBicarabaik.jsx';
import SalingJaga from './pages/SalingJaga.jsx';
import PikiranSejahtera from './pages/PikiranSejahtera.jsx';
import BugarMental from './pages/BugarMental.jsx';
import BicaraBaik from './pages/BicaraBaik.jsx';
import MentariSehat from './pages/MentariSehat.jsx';
import HatiWaras from './pages/HatiWaras.jsx';
import Postinganmu from './pages/Postinganmu.jsx';
import DropdownJenispenyakit from './pages/DropdownJenispenyakit.jsx';
import DropdownUrutkan from './pages/DropdownUrutkan.jsx';
import DropdownPolamakan from './pages/DropdownPolamakan.jsx';
import DropdownHobi from './pages/DropdownHobi.jsx';
import CardKomunitas from './pages/CardKomunitas.jsx';
import Postingan1 from './pages/postingan1.jsx';
import Postingan2 from './pages/postingan2.jsx';
import Postingan3 from './pages/postingan3.jsx';
import Postingan4 from './pages/postingan4.jsx';
import Postingan5 from './pages/postingan5.jsx';
import Postingan6 from './pages/postingan6.jsx';
import DetailKonsultasi from './pageslogin/konsultasi/DetailKonsultasi.jsx';
import PesanOnline from './pageslogin/konsultasi/PesanOnline.jsx';
import PesanOffline from './pageslogin/konsultasi/PesanOffline.jsx';
import PembayaranOnline from './pageslogin/konsultasi/PembayaranOnline.jsx';
import MetodePembayaran from './pageslogin/konsultasi/MetodePembayaran.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/LandingpageLogin" element={<LandingpageLogin />} />
          <Route path="/Pageone" element={<Pageone />} />
          <Route path='/Konsultasi' element={<Konsultasi />} />
          <Route path='/Komunitas' element={<Komunitas />} />
          <Route path="/Bipolar" element={<Bipolar />} />
          <Route path="/Anxiety" element={<Anxiety />} />
          <Route path="/Depression" element={<Depression />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path='/LoginTerapis' element={<LoginTerapis />} />
          <Route path='/DaftarTerapis' element={<DaftarTerapis />} />
          <Route path="/Layout" element={<Layout />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Pasien" element={<Pasien />} />
          <Route path="/PasienOnline" element={<PasienOnline />} />
          <Route path="/PasienOffline" element={<PasienOffline />} />
          <Route path="/Pesan" element={<Pesan />} />
          <Route path="/JanjiTemu" element={<JanjiTemu />} />
          <Route path="/JanjiOnline" element={<JanjiOnline />} />
          <Route path="/JanjiOffline" element={<JanjiOffline />} />
          <Route path="/Jadwal" element={<Jadwal />} />
          <Route path="/TransitionChart" element={<TransitionChart />} />
          <Route path="/BuyerProfileChart" element={<BuyerProfileChart />} />
          <Route path="/IsiPesan" element={<IsiPesan />} />
          <Route path="/ProfileDash" element={<ProfileDash />} />
          <Route path="/Notifications" element={<Notifications />} />
          {/* Bagian Setelah Login */}
          <Route path="/Notifikasi" element={<Notifikasi />} />
          <Route path='/KonsultasiLogin' element={<KonsultasiLogin />} />
          <Route path='/Consultation' element={<Consultation />} />
          <Route path="/TentangkamiLogin" element={<TentangkamiLogin />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/Rekomen1" element={<Rekomen1 />} />
          <Route path="/Rekomen2" element={<Rekomen2 />} />
          <Route path="/Rekomen3" element={<Rekomen3 />} />
          <Route path="/Rekomen4" element={<Rekomen4 />} />
          <Route path="/Rekomen5" element={<Rekomen5 />} />
          <Route path="/Rekomen6" element={<Rekomen6 />} />
          <Route path="/Rekomen7" element={<Rekomen7 />} />
          <Route path="/Rekomen9" element={<Rekomen9 />} />
          <Route path="/Rekomen10" element={<Rekomen10 />} />
          <Route path="/Rekomen11" element={<Rekomen11 />} />
          <Route path="/Rekomen12" element={<Rekomen12 />} />
          <Route path="/KomunitasLogin" element={<KomunitasLogin />} />
          <Route path="/KomunitasAnda" element={<KomunitasAnda />} />
          <Route path="/KomunitasSalingJaga" element={<KomunitasSalingjaga />} />
          <Route path="/KomunitasPikiransejahtera" element={<KomunitasPikiransejahtera />} />
          <Route path="/KomunitasMentarisehat" element={<KomunitasMentarisehat />} />
          <Route path="/KomunitasHatiwaras" element={<KomunitasHatiwaras />} />
          <Route path="/KomunitasBicarabaik" element={<KomunitasBicarabaik />} />
          <Route path="/KomunitasBugarmental" element={<KomunitasBugarmental />} />|
          <Route path="/SalingJaga" element={<SalingJaga />} />
          <Route path="/PikiranSejahtera" element={<PikiranSejahtera />} />
          <Route path="/MentariSehat" element={<MentariSehat />} />
          <Route path="/HatiWaras" element={<HatiWaras />} />
          <Route path="/BicaraBaik" element={<BicaraBaik />} />
          <Route path="/BugarMental" element={<BugarMental />} />|
          <Route path="/DropdownJenispenyakit" element={<DropdownJenispenyakit />} />
          <Route path="/DropdownUrutkan" element={<DropdownUrutkan />} />
          <Route path="/DropdownHobi" element={<DropdownHobi />} />
          <Route path="/DropdownPolamakan" element={<DropdownPolamakan />} />
          <Route path="/CardKomunitas" element={<CardKomunitas />} />
          <Route path="/Postingan1" element={<Postingan1 />} />
          <Route path="/Postingan2" element={<Postingan2 />} />
          <Route path="/Postingan3" element={<Postingan3 />} />
          <Route path="/Postingan4" element={<Postingan4 />} />
          <Route path="/Postingan5" element={<Postingan5 />} />
          <Route path="/Postingan6" element={<Postingan6 />} />
          <Route path="/Postinganmu" element={<Postinganmu />} />
          <Route path="/DetailKonsultasi" element={<DetailKonsultasi />} />
          <Route path="/PesanOnline" element={<PesanOnline />} />
          <Route path="/PesanOffline" element={<PesanOffline />} />
          <Route path="/PembayaranOnline" element={<PembayaranOnline />} />
          <Route path="/MetodePembayaran" element={<MetodePembayaran />} />
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
