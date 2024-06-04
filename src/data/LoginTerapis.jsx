import React from 'react'
import iconlogin from "../assets/iconlogin.png";
import { Link } from "react-router-dom";
import svg_facebook from "../assets/svg_facebook.svg";

const LoginTerapis = () => {
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
              Login sebagai Terapis
            </h2>
            <h4 className="mt-4 text-center text-1xl font-light text-[#696A6F]">
              Hi! Welcome Back!
            </h4>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="username" 
                type="text" 
                placeholder="Email or Username" 
              />
            </div>
            <div className="mb-6">
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
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-[#008DDA] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-[#008DDA]">
                  Simpan Login
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#008DDA] hover:text-[#1572A1]">
                  Lupa Password?
                </a>
              </div>
            </div>

            <div>
              <Link to="/Layout"
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1572A1] hover:bg-[#008DDA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008DDA]"
              >
                Masuk
              </Link>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#008DDA]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white font-semibold text-gray-700">OR</span>
              </div>
            </div>
            
            <div>
              <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008DDA]"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <img className="h-5 w-5" src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" />
                </span>
                Sign in with Google
              </button>
            </div>
            <div>
              <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008DDA]"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <img src={svg_facebook} className="h-5 w-5" alt="Facebook" />
                </span>
                Sign in with Facebook
              </button>
            </div>

            <div className="text-center text-sm text-gray-600">
              Bergabung sebagai Terapis? <Link to="/DaftarTerapis" className="font-medium text-[#008DDA] hover:text-[#1572A1]">Daftar disini</Link>
            </div>


          </form>
        </div>
      </div>
    </div>
  )
}
export default LoginTerapis
