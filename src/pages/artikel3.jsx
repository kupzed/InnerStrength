import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from '../components/Header';
import artikel3head from "../assets/artikel3head.png";
import artikel1 from "../assets/artikel1.png";
import artikel2 from "../assets/artikel2.png";
import artikel3 from "../assets/artikel3.png";
import artikel4 from "../assets/artikel4.png";
import bipolarvid1 from "../assets/bipolarvid1.png";
import bipolarvid2 from "../assets/bipolarvid2.png";
import bipolarvid3 from "../assets/bipolarvid3.png";
import bipolarvid4 from "../assets/bipolarvid4.png";

const depression = () => {
    return (
        <div className="overflow-hidden">
            <Header />
            <div className='px-8 pt-28 mt-9'>
                <img src={artikel3head} className="object-center mx-auto" /> 
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
                        Cara Mengenali Tanda Bipolar pada Anak
                    </div>
                   
                    <main class="container mx-auto px-4 py-8">
        <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-4">Pendahuluan</h2>
            <p class="mb-4 text-justify">Gangguan bipolar pada anak adalah kondisi kesehatan mental yang ditandai oleh perubahan suasana hati yang ekstrem, termasuk periode mania dan depresi. Mengenali tanda-tanda bipolar pada anak dapat menjadi tantangan karena gejalanya bisa mirip dengan kondisi lain. Artikel ini akan membahas cara mengenali tanda-tanda bipolar pada anak.</p>
        </section>

        <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-4">Tanda-Tanda Mania pada Anak</h2>
            <p class="mb-4 text-justify">Mania adalah periode suasana hati yang sangat tinggi atau mudah tersinggung. Tanda-tanda mania pada anak dapat mencakup:</p>
            <ul class="list-disc pl-6 mb-4 text-justify">
                <li><strong>Peningkatan Energi</strong>: Anak mungkin tampak memiliki energi yang tak terbatas dan merasa sangat bersemangat.</li>
                <li><strong>Bicara Cepat</strong>: Anak mungkin berbicara lebih cepat dari biasanya atau melompat dari satu topik ke topik lain.</li>
                <li><strong>Kurang Tidur</strong>: Anak mungkin tidur sangat sedikit namun tetap tampak tidak lelah.</li>
                <li><strong>Perilaku Berisiko</strong>: Anak mungkin terlibat dalam perilaku berisiko seperti tindakan impulsif atau berani yang tidak biasa.</li>
                <li><strong>Keyakinan Berlebihan</strong>: Anak mungkin memiliki perasaan yang sangat tinggi tentang kemampuan dan prestasinya sendiri.</li>
            </ul>
        </section>

        <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-4">Tanda-Tanda Depresi pada Anak</h2>
            <p class="mb-4 text-justify">Depresi adalah periode suasana hati yang sangat rendah. Tanda-tanda depresi pada anak dapat mencakup:</p>
            <ul class="list-disc pl-6 mb-4 text-justify">
                <li><strong>Kesedihan yang Mendalam</strong>: Anak mungkin tampak sedih atau kosong sebagian besar waktu.</li>
                <li><strong>Kehilangan Minat</strong>: Anak mungkin kehilangan minat pada aktivitas yang biasanya dinikmati.</li>
                <li><strong>Kelelahan</strong>: Anak mungkin merasa sangat lelah atau tidak memiliki energi.</li>
                <li><strong>Perubahan Pola Makan</strong>: Anak mungkin mengalami perubahan nafsu makan yang signifikan, baik makan terlalu banyak atau terlalu sedikit.</li>
                <li><strong>Kesulitan Tidur</strong>: Anak mungkin mengalami kesulitan tidur atau tidur terlalu banyak.</li>
                <li><strong>Pikiran tentang Kematian atau Bunuh Diri</strong>: Anak mungkin berbicara tentang ingin mati atau menunjukkan perilaku berbahaya.</li>
            </ul>
        </section>

        <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-4">Cara Membantu Anak dengan Bipolar</h2>
            <p class="mb-4 text-justify">Jika Anda mencurigai anak Anda mengalami gangguan bipolar, ada beberapa langkah yang dapat Anda ambil untuk membantu mereka:</p>
            <ul class="list-disc pl-6 mb-4 text-justify">
                <li><strong>Konsultasi dengan Profesional</strong>: Bicaralah dengan dokter atau psikolog anak untuk mendapatkan diagnosis yang akurat dan rencana penanganan yang sesuai.</li>
                <li><strong>Pengobatan</strong>: Dokter mungkin meresepkan obat untuk membantu mengelola gejala bipolar pada anak Anda.</li>
                <li><strong>Terapi Psikologis</strong>: Terapi seperti terapi kognitif-perilaku (CBT) dapat membantu anak belajar mengelola gejala dan mengembangkan strategi koping yang sehat.</li>
                <li><strong>Dukungan dari Keluarga</strong>: Berikan dukungan emosional yang konsisten dan pastikan anak merasa dicintai dan dipahami.</li>
                <li><strong>Pendidikan Psikoedukasi</strong>: Pelajari lebih lanjut tentang gangguan bipolar untuk memahami kondisi anak Anda dan cara terbaik untuk mendukungnya.</li>
            </ul>
        </section>

        <section>
            <h2 class="text-2xl font-semibold mb-4">Kesimpulan</h2>
            <p class="text-justify">Mengenali tanda-tanda bipolar pada anak memerlukan perhatian dan pemahaman yang mendalam. Jika Anda mencurigai anak Anda mengalami gangguan bipolar, penting untuk mencari bantuan profesional secepat mungkin. Dengan diagnosis yang tepat dan penanganan yang sesuai, anak Anda dapat menjalani kehidupan yang sehat dan produktif.</p>
        </section>
    </main>
                    
                        </div>
                
                        <div className="w-full md:w-2/5 px-4">
                            <div className="relative mt-10 text-left font-semibold text-2xl">
                                Rekomendasi Video 
                            </div>
                    
                            <div className="grid grid-cols-1 gap-4">
                            <Link to="/Rekomen5">
        <div className="flex flex-wrap py-4">
            <img src={bipolarvid1} className="w-36 h-36" />
            <div className="text-base text-justify ml-2 w-8/12">
            Bipolar
            </div>
        </div>
    </Link>
    
    <Link to="/Rekomen6">
        <div className="flex flex-wrap py-4">
            <img src={bipolarvid2} className="w-36 h-36" />
            <div className="text-base ml-2 w-8/12">Bipolar VS Moodswing</div>
        </div>
    </Link>

    <Link to="/Rekomen7">
        <div className="flex flex-wrap py-4">
            <img src={bipolarvid3} className="w-36 h-36" />
            <div className="text-base ml-2 w-8/12">Apa itu gangguan bipolar</div>
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
