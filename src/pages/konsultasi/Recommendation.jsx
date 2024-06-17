import React from 'react'
import { Link } from "react-router-dom";
import rt1 from './assets/gracia.jpg'
import rt2 from './assets/vinna.png'
import rt3 from './assets/gladies.png'

const Recommendation = () => {
    {/* Recommendasi Teratas */}
  const RekomendasiTeratas = [
    {
      name: 'Gracia Stephanie, S.Psi, M.Psi',
      price: 'Rp. 100.000',
      location: 'Komplek Cindirela, Medan Amplas',
      mode: 'Online/Offline',
      like: '70',
      experience: '6',
      image: rt1,
    },
    {
      name: 'Vinna Caturanna, S.Psi, M.Psi',
      price: 'Rp. 100.000',
      location: 'Ruko Gardenia, Medan Patisah',
      mode: 'Online/Offline',
      like: '64',
      experience: '5',
      image: rt2,
    },
    {
      name: 'Gladies Anastasya, S.Psi, M.Psi',
      price: 'Rp. 100.000',
      location: 'Simpang Kuda, Medan Tembung',
      mode: 'Online/Offline',
      like: '48',
      experience: '6',
      image: rt3,
    },
  ];
  return (
    <div>
      {/* Rekomendasi Teratas Start*/}
    <section className="container mx-auto px-32 py-8">
        <h2 className="text-xl font-semibold mb-4">Rekomendasi teratas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {RekomendasiTeratas.map((rec, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={rec.image} alt={rec.name} className="w-full h-48 object-cover rounded-md" />
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{rec.name}</h3>
                <p className="text-[#1572A1]">{rec.price}</p>
                <p className="text-gray-600">{rec.location}</p>
                <p className="text-gray-600">{rec.mode}</p>
                <p className="text-gray-600">Jumlah Disukai: {rec.like} Orang menyukai </p>
                <p className="text-gray-600">Pengalaman: {rec.experience} Tahun Pengalaman</p>
                <button className="w-full item-center mt-4 bg-[#1572A1] text-white px-4 py-2 rounded hover:bg-blue-500">
                  Konsultasi
                </button>
              </div>
            </div>
          ))}
        </div>
    </section>
    {/* Rekomendasi Teratas End */}
    </div>
  )
}

export default Recommendation
