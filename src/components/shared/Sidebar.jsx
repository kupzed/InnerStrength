import React, { useState } from 'react';
import logodash from "../shared/assetsdashboard/logodash.png";
import { Link } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constans';

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-[#1572A1] hover:no-underline active:bg-[#1572A1] rounded-md text-base';
const subLinkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-[#1572A1] hover:no-underline active:bg-[#1e90ff] rounded-md text-base ml-6';

export default function Sidebar() {
    return (
        <div className='bg-[#e5e7eb] w-60 p-3 flex flex-col'>
            {/* Logo */}
            <div className='flex justify-between items-center gap-2 pt-4 px-2 pb-6'>
                <img src={logodash} alt='' className="w-48 h-10" />
            </div>
            <div className='flex-1 py-4 flex flex-col gap-0.5'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
                <div className="relative inline-block text-left">
                </div>
            </div>
        </div>
    )
}

function SidebarLink({ item }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <Link to={item.path} className={linkClass}>
                    <span className='text-xl'>{item.icon}</span>
                    {item.label}
                </Link>
                {item.subLinks && (
                    <button onClick={toggleSubMenu} className="text-xl px-2">
                        {isOpen ? '-' : '+'}
                    </button>
                )}
            </div>
            {isOpen && item.subLinks && (
                <div className="ml-4">
                    {item.subLinks.map((subItem) => (
                        <Link key={subItem.key} to={subItem.path} className={subLinkClass}>
                            {subItem.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
