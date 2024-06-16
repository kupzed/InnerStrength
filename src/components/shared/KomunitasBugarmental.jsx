import React from 'react';
import bugarmental from '../../../src/assets/bugarmental.png';
import { Link } from 'react-router-dom';

const Komunitasbugarmental = () => {
  return (
    <div className='flex flex-col items-center justify-center py-10 border-gray-200 rounded shadow-md'>
      <img src={bugarmental} alt='bugarmental' className='w-48 md:w-64 lg:w-80' />
      <p className='text-gray-300 mt-2'>+100 Anggota</p>
      <h1 className='font-bold text-black mt-4 text-start'>Bugar Mental</h1>
      <p className='text-center w-8/12 max-w-md mt-2'>" Bersama Berkarya, Bugar Mental, Jiwa Kuat".</p>
      <div className='mt-4'>
        <Link to='/BugarMental' className='px-4 lg:px-24 py-2 bg-[#1572A1] hover:bg-blue-500 text-white rounded-md'>
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default Komunitasbugarmental;
