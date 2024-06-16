// DropdownUrutkan.jsx
import React, { useState } from 'react';

const DropdownUrutkan = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-48 h-12 rounded-md px-4 py-2 bg-[#1572A1] text-white text-sm font-medium hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        Terapi
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#1572A1] ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 h-12 text-sm text-white hover:bg-blue-800"
            >
              Kognitif CBT
            </a>
            <a
              href="#"
              className="block px-4 py-2 h-12 text-sm text-white hover:bg-blue-800"
            >
              Interpersonal
            </a>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownUrutkan;
