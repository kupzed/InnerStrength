import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from '../components/Header';
import artikel4head from "../assets/artikel4head.png";
import artikel1 from "../assets/artikel1.png";
import artikel2 from "../assets/artikel2.png";
import artikel3 from "../assets/artikel3.png";
import artikel4 from "../assets/artikel4.png";
import depressionvid1 from "../assets/depression1.png";
import depressionvid2 from "../assets/depression2.png";
import depressionvid3 from "../assets/depression3.png";
import depressionvid4 from "../assets/depression4.png";

const depression = () => {
    return (
        <div className="overflow-hidden">
            <Header />
            <div className='px-8 pt-28 mt-9'>
                <img src={artikel4head} className="object-center mx-auto" /> 
            </div>
       
            <section id="depression" className="pt-14 px-8 pb-28">
                <div className="container mx-auto">
                <div className="pt-14 px-8 md:px-28 flex flex-wrap justify-center items-center gap-4">
                <a href="javascript:history.back()" class="back-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M29.3337 14.6671H5.8857L12.943 7.60977C13.0704 7.48677 13.172 7.33964 13.2418 7.17697C13.3117 7.0143 13.3485 6.83934 13.35 6.6623C13.3516 6.48526 13.3178 6.30969 13.2508 6.14583C13.1838 5.98197 13.0848 5.8331 12.9596 5.70791C12.8344 5.58272 12.6855 5.48371 12.5216 5.41667C12.3578 5.34963 12.1822 5.31589 12.0052 5.31743C11.8281 5.31897 11.6532 5.35575 11.4905 5.42563C11.3278 5.49551 11.1807 5.59709 11.0577 5.72443L1.72437 15.0578C1.4744 15.3078 1.33398 15.6469 1.33398 16.0004C1.33398 16.354 1.4744 16.6931 1.72437 16.9431L11.0577 26.2764C11.3092 26.5193 11.646 26.6537 11.9956 26.6507C12.3452 26.6476 12.6796 26.5074 12.9268 26.2602C13.174 26.013 13.3142 25.6786 13.3173 25.329C13.3203 24.9794 13.1859 24.6426 12.943 24.3911L5.8857 17.3338H29.3337C29.6873 17.3338 30.0265 17.1933 30.2765 16.9432C30.5266 16.6932 30.667 16.3541 30.667 16.0004C30.667 15.6468 30.5266 15.3077 30.2765 15.0576C30.0265 14.8076 29.6873 14.6671 29.3337 14.6671Z" fill="black"/>
                        </svg>
                    </a>
                    <div className='w-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M12.879 25.7474C15.7392 25.7475 18.5176 24.7932 20.7741 23.0357L29.2871 31.5487C29.9231 32.1629 30.9364 32.1453 31.5506 31.5093C32.1497 30.8889 32.1497 29.9055 31.5506 29.2852L23.0376 20.7722C27.3988 15.1581 26.3832 7.07158 20.7692 2.71037C15.1551 -1.65084 7.06865 -0.635264 2.70744 4.97879C-1.65377 10.5928 -0.638194 18.6794 4.97586 23.0406C7.23603 24.7964 10.0169 25.7489 12.879 25.7474ZM6.03886 6.03687C9.8166 2.25906 15.9415 2.25899 19.7193 6.03673C23.4972 9.81447 23.4972 15.9394 19.7195 19.7172C15.9417 23.495 9.81681 23.4951 6.039 19.7173C6.03893 19.7173 6.03893 19.7173 6.03886 19.7172C2.26112 15.967 2.23886 9.86439 5.98908 6.08665C6.00565 6.07001 6.02222 6.05344 6.03886 6.03687Z" fill="#1E1F27"/>
                        </svg>
                    </div>
                    <div className="flex-grow">
                        <div className="px-5 py-2 bg-white text-gray-600 text-left rounded-xl border border-gray-300">Cari Komunitas</div>
                    </div>
                </div>
            
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-3/5 px-4 mt-12">
                        <div class="text-3xl font-bold  text-black text-center ">
                        Cegah Postpartum Depression Sejak Masa Kehamilan
                    </div>
                   
                    <main class="container mx-auto px-4 py-8">
        <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-4">Pendahuluan</h2>
            <p class="mb-4 text-justify">Postpartum depression atau depresi pascapersalinan adalah kondisi yang serius dan dapat mempengaruhi ibu baru setelah melahirkan. Namun, dengan langkah-langkah pencegahan yang tepat sejak masa kehamilan, risiko terkena postpartum depression dapat dikurangi. Artikel ini akan membahas cara-cara untuk mencegah postpartum depression sejak masa kehamilan.</p>
        </section>

        <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-4">Pentingnya Kesehatan Mental Selama Kehamilan</h2>
            <p class="mb-4 text-justify">Kesehatan mental ibu selama kehamilan memainkan peran penting dalam mencegah postpartum depression. Berikut adalah beberapa langkah yang dapat diambil untuk menjaga kesehatan mental selama kehamilan:</p>
            <ul class="list-disc pl-6 mb-4 text-justify">
                <li><strong>Rutin Memeriksakan Diri ke Dokter</strong>: Konsultasi rutin dengan dokter kandungan dapat membantu mendeteksi tanda-tanda awal depresi dan mendapatkan penanganan yang tepat.</li>
                <li><strong>Olahraga Teratur</strong>: Olahraga ringan yang aman bagi ibu hamil dapat membantu meningkatkan suasana hati dan mengurangi stres.</                li>
                <li><strong>Makan Seimbang</strong>: Pola makan yang seimbang dengan nutrisi yang cukup dapat membantu menjaga kesehatan mental dan fisik.</li>
                <li><strong>Istirahat yang Cukup</strong>: Tidur yang cukup sangat penting untuk kesehatan mental. Cobalah untuk tidur dan bangun pada jam yang sama setiap hari.</li>
                <li><strong>Dukungan Sosial</strong>: Berbicara dengan pasangan, keluarga, atau teman dekat tentang perasaan dan kekhawatiran Anda dapat memberikan dukungan emosional yang sangat dibutuhkan.</li>
            </ul>
        </section>

        <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-4">Mengenali Tanda-Tanda Depresi Selama Kehamilan</h2>
            <p class="mb-4 text-justify">Mengenali tanda-tanda depresi selama kehamilan dapat membantu dalam mengambil langkah-langkah pencegahan lebih awal. Beberapa tanda-tanda yang perlu diperhatikan meliputi:</p>
            <ul class="list-disc pl-6 mb-4 text-justify">
                <li><strong>Perasaan Sedih yang Berlebihan</strong>: Merasa sedih atau kosong sebagian besar waktu.</li>
                <li><strong>Kehilangan Minat</strong>: Tidak lagi tertarik pada aktivitas yang biasanya menyenangkan.</li>
                <li><strong>Perubahan Pola Makan</strong>: Kehilangan nafsu makan atau makan berlebihan tanpa alasan yang jelas.</li>
                <li><strong>Gangguan Tidur</strong>: Insomnia atau tidur terlalu banyak.</li>
                <li><strong>Kelelahan</strong>: Merasa sangat lelah atau tidak memiliki energi.</li>
                <li><strong>Pikiran tentang Kematian atau Bunuh Diri</strong>: Pikiran berulang tentang kematian atau bunuh diri.</li>
            </ul>
        </section>

        <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-4">Strategi Pencegahan Postpartum Depression</h2>
            <p class="mb-4 text-justify">Beberapa strategi yang dapat membantu mencegah postpartum depression meliputi:</p>
            <ul class="list-disc pl-6 mb-4 text-justify">
                <li><strong>Mencari Bantuan Profesional</strong>: Jika Anda merasa mengalami gejala depresi selama kehamilan, segera konsultasikan dengan psikolog atau psikiater.</li>
                <li><strong>Mengikuti Kelas Prenatal</strong>: Kelas prenatal tidak hanya mempersiapkan Anda untuk melahirkan, tetapi juga memberikan informasi tentang cara mengatasi stres dan kecemasan.</li>
                <li><strong>Membuat Rencana Pasca Kelahiran</strong>: Diskusikan dengan pasangan dan keluarga tentang bagaimana mereka dapat membantu Anda setelah bayi lahir.</li>
                <li><strong>Terapi</strong>: Terapi kognitif-perilaku (CBT) dapat membantu Anda mengatasi pikiran negatif dan mengembangkan strategi koping yang sehat.</li>
                <li><strong>Dukungan Kelompok</strong>: Bergabung dengan kelompok dukungan ibu hamil dapat memberikan Anda kesempatan untuk berbagi pengalaman dan mendapatkan dukungan dari sesama ibu.</li>
            </ul>
        </section>

        <section>
            <h2 class="text-2xl font-semibold mb-4">Kesimpulan</h2>
            <p class="text-justify">Postpartum depression adalah kondisi yang serius, tetapi dengan langkah-langkah pencegahan yang tepat sejak masa kehamilan, risiko terkena kondisi ini dapat dikurangi. Menjaga kesehatan mental selama kehamilan, mengenali tanda-tanda depresi, dan mengambil langkah-langkah pencegahan dapat membantu ibu baru menjalani masa pascapersalinan dengan lebih baik. Jika Anda atau seseorang yang Anda kenal menunjukkan gejala depresi, penting untuk mencari bantuan profesional secepat mungkin.</p>
        </section>
    </main>
                    
                        </div>
                
                        <div className="w-full md:w-2/5 px-4">
                            <div className="relative mt-10 text-left font-semibold text-2xl">
                                Rekomendasi Video 
                            </div>
                    
                            <div className="grid grid-cols-1 gap-4">
    <Link to="/Rekomen9">
        <div className="flex flex-wrap py-4">
            <img src={depressionvid1} className="w-36 h-36" />
            <div className="text-base text-justify ml-2 w-8/12">
            Depresi sering menjadi bahan bercandaan kita. Namun, apakah kalian sudah tahu, sebenarnya apa yang dimaksud dengan depresi?
            </div>
        </div>
    </Link>
    
    <Link to="/Rekomen10">
        <div className="flex flex-wrap py-4">
            <img src={depressionvid2} className="w-36 h-36" />
            <div className="text-base ml-2 w-8/12">Depresi Dan Hipomania</div>
        </div>
    </Link>

    <Link to="/Rekomen11">
        <div className="flex flex-wrap py-4">
            <img src={depressionvid3} className="w-36 h-36" />
            <div className="text-base ml-2 w-8/12">Apa Itu Depresi</div>
        </div>
    </Link>

    <Link to="/Rekomen12">
        <div className="flex flex-wrap py-4">
            <img src={depressionvid4} className="w-36 h-36" />
            <div className="text-base ml-2 w-8/12">Depresi=Sedih? Tidak!</div>
        </div>
    </Link>

    
</div>
                        </div>
                    </div>
                </div>

                <section className="text-center mt-14">
                    <div className="text-2xl font-semibold mb-6">Artikel Terkait</div>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <Link to="/artikel1">
                                <img src={artikel1} className="w-56 h-56 mx-auto" />
                            </Link>
                            <div className="pt-2 w-56 mx-auto text-justify text-xs">
                                Gangguan depression - Penyebab, Gejala, dan Penanganannya
                            </div>
                        </div>

                        <div>
                            <Link to="/artikel2">
                                <img src={artikel2} className="w-56 h-56 mx-auto" />
                            </Link>
                            <div className="pt-2 w-56 mx-auto text-justify text-xs">
                                Depresi atau gangguan depresi mayor adalah gangguan kesehatan mental yang memengaruhi perasaan, cara berpikir dan cara bertindak seseorang.
                            </div>
                        </div>

                        <div>
                            <Link to="/artikel3">
                                <img src={artikel3} className="w-56 h-56 mx-auto" />
                            </Link>
                            <div className="pt-2 w-56 mx-auto text-justify text-xs">
                                Sama halnya dengan orang dewasa, tanda depression pada anak akan melalui dua fase, yaitu manik (riang) dan depresif (sedih).
                            </div>
                        </div>

                        <div>
                            <Link to="/artikel4">
                                <img src={artikel4} className="w-56 h-56 mx-auto" />
                            </Link>
                            <div className="pt-2 w-56 mx-auto text-justify text-xs">
                                Sebetulnya, terdapat beberapa langkah sederhana yang bisa dilakukan semenjak sang ibu melahirkan untuk mencegah postpartum depression.
                            </div>
                        </div>
                    </div>
                </section>
            </section>
       
            <Footer />
        </div>
    );
};

export default depression;
