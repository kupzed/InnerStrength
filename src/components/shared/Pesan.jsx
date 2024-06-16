import React from 'react'
import Sidebar from './Sidebar'
import Headerdash from './Headerdash'
import IsiPesan from './IsiPesan'

function Pesan() {
    return (
        <div className='overflow-scroll'>
        <div className='flex flex-row bg-neutral-100 h-screen w-screen'>
        <Sidebar />
      <div className='p-4 flex flex-col flex-1'>
            <Headerdash />
      <div className='pt-4 px-4 pb-4 text-xl'>
          <h2>Pesan</h2>
      </div>
      <div className='flex flex-col flex-1'>
      <IsiPesan />
    </div>
    </div>
    </div>
    </div>
    )
}

export default Pesan