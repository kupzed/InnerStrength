import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Navbar from '../../components/HeaderLogin';
import Footer from '../../components/Footer';
import ppdokter from './assets/gracia.jpg'

const DetailKonsultasi = () => {
  return (
    <div className="overflow-hidden">
    <Navbar />
    <div className="bg-gray-100 mt-16 min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <div className="p-4 md:p-8 flex flex-col items-center">
          <img
            src={ppdokter}
            alt="Gracia Stephanie"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h1 className="text-2xl font-bold">Gracia Stephanie S.Psi., M.Psi</h1>
          <div className="text-gray-600 flex items-center space-x-2">
            <span>•</span>
            <span>Online</span>
            <span>•</span>
            <span>Pesan</span>
          </div>
          <div className="text-gray-600 mt-2 text-center">
            RSIA Mitra Medika Premiere Kapas, Simpang Kapas, Medan Tembung
          </div>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md">Pesan sekarang</button>
        </div>
        <div className="px-4 md:px-8 py-4 border-t">
          <ul className="flex space-x-4 border-b pb-2">
            <li className="border-b-2 border-blue-500 pb-2">Tentang saya</li>
            <li className="cursor-pointer hover:border-b-2 hover:border-blue-500 pb-2">Pengalaman Profesional</li>
            <li className="cursor-pointer hover:border-b-2 hover:border-blue-500 pb-2">Sertifikat</li>
            <li className="cursor-pointer hover:border-b-2 hover:border-blue-500 pb-2">Ulasan</li>
          </ul>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Tentang saya</h2>
            <p className="text-gray-700">
              Gracia Stephanie, S.Psi., M.Psi adalah seorang psikolog berpengalaman dengan lebih dari sepuluh tahun melayani pasien di berbagai setting klinis dan non-klinis. 
              Mengkhususkan diri dalam terapi kognitif-behavioral, ia membantu klien mengatasi berbagai tantangan mental dan emosional, termasuk depresi, kecemasan, dan stres.
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-700">
              <li>Pengalaman bertahun-tahun dalam bidang psikologi klinis</li>
              <li>Spesialis dalam terapi kognitif-behavioral (CBT)</li>
              <li>Terapi untuk anak-anak, remaja, dan dewasa</li>
              <li>Konsultasi pernikahan dan keluarga</li>
              <li>Pelatihan manajemen stres dan pengembangan diri</li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-700">Untuk konsultasi lebih lanjut, Anda dapat menghubungi saya melalui:</p>
              <p className="text-gray-700">Email: gracia.stephanie@example.com</p>
              <p className="text-gray-700">Telepon: +62 123 4567 890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default DetailKonsultasi;
