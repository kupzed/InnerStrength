import React, { useState } from 'react';
import Navbar from '../../components/HeaderLogin';
import Footer from '../../components/Footer';
import Group from './assets/Group.png';

const MetodePembayaranDetail = () => {
  const [metodePembayaran, setMetodePembayaran] = useState([
    { id: 1, nama: 'BCA' },
    { id: 2, nama: 'DANA' },
    { id: 3, nama: 'BNI' },
    { id: 4, nama: 'BRI' },
    { id: 5, nama: 'Mandiri' },
  ]);

  const [activeTab, setActiveTab] = useState(null); // State untuk menandai tab yang aktif
  const [showTambahForm, setShowTambahForm] = useState(false); // State untuk mengontrol visibilitas form tambah

  const toggleTambahForm = () => {
    setShowTambahForm(!showTambahForm); // Fungsi untuk toggle form tambah
  };

  const handleTambahMetode = (nama) => {
    // Fungsi untuk menambah metode pembayaran baru
    const newMetode = {
      id: Date.now(),
      nama: nama,
      deskripsi: '',
    };

    setMetodePembayaran([...metodePembayaran, newMetode]);
    setActiveTab(nama); // Set activeTab ke metode yang baru ditambahkan
    setShowTambahForm(false); // Sembunyikan form tambah setelah menambah metode
  };

  const handleHapusMetode = (id) => {
    // Fungsi untuk menghapus metode pembayaran berdasarkan ID
    const updatedMetode = metodePembayaran.filter((item) => item.id !== id);
    setMetodePembayaran(updatedMetode);
    setActiveTab(null); // Reset activeTab setelah menghapus metode
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="bg-gray-100 mt-16 min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
          <div className="p-4 md:p-8">
            <h1 className="text-xl font-bold p-4 border-b-2 border-gray-200">Pengaturan Pembayaran</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {/* Kolom 1: Daftar Metode Pembayaran */}
              <div>
                <p className="text-lg mb-2">Atur pembayaran anda untuk memudahkan memesan terapi di Innerstrength</p>
                {metodePembayaran.map((metode) => (
                  <div
                    key={metode.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer ${
                      activeTab === metode.nama ? 'bg-gray-200' : ''
                    }`}
                    onClick={() => setActiveTab(metode.nama)}
                  >
                    <h2 className="text-lg font-bold mb-2">{metode.nama}</h2>
                    {activeTab === metode.nama && (
                      <>
                        <p>{metode.deskripsi}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
              {/* Kolom 2: Form Tambah/Hapus Metode Pembayaran */}
              <div>
                {activeTab && (
                  <div className="border-2 border-gray-200 rounded-lg p-4">
                    <h2 className="text-lg font-bold mb-2">{activeTab}</h2>
                    <div className='text-xl font-bold text-center'>
                        <img src={Group} alt='' className='items-center'/>
                      <p>Belum Ada KArtu Tersimpan</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    <div className='text-xl text-center'>
                    <p>Tambah informasi kartu kredit/debit kamu untuk kemudahan pembayaran</p>
                    </div>
                    <div className="mt-4">
                      <button
                        onClick={toggleTambahForm}
                        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
                      >
                        Tambah Kartu {activeTab}
                      </button>
                    </div>
                    {showTambahForm && (
                      <div className="border-2 border-gray-200 rounded-lg p-4 mt-4">
                        <h2 className="text-lg font-bold mb-2">Nomor Kartu Kredit/Debit</h2>
                        <input
                          type="text"
                          className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2"
                          placeholder="Masukkan nomor kartu"
                        />
                        <h2 className="text-lg font-bold mb-2">Masa Berlaku</h2>
                        <input
                          type="text"
                          className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2"
                          placeholder="MM/YY"
                        />
                        <h2 className="text-lg font-bold mb-2">CVV</h2>
                        <input
                          type="text"
                          className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2"
                          placeholder="Masukkan CVV"
                        />
                        <div className="flex justify-between mt-2">
                          <button
                            onClick={toggleTambahForm}
                            className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
                          >
                            Simpan
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MetodePembayaranDetail;
