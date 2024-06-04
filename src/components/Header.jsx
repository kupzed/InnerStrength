import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-[#F3F3F3] fixed w-full z-10 ${isScrolled ? 'bg-[#F3F3F3] bg-opacity-70 backdrop-blur-lg shadow-lg' : 'bg-[#F3F3F3]'}`}>
      <div className="container mx-auto px-4 py-4 md:flex md:justify-between md:items-center">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <img src={logo} alt="" className="w-52 h-10" />
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Menu */}
        <div className="hidden md:flex space-x-8 items-center">
            <Link to="/">
            <a className="text-gray-700 hover:text-blue-500">Beranda</a>
            </Link>
            <Link to="/Pageone">
            <a className="text-gray-700 hover:text-blue-500">Tentang Kami</a>
            </Link>
            <Link to="/Konsultasi">
            <a className="text-gray-700 hover:text-blue-500">Konsultasi</a>
            </Link>
            <Link to="/Komunitas">
            <a className="text-gray-700 hover:text-blue-500">Komunitas</a>
            </Link>
            <Link to="/Login" className="bg-[#1572A1] text-white px-4 py-2 rounded hover:bg-blue-500">
            Sign Up
            </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500">Beranda</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500">Tentang Kami</a>
            <a href="#consultation" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500">Konsultasi</a>
            <a href="#community" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500">Komunitas</a>
            <Link to="/Login">
            <button className="w-full bg-[#1572A1] text-white px-4 py-2 rounded hover:bg-blue-500">
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      </Transition>
    </nav>
  );
}

export default Header;
