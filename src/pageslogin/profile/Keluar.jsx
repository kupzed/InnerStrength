import React from 'react';
import pplogout from './assets/logout.png'
import { Link } from "react-router-dom";

const Keluar = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Apakah anda yakin ingin keluar dari akun anda?</h2>
        <div className='flex justify-center items-center my-4'>
        <img src={pplogout}></img>
        </div>
        <div className="flex justify-center space-x-4">
          <Link to="/"
            className="px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={onConfirm}
          >
            Keluar
          </Link>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
            onClick={onClose}
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Keluar;
