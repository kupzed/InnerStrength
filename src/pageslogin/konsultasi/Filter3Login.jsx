// Rentang Harga
import React, { useState } from 'react';

const Filter3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mx-1 py-8 inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-52 h-12 rounded-md px-4 py-2 bg-[#1572A1] text-white text-sm font-medium hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        Rentang Harga
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
          className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-[#1572A1] ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 h-12 text-sm text-white hover:bg-blue-500"
            >
              {'<'} 50.000
            </a>
            <a
              href="#"
              className="block px-4 py-2 h-12 text-sm text-white hover:bg-blue-500"
            >
              50.000 - 100.000
            </a>
            <a
              href="#"
              className="block px-4 py-2 h-12 text-sm text-white hover:bg-blue-500"
            >
              {'<'} 100.000
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter3;



// import React, { useState } from 'react';

// const Filter3 = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleFilter = (option) => {
//     console.log("Selected option:", option);
//     // Lakukan aksi yang diperlukan sesuai dengan opsi yang dipilih
//     setIsOpen(false);
//   };

//   return (
//     // Urutkan Berdasarkan
//     <div className="relative inline-block px-8 py-8 text-left">
//       <div>
//         <button
//           type="button"
//           className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#1572A1] text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           onClick={toggleMenu}
//         >
//           Rentang Harga
//         </button>
//       </div>

//       {isOpen && (
//         <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//           <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//             <button
//               onClick={() => handleFilter('Harga Tertinggi')}
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-center"
//               role="menuitem"
//             >
//               `{'<'}`50.000
//             </button>
//             <button
//               onClick={() => handleFilter('Harga Terendah')}
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-center"
//               role="menuitem"
//             >
//               50.000 - 100.000
//             </button>
//             <button
//               onClick={() => handleFilter('Rekomendasi')}
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-center"
//               role="menuitem"
//             >
//               `{'>'}`100.000
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Filter3;
