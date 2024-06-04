import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import tp1 from '../../assets/tp1.png';
import tp2 from '../../assets/tp2.png';
import tp3 from '../../assets/tp3.png';
import tp4 from '../../assets/tp4.png';
import tp5 from '../../assets/tp5.png';
import tp6 from '../../assets/tp6.png';
import tp7 from '../../assets/tp7.png';
import tp8 from '../../assets/tp8.png';
import tp9 from '../../assets/tp9.png';
import tp10 from '../../assets/tp10.png';
import dampak1 from '../../assets/dampak1.png';
import dampak2 from '../../assets/dampak2.png';
import dampak3 from '../../assets/dampak3.png';

const Pageone = () => {
  return (
    <div>
      <Header />
      <div className='bg-[#F3F3F3] pt-16'>
        <h1 className='pt-8 text-4xl text-gray-600 text-center'>Tentang <span className='text-blue-900'>Kami</span></h1>
        <br></br><h1 className='pt-8 pb-8 text-3xl font-bold text-black text-center'>Bersama Innerstrength temukan
        <br></br>kekuatanmu, hadapi tantangan</h1>
        <div className='flex pt-6'>
        <p className='flex-col text-center pb-20 px-80'>Innerstrength didirikan pada tahun 2024 merupakan 
          perusahaan kesehatan mental yang berkomitmen untuk 
          membantu individu dan komunitas mencapai kesejahteraan 
          mental yang optimal. Kami percaya bahwa setiap orang memiliki 
          kekuatan batin untuk mengatasi tantangan hidup dan menjalani 
          kehidupan yang lebih bahagia dan lebih memuaskan.
        </p>
        </div>
        <div className='bg-[#1572A1]'>
          <div><h1 className='pt-8 px-14 text-3xl text-white'>Terapis Kami</h1>
          <br></br><p className='px-14 text-white pb-8'>Innerstrength menawarkan akses ke Praktisi Psikolog, Konselor, 
          <br></br>dan sertifikasi profesional serupa yang diakui, terdaftar, terlatih,
          <br></br>dan berpengalaman.</p>
          </div>
          <div className='flex px-14 pb-20 grid grid-cols-5'>
        <div className='justify-center'>
            <img src={tp1} alt='' />
        </div>
        <div>
            <img src={tp2} alt='' />
        </div>
        <div>
            <img src={tp3} alt='' />
        </div>
        <div>
            <img src={tp4} alt='' />
        </div>
        <div>
            <img src={tp5} alt='' />
        </div>
        <div>
            <img src={tp6} alt='' className='pt-6'/>
        </div>
        <div>
            <img src={tp7} alt='' className='pt-6'/>
        </div>
        <div>
            <img src={tp8} alt='' className='pt-6'/>
        </div>
        <div>
            <img src={tp9} alt='' className='pt-6'/>
        </div>
        <div>
            <img src={tp10} alt='' className='pt-6'/>
        </div>
        </div>
        </div>
        <div className='pt-14 text-center'>
          <div>
            <h1 className='font-bold text-2xl'>Dampak Sosial</h1>
            <br></br><p className='px-64 pb-8'>Program dampak sosial yang berkomitmen untuk menjadikan 
              terapi adil dan dapat diakses oleh komunitas yang kekurangan sumber 
              daya dan individu yang membutuhkan.</p>
              <div className='flex justify-center px-8 pt-6 ps-18 gap-3'>
                <div className='w-80 rounded-xl shadow-xl flex-col items-center flex text-center gap-2 py-10'>
                  <img 
                  src={dampak1} 
                  alt='' className='pt-6 px-14 flex-direction justify-center'/>
                  <h3>meningkatkan akses yang adil</h3>
                </div>
                <div className='w-80 rounded-xl shadow-xl flex-col items-center flex text-center gap-2 py-10'>
                  <img 
                  src={dampak2} 
                  alt='' className='pt-6 px-14 flex-direction'/>
                  <h3>mengurangi stigma</h3>
                </div>
                <div className='w-80 rounded-xl shadow-xl flex-col items-center flex text-center gap-2 py-10'>
                  <img src={dampak3} alt='' className='pt-6 px-14 flex-direction'/>
                  <h3>memberikan dukungan dalam krisis</h3>
                </div>
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

export default Pageone;
