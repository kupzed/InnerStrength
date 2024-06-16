import React from 'react';

const Sidebar = ({ activeItem, setActiveItem, onLogout }) => {
  return (
    <div className="w-full md:w-1/4 bg-white p-4">
      <ul className="space-y-4">
        <li 
          className={`flex items-center space-x-2 cursor-pointer ${activeItem === 'Profil' ? 'font-bold text-blue-500' : ''}`}
          onClick={() => setActiveItem('Profil')}
        >
          <span>Profil</span>
        </li>
        <li 
          className={`flex items-center space-x-2 cursor-pointer ${activeItem === 'Riwayat Pemeriksaan' ? 'font-bold text-blue-500' : ''}`}
          onClick={() => setActiveItem('Riwayat Pemeriksaan')}
        >
          <span>Riwayat Pemeriksaan</span>
        </li>
        <li 
          className={`flex items-center space-x-2 cursor-pointer ${activeItem === 'Pembayaran' ? 'font-bold text-blue-500' : ''}`}
          onClick={() => setActiveItem('Pembayaran')}
        >
          <span>Pembayaran</span>
        </li>
        <li 
          className="flex items-center space-x-2 cursor-pointer text-red-500"
          onClick={onLogout}
        >
          <span>Keluar</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
