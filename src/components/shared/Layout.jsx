import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Headerdash from './Headerdash'

function Layout() {
    return (
        <div className='bg-neutral-100 h-screen w-screen flex flex-row'>
            <Sidebar />
            <div className='p-4 flex flex-col flex-1'>
            <Headerdash />
            <div className='pb-8'>{<Outlet />}</div>
            </div>
        </div>
    )
}

export default Layout