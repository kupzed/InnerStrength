import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/HeaderLogin';
import Footer from '../../components/Footer';
import gracia from './assets/gracia.jpg';
// import { FaDollarSign, FaMapMarkerAlt, FaUserFriends, FaRegThumbsUp, FaBriefcase } from 'react-icons/fa';
import iconharga from './assets/harga.svg'
import iconlokasi from './assets/lokasi.svg'
import iconsesi from './assets/sesi.svg'
import iconbasic from './assets/basic.svg'
import iconlike from './assets/like.svg'
import iconpengalaman from './assets/pengalaman.svg'

const PesanOffline = () => {
  const ListTerapis = [
    {
      name: 'Gracia Stephanie, S.Psi, M.Psi',
      price: 'Rp. 100.000',
      location: 'Komplek Cindirela, Medan Amplas',
      mode: 'Online/Offline',
      like: '70 Orang menyukai',
      experience: '6 Tahun pengalaman',
      expertise: ['Anxiety', 'Bipolar', 'Depresi', 'Hubungan dan keluarga'],
      description: 'Seorang psikolog berpengalaman dengan 6 tahun dedikasi dalam membantu individu dan keluarga mengatasi berbagai permasalahan psikologis, seperti kecemasan, bipolar, hubung...',
    },
  ];

  const [showOptions, setShowOptions] = useState(false); // State untuk mengontrol visibilitas pilihan
  const [selectedOption, setSelectedOption] = useState(null); // State untuk menyimpan pilihan radio
  const navigate = useNavigate();

  const toggleOptions = () => {
    setShowOptions(!showOptions); // Fungsi untuk mengubah state showOptions
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value); // Fungsi untuk mengubah state selectedOption
  };

  const handlePaymentSuccess = () => {
    alert('Pembayaran berhasil!');
    navigate('/');
  };

  const handleMetodePembayaranClick = () => {
    navigate('/MetodePembayaran'); // Navigasi ke halaman baru untuk menampilkan detail metode pembayaran
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div>
        {/* <h1 className='font-bold mt-24 text-center pt-6'>Buat Janji</h1> */}
        <div className="bg-gray-100 mt-16 min-h-screen rounded-lg p-4 md:p-8">
          <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <h1 className='font-bold mt-5 text-center text-3xl pt-5'>Pembayaran</h1>
            <div className="p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Kolom 1 */}
                <div className="p-4 border border-gray-200 rounded-lg">
                  <img src={gracia} alt="Sertifikat 1" className="w-full h-auto rounded-lg" />
                  <h2 className="text-xl mt-4">Gracia Stephanie  S.Psi,. M.Psi</h2>
                  <div className="flex items-center mt-2">
                    <img src={iconharga} className='w-5 h-5 mr-2'></img>
                    <p>Rp. 100.000</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <img src={iconlokasi} className='w-5 h-5 mr-2'></img>
                    <p>Komplek Cindelaras, Medan Amplas</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <img src={iconbasic} className='w-5 h-5 mr-2'></img>
                    <p>Basic</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <img src={iconsesi} className='w-5 h-5 mr-2'></img>
                    <p>Online</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <img src={iconlike} className='w-5 h-5 mr-2'></img>
                    <p>98%</p>
                    <img src={iconpengalaman} className='w-5 h-5 ml-4 mr-2'></img>
                    <p className="ml-1">6 Tahun Pengalaman</p>
                  </div>
                    {ListTerapis.map((terapis, index) => (
                      <div className="mt-2 space-y-1">
                        {terapis.expertise.map((skill, i) => (
                          <span key={i} className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2">
                          {skill}
                          </span>
                        ))}
                      </div>
                      ))}
                    <p className="text-gray-600 mt-2">
                      Seorang psikolog berpengalaman dengan 6 tahun dedikasi dalam membantu individu dan keluarga mengatasi berbagai permasalahan psikologis, seperti kecemasan, bipolar, hubungan dan keluarga.
                      Pendekatan berpusat pada individu dan keluarga. Memiliki pengalaman dalam terapi anak dan remaja, trauma, depresi, gangguan makan, penyalahgunaan zat, dan lain-lain.</p>
                </div>
                {/* Kolom 3 */}
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h2 className="text-xl mb-4">Ringkasan Pesanan</h2>
                  <div className="flex flex-col space-y-4">
                <h2>Metode Pembayaran</h2>
                    <button
                    onClick={handleMetodePembayaranClick} 
                    className="mt-4 w-full bg-[#1572A1] text-white py-2 px-4 rounded hover:bg-blue-500"
                    >
                      Tambah Metode Pembayaran
                    </button>
                  </div>
                  <div className="mt-4">
                    <p>Biaya Konsultasi : Rp 100.000</p>
                    <p>Biaya Layanan    : Rp 4.000</p>
                    <p>Pajak            : Rp 1.000</p>
                    <p>Pembayaranmu     : Rp 105.000</p>
                  </div>
                  <button 
                    onClick={handlePaymentSuccess} 
                    className="mt-4 w-full bg-[#1572A1] text-white py-2 px-4 rounded hover:bg-blue-500"
                  >
                    Bayar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PesanOffline;
