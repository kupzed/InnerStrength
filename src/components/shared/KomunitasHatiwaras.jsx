import React, { useState } from 'react'
import hatiwaras from '../../../src/assets/hatiwaras.png';
import { Link } from 'react-router-dom';

const KomunitasHatiwaras = () =>{

return<div className='justify-center py-10'>
<img src={hatiwaras} alt='' className=''/>
<p className='text-gray-300'>+100 Anggota</p>
<br></br>
<h1 className='font-bold text-black'>Hati Waras</h1>
<br></br>
<p className='pb-8 w-1/2'>"Hati Satu, Kesehatan Menjalin Solidaritas"</p>
<div className="">
    <Link to="/HatiWaras" className="px-22 lg:px-24 py-2 bg-[#1572A1] hover:bg-blue-500 text-white outline-none rounded">Lihat Detail</Link>
</div>
</div>

}
export default KomunitasHatiwaras