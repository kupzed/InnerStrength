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
import HeaderLogin from "../components/HeaderLogin"
import KomunitasSalingjaga from '../components/shared/KomunitasSalingjaga';
import KomunitasPikiransejahtera from '../components/shared/KomunitasPikiransejahtera';
import KomunitasMentarisehat from '../components/shared/KomunitasMentarisehat';
import KomunitasBicarabaik from '../components/shared/KomunitasBicarabaik';
import KomunitasBugarmental from '../components/shared/KomunitasBugarmental';
import KomunitasHatiwaras from '../components/shared/KomunitasHatiwaras';

const Komunitas = () => {
    return (
    <div>
    <HeaderLogin />
        <h1 className=' pt-36 font-bold text-2xl text-center'>Temukan, Berdayakan, dan Berkembang Bersama 🌿🌟
        </h1>
        <h2 className=' text-center'>Bergabunglah dengan Komunitas Pendukung Kesehatan Mental 🤝💬</h2>
        <div class="pt-14 px-28">
        <div class="flex flex-wrap justify-center">
            <div class="px-2 w-auto pr-7">
            <Link to="/KomunitasLogin">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M29.3337 14.6671H5.8857L12.943 7.60977C13.0704 7.48677 13.172 7.33964 13.2418 7.17697C13.3117 7.0143 13.3485 6.83934 13.35 6.6623C13.3516 6.48526 13.3178 6.30969 13.2508 6.14583C13.1838 5.98197 13.0848 5.8331 12.9596 5.70791C12.8344 5.58272 12.6855 5.48371 12.5216 5.41667C12.3578 5.34963 12.1822 5.31589 12.0052 5.31743C11.8281 5.31897 11.6532 5.35575 11.4905 5.42563C11.3278 5.49551 11.1807 5.59709 11.0577 5.72443L1.72437 15.0578C1.4744 15.3078 1.33398 15.6469 1.33398 16.0004C1.33398 16.354 1.4744 16.6931 1.72437 16.9431L11.0577 26.2764C11.3092 26.5193 11.646 26.6537 11.9956 26.6507C12.3452 26.6476 12.6796 26.5074 12.9268 26.2602C13.174 26.013 13.3142 25.6786 13.3173 25.329C13.3203 24.9794 13.1859 24.6426 12.943 24.3911L5.8857 17.3338H29.3337C29.6873 17.3338 30.0265 17.1933 30.2765 16.9432C30.5266 16.6932 30.667 16.3541 30.667 16.0004C30.667 15.6468 30.5266 15.3077 30.2765 15.0576C30.0265 14.8076 29.6873 14.6671 29.3337 14.6671Z" fill="black"/>
                </svg>
            </Link>
            </div>
            <div class='w-auto pr-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M12.879 25.7474C15.7392 25.7475 18.5176 24.7932 20.7741 23.0357L29.2871 31.5487C29.9231 32.1629 30.9364 32.1453 31.5506 31.5093C32.1497 30.8889 32.1497 29.9055 31.5506 29.2852L23.0376 20.7722C27.3988 15.1581 26.3832 7.07158 20.7692 2.71037C15.1551 -1.65084 7.06865 -0.635264 2.70744 4.97879C-1.65377 10.5928 -0.638194 18.6794 4.97586 23.0406C7.23603 24.7964 10.0169 25.7489 12.879 25.7474ZM6.03886 6.03687C9.8166 2.25906 15.9415 2.25899 19.7193 6.03673C23.4972 9.81447 23.4972 15.9394 19.7195 19.7172C15.9417 23.495 9.81681 23.4951 6.039 19.7173C6.03893 19.7173 6.03893 19.7173 6.03886 19.7172C2.26112 15.967 2.23886 9.86439 5.98908 6.08665C6.00565 6.07001 6.02222 6.05344 6.03886 6.03687Z" fill="#1E1F27"/>
                </svg>
            </div>
            <div className="w-2/3" >
                <div className="px-5  w-auto py-2 bg-[#ffffff] text-[#ACACAF] text-left rounded-xl border-slate-700">Cari Komunitas</div>
            </div>
            </div>
            </div>
        <div class="pl-24">
            
        <div className='pt-8  pb-20 grid grid-cols-3  sm:px-24 xl:px-64 mr-1'>
            <KomunitasSalingjaga />
            <KomunitasPikiransejahtera/>
            <KomunitasMentarisehat/>
            <KomunitasBicarabaik/>
            <KomunitasBugarmental/>
            <KomunitasHatiwaras/>
        
        
        
        </div>
            
        </div>
        <div className='pt-40'>
            <Footer />
            </div>
    </div>
    )
}

export default Komunitas;