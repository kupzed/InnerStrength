import React, { useState } from 'react'
import salingjaga from '../../../src/assets/salingjaga.png';
import { Link } from 'react-router-dom';

const KomunitasSalingjaga = () =>{

return<div className='justify-center py-10'>
            <img src={salingjaga} alt='' />
            <p className='text-gray-300'>+100 Anggota</p>
            <br></br>
            <h1 className='font-bold text-black'>Saling Jaga</h1>
            <br></br>
            <p className='pb-8 w-1/2'>"Saling Mendukung, Saling Merawat, Saling Jaga".</p>
            <div className="">
                <Link to="/SalingJaga" className="px-22 lg:px-24 py-2 bg-[#1572A1] hover:bg-blue-500 text-white outline-none rounded">Lihat Detail</Link>
            </div>
        </div>

}
export default KomunitasSalingjaga