import React, { useState } from 'react';
import Navbar from '../components/HeaderLogin';
import Footer from '../components/Footer';
import Sidebar from './profile/SidebarUser';
import Profile from './profile/Profile';
import RiwayatPemeriksaan from './profile/RiwayatPemeriksaan';
import Pembayaran from './profile/Pembayaran';
import Keluar from './profile/Keluar';

const MyProfile = () => {
    const [activeItem, setActiveItem] = useState('Profil');
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  
    const handleLogout = () => {
      // Logic untuk meng-handle logout
      console.log('Logged out');
      setIsLogoutModalOpen(false);
    };

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="flex flex-col mx-28 my-24 md:flex-row bg-gray-100 min-h-screen">
      <Sidebar 
          activeItem={activeItem} 
          setActiveItem={setActiveItem} 
          onLogout={() => setIsLogoutModalOpen(true)}
        />
        <div className="w-full">
          {activeItem === 'Profil' && <Profile />}
          {activeItem === 'Riwayat Pemeriksaan' && <RiwayatPemeriksaan />}
          {activeItem === 'Pembayaran' && <Pembayaran />}
          {/* You can add other components based on the activeItem value here */}
        </div>
      </div>
      <Footer />
      <Keluar 
        isOpen={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)} 
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default MyProfile;
