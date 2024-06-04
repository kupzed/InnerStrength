import React, { useState } from 'react'
import logodash from "../shared/assetsdashboard/logodash.png";
import { Link } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constans';
// import { linkClasses } from '@mui/material';

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-[#1572A1] hover:no-underline active:bg-[#1572A1] rounded-md text-base'

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='bg-[#e5e7eb] w-60 p-3 flex flex-col'>
        {/* Logo */}
        <div className='flex justify-between items-center gap-2 pt-4 px-2 pb-6'>
        <img src={logodash} alt='' className="w-48 h-10" />    
        </div>
        <div className='flex-1 py-4 flex flex-col gap-0.5 '>
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item} />
            ))}
            <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          Pasien
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link to='PasienOnline'>
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Pasien Online
            </a>
            </Link>
            <Link to='PasienOffline'>
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Pasien Offline
            </a>
            </Link>
          </div>
        </div>
      )}
    </div>
        </div>
        </div>
    )
}

function SidebarLink({ item }) {
    
    return (
        <Link to={item.path} className={linkClass}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}

