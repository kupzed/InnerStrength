import React from 'react'
import Header from '../../components/Header';
import HeaderLogin from "../../components/HeaderLogin"
import Footer from '../../components/Footer';


const Consultation = () => {

  {/* Recommendasi Teratas */}
  const RekomendasiTeratas = [
    {
      name: 'Gracia Stephanie, S.Psi, M.Psi',
      price: 'Rp. 100.000',
      location: 'Komplek Cindirela, Medan Amplas',
      mode: 'Online/Offline',
      like: '70',
      experience: '6 Tahun',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Vilma Cicauriza, S.Psi, M.Psi',
      price: 'Rp. 100.000',
      location: 'Ruko Gardenia, Medan Patisah',
      mode: 'Online/Offline',
      like: '64',
      experience: '5 Tahun',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Glades Anatasya, S.Psi, M.Psi',
      price: 'Rp. 100.000',
      location: 'Simpang Kuda, Medan Tembung',
      mode: 'Online/Offline',
      like: '48',
      experience: '6 Tahun',
      image: 'https://via.placeholder.com/150',
    },
  ];

  {/* List Terapis */}
  const ListTerapis = [
    {
      name: 'Gracia Stephanie, S.Psi, M.Psi',
      price: 'Rp. 100.000',
      location: 'Komplek Cindirela, Medan Amplas',
      mode: 'Online/Offline',
      experience: '6 tahun pengalaman',
      expertise: ['Anxiety', 'Bipolar', 'Depresi', 'Hubungan dan keluarga'],
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Geraldi Andreas, S.Psi, M.Psi',
      price: 'Rp. 90.000',
      location: 'Ruko Gardenia, Medan Patisah',
      mode: 'Online/Offline',
      experience: '5 tahun pengalaman',
      expertise: ['Depresi', 'Gangguan Kecemasan', 'Identitas Seksual', 'Gangguan Mood'],
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Vilma Cicauriza, S.Psi, M.Psi',
      price: 'Rp. 100.000',
      location: 'Simpang Kuda, Medan Tembung',
      mode: 'Online/Offline',
      experience: '5 tahun pengalaman',
      expertise: ['Bipolar', 'Trauma', 'Anxiety', 'Hubungan dan keluarga'],
      image: 'https://via.placeholder.com/150',
    },
  ];
  return (
    <div className="overflow-hidden">
      <Header />
    <header className="bg-[#F3F3F3] mt-16 text-center py-12">
      <h1 className="text-2xl font-semibold">
        Bantu Kami mencocokan anda dengan <span className="text-[#1572A1]">terapis yang tepat</span>
      </h1>
      <p className="mt-2 text-gray-600">
        Penting untuk memilih terapis yang dapat menjalin hubungan pribadi dengan Anda.
      </p>
      <div className="mt-4">
        <label className="inline-flex items-center">
          {/* <input type="checkbox" className="form-checkbox text-blue-500" /> */}
          <span className="bg-white ml-2 text-gray-600 mx-2">* Sebagian besar klien cocok di dalamnya 24J</span>
        </label>
      </div>
    </header>

    {/* Rekomendasi Teratas Start*/}
    <section className="container mx-auto px-32 py-8">
        <h2 className="text-xl font-semibold mb-4">Rekomendasi teratas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {RekomendasiTeratas.map((rec, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={rec.image} alt={rec.name} className="w-full h-48 object-cover rounded-md" />
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{rec.name}</h3>
                <p className="text-blue-500">{rec.price}</p>
                <p className="text-gray-600">{rec.location}</p>
                <p className="text-gray-600">{rec.mode}</p>
                <p className="text-gray-600">Jumlah Disukai: {rec.like}</p>
                <p className="text-gray-600">Pengalaman: {rec.experience}</p>
                <button className="item-center mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Konsultasi
                </button>
              </div>
            </div>
          ))}
        </div>
    </section>
    {/* Rekomendasi Teratas End */}

    {/* List Terapis Start */}
    <div className='bg-white mx-32 my-8'>
      <div className="App bg-[#F3F3F3] mx-auto px-10 py-10">
      {/* Filter */}
      <section className="container mx-auto px-8 py-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-wrap justify-between items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Urutkan Berdasarkan
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Filter
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Rentang Harga
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Jenis
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Terapis
            </button>
          </div>
        </div>
      </section>

      {/* terapiss List */}
      <section className="container mx-auto px-8 py-8">
        {ListTerapis.map((terapis, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex flex-col md:flex-row">
              <img src={terapis.image} alt={terapis.name} className="w-full md:w-48 h-48 object-cover rounded-md" />
              <div className="mt-4 md:mt-0 md:ml-4">
                <h3 className="text-lg font-semibold">{terapis.name}</h3>
                <p className="text-blue-500">{terapis.price}</p>
                <p className="text-gray-600">{terapis.location}</p>
                <p className="text-gray-600">{terapis.mode}</p>
                <p className="text-gray-600">{terapis.experience}</p>
                <div className="mt-2 space-y-1">
                  {terapis.expertise.map((skill, i) => (
                    <span key={i} className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2">
                      {skill}
                    </span>
                  ))}
                </div>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Konsultasi
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
      </div>
    </div>
      {/* List Terapis End */}
      <Footer />
    </div>
  );
};

export default Consultation
