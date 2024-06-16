import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../components/HeaderLogin';
import Footer from '../components/Footer';
import RekomendasiTeratas from '../pageslogin/konsultasi/RecommendationLogin';
import ListTerapis from '../pageslogin/konsultasi/ListTerapisLogin';
import Filter1 from '../pageslogin/konsultasi/Filter1Login';
import Filter2 from '../pageslogin/konsultasi/Filter2Login';
import Filter3 from '../pageslogin/konsultasi/Filter3Login';
import Filter4 from '../pageslogin/konsultasi/Filter4Login';

const KonsultasiLogin = () => {
    return (
    <div className="overflow-hidden">
    <Navbar />
    <header className="bg-[#F3F3F3] mt-16 text-center py-12">
        <h1 className="text-2xl font-semibold">
            Bantu Kami mencocokan anda dengan <span className="text-[#1572A1]">terapis yang tepat</span>
        </h1>
        <p className="mt-2 text-gray-600">
            Penting untuk memilih terapis yang dapat menjalin hubungan pribadi dengan Anda.
        </p>
        <div className="mt-4">
        <label className="inline-flex items-center">
        {/* <input type="checkbox" className="form-checkbox text-blue-500" /> */}
        <span className="bg-white ml-2 text-gray-600 mx-2">* Sebagian besar klien cocok di dalamnya 24J</span>
        </label>
        </div>
    </header>
    <RekomendasiTeratas />
    <div className='bg-white mx-32 my-4'>
        <div className="App bg-[#F3F3F3] mx-auto px-10 py-4">
            <div className='flex flex-wrap justify-center content-center'>
            <Filter1 />
            <Filter2 />
            <Filter3 />
            <Filter4 />
            </div>
            <ListTerapis />
        </div>
    </div>
    <Footer />
    </div>
    )
}

export default KonsultasiLogin
