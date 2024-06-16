import React, { useState } from 'react'
import bugarmental from '../../../src/assets/bugarmental.png';
import { Link } from 'react-router-dom';

const KomunitasBugarmental = () =>{

return<div className='justify-center py-10 '>
<img src={bugarmental} alt='' />
<p className='text-gray-300 '>+100 Anggota</p>
<br></br>
<h1 className='font-bold text-black'>Bugar Mental</h1>
<br></br>
<p className='pb-8 w-3/4'>"Bersama Berlari, Bersama Berkarya, Bugar Mental, Jiwa Kuat".</p>
<div className="">
    <Link to="/BugarMental" className="px-22 lg:px-24 py-2 bg-[#1572A1] hover:bg-blue-500 text-white outline-none rounded">Lihat Detail</Link>
</div>
</div>

}
export default KomunitasBugarmental