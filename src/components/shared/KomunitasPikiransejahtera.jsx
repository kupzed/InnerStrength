import React from 'react';
import pikiransejahtera from '../../../src/assets/pikiransejahtera.png';
import { Link } from 'react-router-dom';

const Komunitaspikiransejahtera = () => {
  return (
    <div className='flex flex-col items-center justify-center py-10 border-gray-200 rounded shadow-md'>
      <img src={pikiransejahtera} alt='pikiransejahtera' className='w-48 md:w-64 lg:w-80' />
      <p className='text-gray-300 mt-2'>+100 Anggota</p>
      <h1 className='font-bold text-black mt-4 text-start'>Pikiran Sejahtera</h1>
      <p className='text-center w-6/12 mt-2'>"Pikiran Bersama, Sejahtera Bersama"</p>
      <div className='mt-4'>
        <Link to='/PikiranSejahtera' className='px-4 lg:px-24 py-2 bg-[#1572A1] hover:bg-blue-500 text-white rounded-md'>
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default Komunitaspikiransejahtera;
