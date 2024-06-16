import React, { useState } from 'react';

const Filter1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleFilter = (option) => {
    console.log("Selected option:", option);
    // Lakukan aksi yang diperlukan sesuai dengan opsi yang dipilih
    setIsOpen(false);
  };

  return (
    // Urutkan Berdasarkan
    <div className="relative inline-block px-8 mt-8 text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#1572A1] text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleMenu}
        >
          Urutkan Berdasarkan
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => handleFilter('Harga Tertinggi')}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-center"
              role="menuitem"
            >
              Harga Tertinggi
            </button>
            <button
              onClick={() => handleFilter('Harga Terendah')}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-center"
              role="menuitem"
            >
              Harga Terendah
            </button>
            <button
              onClick={() => handleFilter('Rekomendasi')}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-center"
              role="menuitem"
            >
              Rekomendasi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter1;
