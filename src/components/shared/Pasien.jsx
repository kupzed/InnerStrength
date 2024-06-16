import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Headerdash from './Headerdash'
import PasienOnline from './PasienOnline'

function Pasien() {
    return (
      <div className='overflow-scroll'>
        <div className='flex flex-row bg-neutral-100 h-screen w-screen'>
        <Sidebar />
      <div className='p-4 flex flex-col flex-1'>
            <Headerdash />
      <div className='pt-4 px-4 pb-4 text-xl'></div>
      <h2>Temukan Pasien Anda</h2>
    </div>
    </div>
    </div>
    )
}

export default Pasien