import React, { useState } from 'react'
import Mentarisehat from '../../../src/assets/mentalsehat.png';
import { Link } from 'react-router-dom';

const KomunitasMentarisehat = () =>{

return<div className='justify-center py-10'>
<img src={Mentarisehat} alt='' />
<p className='text-gray-300'>+100 Anggota</p>
<br></br>
<h1 className='font-bold text-black'>Mentari Sehat</h1>
<br></br>
<p className='pb-8 w-1/2'>"Cahaya Peduli, Menyinari Untuk Hati yang Sehat".</p>
<div className="">
    <Link to="/MentariSehat" className="px-22 lg:px-24 py-2 bg-[#1572A1] hover:bg-blue-500 text-white outline-none rounded">Lihat Detail</Link>
</div>
</div>

}
export default KomunitasMentarisehat