import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Headerdash from './Headerdash'

function JanjiTemu() {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <Sidebar />
      <div className='p-4 flex flex-col flex-1'>
            <Headerdash />
      <div className='pt-4 px-4 pb-4 text-xl'>
        <div>
            <h2>Lihat Janji Temu Anda</h2>
        </div>
      </div>
    </div>
    </div>
    )
}

export default JanjiTemu