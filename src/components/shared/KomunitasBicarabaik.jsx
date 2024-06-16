import React, { useState } from 'react'
import bicarabaik from '../../../src/assets/bicarabaik.png';
import { Link } from 'react-router-dom';

const KomunitasBicarabaik = () =>{

return<div className='justify-center py-10'>
<img src={bicarabaik} alt='' className=''/>
<p className='text-gray-300'>+100 Anggota</p>
<br></br>
<h1 className='font-bold text-black'>Bicara Baik</h1>
<br></br>
<p className='pb-6 w-1/2'>"Bicara Baik, Hidup Baik, Jiwa Terang"</p>
<div className="">
<Link to="/BicaraBaik" className="px-22 lg:px-24 py-2 bg-[#1572A1] hover:bg-blue-500 text-white outline-none rounded">Lihat Detail</Link>
</div>
</div>

}
export default KomunitasBicarabaik