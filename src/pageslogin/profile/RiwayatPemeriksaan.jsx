import React from 'react';
import gracia from '../konsultasi/assets/gracia.jpg'
import john from '../konsultasi/assets/john.png'
import gladies from '../konsultasi/assets/gladies.png'

const RiwayatPemeriksaan = () => {
  const riwayat = [
    {
      id: 1,
      nama: 'Gracia Stephanie S.Psi., M.Psi',
      tanggal: '10 April 2024',
      paket: 'Basic',
      status: 'Berlangsung',
      image: gracia, // Ganti dengan path gambar yang sesuai
    },
    {
      id: 2,
      nama: 'John Alexander, S.Psi., M.Psi',
      tanggal: '10 April 2024',
      paket: 'Basic',
      status: 'Selesai',
      image: john, // Ganti dengan path gambar yang sesuai
    },
    {
      id: 3,
      nama: 'Gladies Anastasya, S.Psi., M.Psi',
      tanggal: '10 April 2024',
      paket: 'Basic',
      status: 'Selesai',
      image: gladies, // Ganti dengan path gambar yang sesuai
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
              <h3 className="font-bold my-3">{item.nama}</h3>
              <p className="text-gray-600 my-3">{item.tanggal}</p>
              <p className="text-gray-600 my-3">{item.paket}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className={`px-2 py-1 rounded-full text-white ${item.status === 'Berlangsung' ? 'bg-green-500' : 'bg-gray-500'}`}>
              {item.status}
            </span>
            {item.status === 'Berlangsung' ? (
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Konsultasi</button>
            ) : (
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Pesan Kembali</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RiwayatPemeriksaan;
