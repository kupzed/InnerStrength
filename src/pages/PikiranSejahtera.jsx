import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderLogin from '../components/HeaderLogin';
import pikiransejahterarhead from "../assets/pikiransejahterahead.png";
import DropdownJenispenyakit from "./DropdownJenispenyakit";
import DropdownUrutkan from "./DropdownUrutkan";
import DropdownPolamakan from "./DropdownPolamakan";
import DropdownHobi from "./DropdownHobi";
import DropdownTerapi from "./DropdownTerapi";
import CardKomunitas from './CardKomunitas';
import postingan1 from "../assets/postingan1.png";
import postingan2 from "../assets/postingan2.png";
import postingan3 from "../assets/postingan3.png";
import postingan4 from "../assets/postingan4.png";
import postingan5 from "../assets/postingan5.png";
import postingan6 from "../assets/postingan6.png";


const cards = [
  {
    image:postingan1,
    title: 'Makanan Pencerah Mood: Rekomendasi Makanan untuk Mengatasi Depresi',
    date: '07-05-2024',
    content: 'Depresi merupakan salah satu gangguan mental yang umum terjadi dan dapat mengurangi kualitas hidup seseorang...',
    link: '/postingan1',
    initialLikes: 12
  },
  {
    image: postingan2,
    title: 'Pantangan makanan untuk yang sering Depresi: Menuju Kesehatan Mental Lebih Baik',
    date: '07-05-2024',
    content: 'Depresi, bagaikan awan kelabu yang menyelimuti jiwa, dapat menguras semangat dan mengganggu kehidupan...',
    link: '/postingan2',
    initialLikes: 8
  },
  {
    image: postingan3,
    title: 'Hobi Mindful untuk Melawan Depresi: Temukan Kedamaian dan...',
    date: '07-05-2024',
    content: 'Terjebak dalam pusaran depresi? Merasa lelah dengan pikiran negatif yang tak henti-hentinya?...',
    link: '/postingan3',
    initialLikes: 5
  },
  {
    image: postingan4,
    title: 'Menemukan Kedamaian di Alam Bebas: Hobi Outdoor untuk Melawan Depresi',
    date: '07-05-2024',
    content: 'Terjebak dalam pusaran depresi? Merasa lelah dengan pikiran negatif yang tak henti-hentinya?...',
    link: '/postingan4',
    initialLikes: 10
  },
  {
    image: postingan5,
    title: 'Terapi Perilaku Kognitif (CBT): Menemukan Harapan Baru dalam Melawan Depresi',
    date: '07-05-2024',
    content: 'Ada cahaya harapan yang dapat membantu Anda keluar dari keterpurukan: Terapi Perilaku Kognitif (CBT)...',
    link: '/postingan5',
    initialLikes: 3
  },
  {
    image: postingan6,
    title: 'Terapi Interpersonal (IPT): Membangun Hubungan yang Sehat untuk Melawan Depresi',
    date: '07-05-2024',
    content: 'Hidup seringkali memberikan tantangan dan cobaan yang membuat pikiran kita menjadi kacau...',
    link: '/postingan6',
    initialLikes: 7
  }
];

const pikiransejahterar = () => {
    return (
        <div className="overflow-hidden">
      {/* <Navbar /> */}
      <HeaderLogin />
      <div className='px-28 pt-28 mt-9 pd-8'>
        <img src={pikiransejahterarhead} className="object-center mx-auto" /> 
        </div>
       
       <section id="IsiKomunitas" class="pt-14 px-48 pb-28 text-center">
        <div class=" justify-center">
            <div class="flex flex-wrap justify-center">
                <div class="pr-12 pb-12 text-5xl  font-extrabold text-[#1572A1] ">Saling Jaga</div>
                <div class="mr-7 ml-48 "> 
                <button id="Ikuti" className="px-2 lg:px-24 h-14 w-72 py-4 text-center flex flex-wrap bg-[#1572A1] hover:bg-blue-500 text-white outline-none rounded-2xl"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none">
                    <path d="M25.997 11.9137L25.497 7.41375C25.469 7.16075 25.255 6.96875 25 6.96875C24.364 6.96875 23.809 7.21275 23.3955 7.67425C22.235 8.96975 22.4565 11.6077 22.5 12.0267V12.5122C20.766 12.5932 20.346 13.1267 19.6515 14.2218C19.4105 14.6023 19.1115 15.0728 18.659 15.6278L16.021 17.4338C15.7115 17.6748 13 19.8352 13 21.5002C13 22.9462 13.205 23.8962 13.355 24.5903C13.436 24.9657 13.5 25.2628 13.5 25.5002V27.0002C13.5 27.6612 14.5 27.6623 14.5 27.0002V25.5002C14.5 25.1562 14.4225 24.7962 14.3325 24.3792C14.192 23.7292 14 22.8392 14 21.5002C14 20.6102 15.6165 19.0177 16.6105 18.2407L19.2825 16.4128C19.3215 16.3863 19.356 16.3548 19.386 16.3188C19.9035 15.6923 20.232 15.1742 20.4965 14.7577C21.04 13.9002 21.24 13.5852 22.389 13.5157C22.246 14.1797 21.975 15.2797 21.581 16.2097C21.258 16.5212 19.967 17.7717 19.1355 18.6577C18.683 19.1397 19.4115 19.8242 19.865 19.3417C20.7825 18.3627 22.331 16.8753 22.3465 16.8603C22.394 16.8148 22.432 16.7603 22.4585 16.7003C23.004 15.4533 23.449 13.5202 23.4915 13.0442C23.5045 12.9042 23.502 11.9872 23.4975 11.9452C23.4195 11.2292 23.383 9.18575 24.1415 8.34075C24.266 8.20225 24.4035 8.10425 24.561 8.04325L24.9975 11.9703C24.94 12.5293 24.5005 16.8237 24.5045 17.4618C24.4255 17.7362 23.504 18.5857 22.831 19.2062C21.124 20.7797 19 22.7378 19 24.5002V27.0002C19 27.6612 20 27.6623 20 27.0002V24.5002C20 23.1758 22.0275 21.3067 23.508 19.9422C24.8535 18.7022 25.5 18.0802 25.5 17.5002C25.5 16.9567 25.859 13.3603 25.9975 12.0203C26.001 11.9848 26.001 11.9492 25.997 11.9137Z" fill="white"/>
                    <path d="M9.95407 17.4153L7.34107 15.6273C6.88857 15.0723 6.59007 14.6018 6.34857 14.2213C5.65407 13.1263 5.23407 12.5928 3.50007 12.5118V12.0262C3.54357 11.6072 3.76507 8.96925 2.60457 7.67375C2.19107 7.21225 1.63607 6.96875 1.00007 6.96875C0.745066 6.96875 0.531066 7.16025 0.503066 7.41375L0.00306561 11.9137C-0.000934392 11.9492 -0.000934355 11.9848 0.00256564 12.0203C0.141066 13.3598 0.500066 16.9563 0.500066 17.4998C0.500066 18.0798 1.14657 18.7017 2.49207 19.9417C3.97257 21.3062 6.00007 23.1753 6.00007 24.4998V26.9998C6.00007 27.2757 6.22407 27.4998 6.50007 27.4998C6.77607 27.4998 7.00007 27.2757 7.00007 26.9998V24.4998C7.00007 22.7373 4.87607 20.7792 3.16957 19.2062C2.49707 18.5857 1.57507 17.7368 1.50007 17.4998C1.50007 16.8253 1.06057 12.5293 1.00307 11.9703L1.43957 8.04325C2.69607 8.52775 2.50007 11.1658 2.50007 11.9998C2.50057 12.1318 2.49657 13.0213 2.50707 13.0833C2.52107 13.1667 2.85907 15.1393 3.54207 16.7003C3.56857 16.7608 3.60607 16.8148 3.65407 16.8603C3.66957 16.8753 5.21757 18.3627 6.13557 19.3417C6.58907 19.8257 7.31657 19.1388 6.86507 18.6578C6.03357 17.7713 4.74257 16.5207 4.41957 16.2097C4.02557 15.2797 3.75457 14.1797 3.61157 13.5157C4.76057 13.5852 4.96057 13.9002 5.50407 14.7577C5.66507 15.0112 6.46707 16.2423 6.71757 16.4128L9.36407 18.2227C10.3836 19.0162 12.0001 20.6077 12.0001 21.4998C12.0001 22.8387 11.8081 23.7288 11.6676 24.3787C11.5776 24.7957 11.5001 25.1558 11.5001 25.4998V26.9998C11.5001 27.2757 11.7241 27.4998 12.0001 27.4998C12.2761 27.4998 12.5001 27.2757 12.5001 26.9998V25.4998C12.5001 25.2623 12.5641 24.9653 12.6451 24.5898C12.7951 23.8958 13.0001 22.9458 13.0001 21.4998C13.0001 19.8348 10.2886 17.6743 9.95407 17.4153Z" fill="white"/>
                    <path d="M12.7595 16.4385C12.9095 16.5205 13.0905 16.5205 13.2405 16.4385C18.6055 13.4945 22.5 8.8655 22.5 5.432C22.5 2.2285 20.1815 0.5 18 0.5C15.8 0.5 14.0135 2.3385 13 4.4465C11.9865 2.3385 10.1995 0.5 8 0.5C5.8185 0.5 3.5 2.2285 3.5 5.432C3.5 8.866 7.3945 13.4945 12.7595 16.4385ZM8 1.5C10.0915 1.5 11.8125 3.797 12.526 5.9315C12.6775 6.3855 13.3225 6.385 13.474 5.9315C14.1875 3.797 15.9085 1.5 18 1.5C19.697 1.5 21.5 2.878 21.5 5.432C21.5 8.4235 17.8625 12.6875 13 15.428C8.1375 12.6875 4.5 8.424 4.5 5.432C4.5 2.878 6.303 1.5 8 1.5Z" fill="white"/>
                    </svg><span class="pl-4">Ikuti</span>
                    
                </button>
                </div> 

                <button id="postinganmu" className="px-2 lg:px-24 h-14 w-72 py-4 text-center flex flex-wrap bg-[#1572A1] hover:bg-blue-500 text-white outline-none rounded-2xl"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 34 32" fill="none">
                    <g clip-path="url(#clip0_739_4710)">
                         <path d="M25.3336 0H6.76685C5.25472 0 3.927 1.24396 3.927 2.7164V30.1823C3.927 30.6751 4.06418 31.0859 4.28527 31.4033C4.54966 31.7827 4.97538 32.0001 5.43189 32C5.8635 32 6.32302 31.8079 6.74738 31.4454L15.0541 24.3926C15.3107 24.1734 15.6792 24.0479 16.0624 24.0479C16.4454 24.0479 16.8132 24.1734 17.0705 24.3932L25.3495 31.4443C25.7753 31.8079 26.2032 32.0002 26.634 32.0002C27.3626 32.0002 28.0728 31.4382 28.0728 30.1824V2.7164C28.0728 1.24396 26.8458 0 25.3336 0Z" fill="white"/>
                         </g>
                        <defs> 
                    <clipPath id="clip0_739_4710"> 
                  <rect width="32" height="32" fill="white"/>
                  </clipPath>
                    </defs>
                </svg><span class="pl-4">Post</span>
                    
                </button>
            </div>
            <div class="flex flex-wrap justify-center">
            <div class="pb-14 px-24 w-auto pr-7 ">
                
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
            <div className="w-9/12 pb-8" >
                <div className="px-5  w-auto py-2 bg-[#ffffff] text-[#ACACAF] text-left rounded-xl border-slate-700">Cari di Komunitas</div>
            </div>

            
           

           



            
            </div>

            <div className="flex justify-center items-center p-5">
            <header className="flex gap-16">
            <DropdownUrutkan />
            <DropdownJenispenyakit />
           
           <DropdownPolamakan />
           <DropdownHobi />
           <DropdownTerapi />
            </header>
          </div>

          <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <CardKomunitas
          key={index}
          image={card.image}
          title={card.title}
          date={card.date}
          content={card.content}
          link={card.link}
            initialLikes={card.initialLikes}
          
        />
      ))}
    </div>
      
            
        </div>
        
        
       </section>
       
      <Footer />
    </div>
    )
}
export default pikiransejahterar