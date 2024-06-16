import React from 'react';
import iconlogin from "../assets/iconlogin.png";
import { Link } from "react-router-dom";

const Daftar = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image */}
      <div className="hidden md:block w-1/2 bg-cover bg-center my-auto">
        {/* Optional content over the image */}
        <img src={iconlogin} alt='' className="object-center mx-auto"/>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-14 bg-[#1572A1]">
        <div className="max-w-xl w-full space-y-5 border-2 p-10 rounded-lg bg-white">
          <div>
            <h2 className="mt-4 text-center text-3xl font-extrabold text-[#008DDA]">
              Buat Akun
            </h2>
          </div>
          <form className="mt-6 gap-y-6">
            <div className="rounded-md shadow-sm gap-y-6">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Nama Lengkap
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="fullName" 
              name="fullName" 
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Jenis Kelamin
            </label>
            <select 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="gender" 
              name="gender"
            >
              <option value="" disabled>Pilih Jenis Kelamin</option>
              <option value="male">Laki-laki</option>
              <option value="female">Perempuan</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthPlaceDate">
              Tempat Tanggal Lahir
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="birthPlaceDate" 
              name="birthPlaceDate" 
              type="text" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              name="email" 
              type="email" 
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Nomor Telepon
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="phone" 
              name="phone" 
              type="tel" 
              placeholder="Nomor Telepon" 
            />
          </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                id="password" 
                type="password" 
                placeholder="Password" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Konfirmasi Password
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                id="confirmpassword" 
                type="confirmpassword" 
                placeholder="Konfirmasi Password" 
              />
            </div>
            </div>

            <div>
              <Link to="/Login"
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1572A1] hover:bg-[#008DDA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008DDA]"
              >
                Daftar
              </Link>
            </div>


          </form>
        </div>
      </div>
    </div>
  )
}

export default Daftar
