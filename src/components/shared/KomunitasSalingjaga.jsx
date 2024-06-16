import React from 'react';
import salingjaga from '../../../src/assets/salingjaga.png';
import { Link } from 'react-router-dom';

const Komunitassalingjaga = () => {
  return (
    <div className='flex flex-col items-center justify-center py-10 border-gray-200 rounded shadow-md'>
      <img src={salingjaga} alt='salingjaga' className='w-48 md:w-64 lg:w-80' />
      <p className='text-gray-300 mt-2'>+100 Anggota</p>
      <h1 className='font-bold text-black mt-4 text-start'>Saling Jaga</h1>
      <p className='text-center w-8/12 mt-2'>"Saling Mendukung, Saling Merawat, Saling Jaga"</p>
      <div className='mt-4'>
        <Link to='/SalingJaga' className='px-4 lg:px-24 py-2 bg-[#1572A1] hover:bg-blue-500 text-white rounded-md'>
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default Komunitassalingjaga;
