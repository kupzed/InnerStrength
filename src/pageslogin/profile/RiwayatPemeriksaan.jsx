import React from 'react';
import gracia from '../konsultasi/assets/gracia.jpg'
import john from '../konsultasi/assets/john.png'
import gladies from '../konsultasi/assets/gladies.png'
import icondate from './assets/date.svg'
import iconpackage from './assets/package.svg'
import iconlike from './assets/likeblack.svg'

const RiwayatPemeriksaan = () => {
  const riwayat = [
    {
      name: 'Gracia Stephanie S.Psi., M.Psi',
      date: '10 April 2024',
      package: 'Basic',
      status: 'Berlangsung',
      price: 'Rp. 100.000',
      location: 'Komplek Cindirela, Medan Amplas',
      mode: 'Online/Offline',
      like: '70',
      experience: '6',
      expertise: ['Anxiety', 'Bipolar', 'Depresi', 'Hubungan dan keluarga'],
      image: gracia,
      description: 'Seorang psikolog berpengalaman dengan 6 tahun dedikasi dalam membantu individu dan keluarga mengatasi berbagai permasalahan psikologis, seperti kecemasan, bipolar, hubung...',
    },
    {
      name: 'John Alexander, S.Psi., M.Psi',
      date: '10 April 2024',
      package: 'Basic',
      status: 'Selesai',
      price: 'Rp. 90.000',
      location: 'Ruko Gardenia, Medan Patisah',
      mode: 'Online/Offline',
      like: '64',
      experience: '5',
      expertise: ['Depresi', 'Gangguan Kecemasan', 'Identitas Seksual', 'Gangguan Mood'],
      image: john,
      description: 'Seorang psikolog berpengalaman dengan 5 tahun dedikasi dalam membantu individu mengatasi berbagai permasalahan psikologis, seperti depresi, gangguan kecemasan, dan identitas seksual...',
    },
    {
      name: 'Gladies Anastasya, S.Psi., M.Psi',
      date: '10 April 2024',
      package: 'Basic',
      status: 'Selesai',
      price: 'Rp. 100.000',
      location: 'Simpang Kuda, Medan Tembung',
      mode: 'Online/Offline',
      like: '48',
      experience: '5',
      expertise: ['Bipolar', 'Trauma', 'Anxiety', 'Hubungan dan keluarga'],
      image: gladies,
      description: 'Seorang psikolog berpengalaman dengan 5 tahun dedikasi dalam membantu individu dan keluarga mengatasi berbagai permasalahan psikologis, seperti Bipolar, Trauma, Anxiety, Kelu...',
    },
  ];

  return (
    <div className="p-8 w-full">
      <h2 className="text-2xl font-bold mb-4">Riwayat Pemeriksaan</h2>
      {riwayat.map((item) => (
        <div key={item.id} className="bg-white w-auto h-40 p-4 mb-4 rounded-lg shadow-md flex items-center justify-between">
          <div className="flex items-center">
            <img src={item.image} alt={item.nama} className="w-32 h-32 rounded mr-4" />
            <div className='text-lg'>
              <h3 className="font-bold my-3">{item.name}</h3>
              <div className='inline-flex justify-normal items-center'>
                  <img src={icondate} className='w-5 h-5 mr-2'></img>
                  <p className="text-gray-600">{item.date}</p>
                </div> <br />
              <div className='inline-flex justify-normal items-center'>
                  <img src={iconpackage} className='w-5 h-5 mr-2'></img>
                  <p className="text-gray-600">{item.package}</p>
                </div> <br />
              <div className='inline-flex justify-normal items-center'>
                  <img src={iconlike} className='w-5 h-5 mr-2'></img>
                  <p className="text-gray-600">Suka</p>
                </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className={`px-2 py-1 rounded-full text-white ${item.status === 'Berlangsung' ? 'bg-[#1572A1]' : 'bg-green-500'}`}>
              {item.status}
            </span>
            {item.status === 'Berlangsung' ? (
              <button className="px-4 py-2 bg-neutral-400 text-white rounded-md">Konsultasi</button>
            ) : (
              <button className="px-4 py-2 bg-neutral-400 text-white rounded-md">Pesan Kembali</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RiwayatPemeriksaan;
