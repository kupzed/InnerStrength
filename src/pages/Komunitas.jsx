import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import komunitas1 from '../../src/assets/komunitas1.png';
import komunitas2 from '../../src/assets/komunitas2.png';
import salingjaga from '../../src/assets/salingjaga.png';
import bugarmental from '../../src/assets/bugarmental.png';
import mentalsehat from '../../src/assets/mentalsehat.png';
import pikiransejahtera from '../../src/assets/pikiransejahtera.png';
import hatiwaras from '../../src/assets/hatiwaras.png';
import bicarabaik from '../../src/assets/bicarabaik.png';
import { Link } from "react-router-dom";

const Komunitas = () => {
    return (
    <div>
    <Header />
        <h1 className='px-28 pt-28 font-bold text-2xl'>Temukan, Berdayakan, dan Berkembang Bersama 🌿🌟
        </h1>
        <h2 className='px-28'>Bergabunglah dengan Komunitas Pendukung Kesehatan Mental 🤝💬</h2>
        <div>
            <div></div>
            <div></div>
            <div className='flex justify-center pt-6 ps-18 gap-2'>
                <div className='flex-col items-center flex text-center gap-2 py-10'>
                  <img 
                  src={komunitas1} 
                  alt='' className='px-2 pt-6 px-14 flex-direction justify-center'/>
                </div>
                <div className='flex-col items-center flex text-center gap-2 py-10'>
                <Link to="/Login">
                  <img 
                  src={komunitas2} 
                  alt='' className='px-2 pt-6 px-14 flex-direction'/>
                </Link>
                </div>
                </div>
            <div className='flex pt-8 px-14 ps-36 pb-20 grid grid-cols-3'>
            <div className='justify-center'>
            <img src={salingjaga} alt='' />
            <p className='text-gray-300'>+100 Anggota</p>
            <br></br>
            <h1 className='font-bold text-black'>Saling Jaga</h1>
            <br></br>
            <p className='pb-8'>"Saling Mendukung, Saling Merawat, Saling Jaga".</p>
            <div className="mx-18">
                <Link to="/Login" className="px-22 lg:px-24 py-2 bg-[#1572A1] hover:bg-blue-500 text-white outline-none rounded">Lihat Detail</Link>
            </div>
        </div>
        <div>
            <img src={bugarmental} alt='' />
            <p className='text-gray-300'>+100 Anggota</p>
            <br></br>
            <h1 className='font-bold text-black'>Bugar Mental</h1>
            <br></br>
            <p className='pb-8'>"Bersama Berlari, Bersama Berkarya, Bugar Mental, Jiwa Kuat".</p>
            <div className="mx-18">
                <Link to="/Login" className="px-22 lg:px-24 py-2 bg-[#1572A1] hover:bg-blue-500 text-white outline-none rounded">Lihat Detail</Link>
            </div>
        </div>
        <div>
            <img src={mentalsehat} alt='' />
            <p className='text-gray-300'>+100 Anggota</p>
            <br></br>
            <h1 className='font-bold text-black'>Mentari Sehat</h1>
            <br></br>
            <p className='pb-8'>"Cahaya Peduli, Menyinari Untuk Hati yang Sehat".</p>
            <div className="mx-18">
                <Link to="/Login" className="px-22 lg:px-24 py-2 bg-[#1572A1] hover:bg-blue-500 text-white outline-none rounded">Lihat Detail</Link>
            </div>
        </div>
        <div>
            <img src={pikiransejahtera} alt='' className='pt-20'/>
            <p className='text-gray-300'>+100 Anggota</p>
            <br></br>
            <h1 className='font-bold text-black'>Pikiran Sejahtera</h1>
            <br></br>
            <p className='pb-6'>"Pikiran Bersama, Sejahtera Bersama"</p>
            <div className="mx-18">
                <Link to="/Login" className="px-22 lg:px-24 py-2 bg-[#1572A1] hover:bg-blue-500 text-white outline-none rounded">Lihat Detail</Link>
            </div>
        </div>
        <div>
            <img src={hatiwaras} alt='' className='pt-20'/>
            <p className='text-gray-300'>+100 Anggota</p>
            <br></br>
            <h1 className='font-bold text-black'>Hati Waras</h1>
            <br></br>
            <p className='pb-6'>"Hati Satu, Kesehatan Menjalin Solidaritas"</p>
            <div className="mx-18">
                <Link to="/Login" className="px-22 lg:px-24 py-2 bg-[#1572A1] hover:bg-blue-500 text-white outline-none rounded">Lihat Detail</Link>
            </div>
        </div>
        <div>
            <img src={bicarabaik} alt='' className='pt-20'/>
            <p className='text-gray-300'>+100 Anggota</p>
            <br></br>
            <h1 className='font-bold text-black'>Bicara Baik</h1>
            <br></br>
            <p className='pb-6'>"Bicara Baik, Hidup Baik, Jiwa Terang"</p>
            <div className="mx-18">
                <Link to="/Login" className="px-22 lg:px-24 py-2 bg-[#1572A1] hover:bg-blue-500 text-white outline-none rounded">Lihat Detail</Link>
            </div>
        </div>
            </div>
            <div className='pt-40'>
            <Footer />
            </div>
        </div>
    </div>
    )
}

export default Komunitas;