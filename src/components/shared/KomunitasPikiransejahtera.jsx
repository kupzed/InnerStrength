import React, { useState } from 'react'
import pikiransejahtera from '../../../src/assets/pikiransejahtera.png';
import { Link } from 'react-router-dom';

const KomunitasPikiransejahtera = () =>{

return<div className='justify-center py-10'>
<img src={pikiransejahtera} alt='' className=''/>
<p className='text-gray-300'>+100 Anggota</p>
<br></br>
<h1 className='font-bold text-black'>Pikiran Sejahtera</h1>
<br></br>
<p className='pb-8 w-1/2'>"Pikiran Bersama, Sejahtera Bersama"</p>
<div className="">
    <Link to="/PikiranSejahtera" className="px-22 lg:px-24 py-2 bg-[#1572A1] hover:bg-blue-500 text-white outline-none rounded">Lihat Detail</Link>
</div>
</div>

}
export default KomunitasPikiransejahtera