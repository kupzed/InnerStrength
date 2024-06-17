import React, { useState } from 'react'
import { Link } from "react-router-dom";
import lt1 from './assets/gracia.jpg'
import lt2 from './assets/gerald.png'
import lt3 from './assets/vinna.png'
import iconharga from './assets/harga.svg'
import iconlokasi from './assets/lokasi.svg'
import iconsesi from './assets/sesi.svg'
import iconlike from './assets/like.svg'
import iconpengalaman from './assets/pengalaman.svg'

const ListTerapis = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const options = ["Opsi 1", "Opsi 2"];
{/* List Terapis */}
  const ListTerapis = [
    {
      name: 'Gracia Stephanie, S.Psi, M.Psi',
      price: 'Rp. 100.000',
      location: 'Komplek Cindirela, Medan Amplas',
      mode: 'Online/Offline',
      like: '70',
      experience: '6',
      expertise: ['Anxiety', 'Bipolar', 'Depresi', 'Hubungan dan keluarga'],
      image: lt1,
      description: 'Seorang psikolog berpengalaman dengan 6 tahun dedikasi dalam membantu individu dan keluarga mengatasi berbagai permasalahan psikologis, seperti kecemasan, bipolar, hubung...',
    },
    {
      name: 'Gerald Andreas, S.Psi, M.Psi',
      price: 'Rp. 90.000',
      location: 'Ruko Gardenia, Medan Patisah',
      mode: 'Online/Offline',
      like: '64',
      experience: '5',
      expertise: ['Depresi', 'Gangguan Kecemasan', 'Identitas Seksual', 'Gangguan Mood'],
      image: lt2,
      description: 'Seorang psikolog berpengalaman dengan 5 tahun dedikasi dalam membantu individu mengatasi berbagai permasalahan psikologis, seperti depresi, gangguan kecemasan, dan identitas seksual...',
    },
    {
      name: 'Vinna Caturanna, S.Psi, M.Psi',
      price: 'Rp. 100.000',
      location: 'Simpang Kuda, Medan Tembung',
      mode: 'Online/Offline',
      like: '48',
      experience: '5',
      expertise: ['Bipolar', 'Trauma', 'Anxiety', 'Hubungan dan keluarga'],
      image: lt3,
      description: 'Seorang psikolog berpengalaman dengan 5 tahun dedikasi dalam membantu individu dan keluarga mengatasi berbagai permasalahan psikologis, seperti Bipolar, Trauma, Anxiety, Kelu...',
    },
  ];

  return (
    <div>
      {/* Filter */}
      {/* <section className="container mx-auto py-8">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-wrap justify-between items-center space-x-4 relative">
          {["Urutkan Berdasarkan", "Filter", "Rentang Harga", "Jenis", "Terapis"].map((buttonText, index) => (
            <div key={index} className="relative">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => toggleDropdown(buttonText)}
              >
                {buttonText}
              </button>
              {activeDropdown === buttonText && (
                <div className="absolute top-full mt-2 bg-white border rounded shadow-lg w-40 z-10">
                  {options.map((option, i) => (
                    <button
                      key={i}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => alert(`${buttonText} - ${option}`)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section> */}

      {/* Terapiss List */}
      <section className="container mx-auto px-8 py-8">
        {ListTerapis.map((terapis, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex flex-col md:flex-row">
              <img src={terapis.image} alt={terapis.name} className="w-full md:w-48 h-48 mt-8 object-cover rounded-md" />
              <div className="mt-4 md:mt-0 md:ml-4">
                <h3 className="text-lg font-semibold">{terapis.name}</h3>
                <div className='inline-flex justify-normal items-center'>
                  <img src={iconharga} className='w-5 h-5 mr-2'></img>
                  <p className="text-gray-600">{terapis.price}</p>
                </div> <br />
                <div className='inline-flex justify-normal items-center'>
                  <img src={iconlokasi} className='w-5 h-5 mr-2'></img>
                  <p className="text-gray-600">{terapis.location}</p>
                </div> <br />
                <div className='inline-flex justify-normal items-center'>
                  <img src={iconsesi} className='w-5 h-5 mr-2'></img>
                  <p className="text-gray-600">{terapis.mode}</p>
                </div> <br />
                <div className='inline-flex justify-normal items-center'>
                  <img src={iconlike} className='w-5 h-5 mr-2'></img>
                  <p className="text-gray-600">{terapis.like} Orang menyukai</p>
                </div> <br />
                <div className='inline-flex justify-normal items-center'>
                  <img src={iconpengalaman} className='w-5 h-5 mr-2'></img>
                  <p className="text-gray-600">{terapis.experience} Tahun pengalaman</p>
                </div> <br />
                <div className="mt-2 space-y-1">
                  {terapis.expertise.map((skill, i) => (
                    <span key={i} className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2">
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-gray-600">{terapis.description}</p>
                <Link to="/DetailKonsultasi"><button className="w-full mt-4 bg-[#1572A1] text-white px-4 py-2 rounded hover:bg-blue-500">
                  Konsultasi
                </button></Link>
              </div>
            </div>
          </div>
        ))}
      </section>
      
    </div>
  )
}

export default ListTerapis
