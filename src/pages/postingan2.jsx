import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderLogin from '../components/HeaderLogin';
import postingan2head from "../assets/postingan2head.png";

const Postingan1 = () => {
    const [comment, setComment] = useState(''); // State untuk menyimpan teks komentar
    const [comments, setComments] = useState([]); // State untuk menyimpan daftar komentar
    const [isSaved, setIsSaved] = useState(false); // State untuk menyimpan status "simpan"
    const [isLiked, setIsLiked] = useState(false); // State untuk menyimpan status "like"
    const [likeCount, setLikeCount] = useState(12); // State untuk menghitung jumlah "like"

    // Fungsi untuk menangani pengiriman komentar
    const handlePostComment = () => {
        if (comment.trim() !== '') {
            // Buat objek komentar baru
            const newComment = {
                id: comments.length + 1,
                text: comment,
                date: new Date().toLocaleDateString(), // Tanggal komentar dibuat
            };

            // Tambahkan komentar baru ke daftar komentar
            setComments([...comments, newComment]);

            // Reset input komentar setelah dikirim
            setComment('');
        }
    };

    // Fungsi untuk menangani klik tombol "simpan"
    const handleSave = () => {
        setIsSaved(!isSaved);
    };

    // Fungsi untuk menangani klik tombol "like"
    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    };

    return (
        <div className="overflow-hidden">
            <HeaderLogin />
            <div className="pt-28 px-52 w-auto pr-7">
            <a href="javascript:history.back()" class="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M29.3337 14.6671H5.8857L12.943 7.60977C13.0704 7.48677 13.172 7.33964 13.2418 7.17697C13.3117 7.0143 13.3485 6.83934 13.35 6.6623C13.3516 6.48526 13.3178 6.30969 13.2508 6.14583C13.1838 5.98197 13.0848 5.8331 12.9596 5.70791C12.8344 5.58272 12.6855 5.48371 12.5216 5.41667C12.3578 5.34963 12.1822 5.31589 12.0052 5.31743C11.8281 5.31897 11.6532 5.35575 11.4905 5.42563C11.3278 5.49551 11.1807 5.59709 11.0577 5.72443L1.72437 15.0578C1.4744 15.3078 1.33398 15.6469 1.33398 16.0004C1.33398 16.354 1.4744 16.6931 1.72437 16.9431L11.0577 26.2764C11.3092 26.5193 11.646 26.6537 11.9956 26.6507C12.3452 26.6476 12.6796 26.5074 12.9268 26.2602C13.174 26.013 13.3142 25.6786 13.3173 25.329C13.3203 24.9794 13.1859 24.6426 12.943 24.3911L5.8857 17.3338H29.3337C29.6873 17.3338 30.0265 17.1933 30.2765 16.9432C30.5266 16.6932 30.667 16.3541 30.667 16.0004C30.667 15.6468 30.5266 15.3077 30.2765 15.0576C30.0265 14.8076 29.6873 14.6671 29.3337 14.6671Z" fill="black"/>
                    </svg>
                </a>
            </div>
            <section id="Bipolar" className="pt-14 px-6 md:px-12 lg:px-20 xl:px-48 pb-28">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-center">
                        <div className='w-10/12'>
                            <img src={postingan2head} className="object-center mx-auto pb-14" alt="Postingan 1 Header" />
                        </div>
                    </div>

                    <div className="text-3xl font-bold text-black text-center pb-14">
                    Pantangan Makanan untuk Mereka yang Sering Depresi: Menuju Kesehatan Mental Lebih Baik
                    </div>

                    <div className="mood-boosting-foods">
                    <div class="w-full">
    <div class="max-w- mx-auto px-4">
        <h1 class="text-3xl font-bold text-center mb-6"></h1>
        <div class="text-justify max bg-white p-8 rounded-lg shadow-lg space-y-6">
            <p class="mb-4">
                Kesehatan mental adalah aspek penting dalam kehidupan kita yang sering kali terabaikan. Depresi adalah salah satu masalah kesehatan mental yang umum dan dapat mempengaruhi berbagai aspek kehidupan sehari-hari. Selain terapi dan dukungan sosial, diet juga memainkan peran penting dalam manajemen depresi. Beberapa jenis makanan dapat memperburuk gejala depresi atau menghambat upaya pemulihan, sementara yang lain dapat membantu memperbaiki keseimbangan kimia otak dan mood.
            </p>
            <h2 class="text-2xl font-bold text-left mb-4">Makanan yang Harus Dihindari:</h2>
            <ol class="list-decimal ml-6 mb-6">
                <li>Gula Berlebihan: Konsumsi gula yang tinggi dapat menyebabkan lonjakan dan penurunan kadar gula darah yang drastis, mempengaruhi mood secara negatif.</li>
                <li>Makanan Cepat Saji: Kandungan lemak jenuh dan kalori tinggi dalam makanan cepat saji dapat mempengaruhi keseimbangan kimia otak dan menyebabkan perasaan lelah dan lesu.</li>
                <li>Alkohol: Alkohol dapat memperburuk gejala depresi dan mengganggu pola tidur yang sehat.</li>
                <li>Kafein: Minuman yang mengandung kafein seperti kopi dan minuman berenergi dapat mempengaruhi tidur dan meningkatkan kecemasan.</li>
                <li>Makanan Tinggi Lemak Trans: Lemak trans dapat meningkatkan peradangan dalam tubuh, yang dapat mempengaruhi keseimbangan kimia otak.</li>
            </ol>
            <h2 class="text-2xl font-bold text-left mb-4">Makanan yang Dianjurkan untuk Kesehatan Mental yang Lebih Baik:</h2>
            <ul class="list-disc ml-6 mb-6">
                <li>Sayuran Hijau dan Buah-buahan: Kaya akan antioksidan dan nutrisi, seperti vitamin C dan beta-karoten, yang dapat membantu mengurangi peradangan dan meningkatkan mood.</li>
                <li>Makanan Kaya Omega-3: Salmon, sarden, dan biji-bijian seperti chia dan kenari mengandung asam lemak omega-3, yang telah terbukti mengurangi gejala depresi.</li>
                <li>Serat: Makanan tinggi serat seperti gandum utuh, kacang-kacangan, dan biji-bijian membantu menjaga stabilitas gula darah dan mood.</li>
                <li>Protein Seimbang: Protein dari sumber seperti daging tanpa lemak, telur, dan produk susu rendah lemak dapat membantu menjaga stabilitas energi dan mood.</li>
                <li>Kacang-kacangan dan Biji-bijian: Kaya akan magnesium, yang dapat membantu mengatur mood dan mengurangi gejala kecemasan.</li>
            </ul>
            <p class="mb-6">
                Selain memperhatikan makanan yang dikonsumsi, penting untuk menjaga pola makan yang seimbang dan teratur. Hindari makan berlebihan atau tidak teratur, karena hal ini dapat mempengaruhi energi dan mood secara keseluruhan. Mengatur pola makan dengan bijak dapat membantu dalam manajemen gejala depresi dan meningkatkan kesehatan mental secara keseluruhan.
            </p>
            <h2 class="text-2xl font-bold text-left mb-4">Kesimpulan:</h2>
            <p>
                Memilih makanan dengan bijak bukan hanya berdampak pada kesehatan fisik kita, tetapi juga kesehatan mental. Dengan menghindari makanan yang tidak sehat dan mengintegrasikan makanan yang bermanfaat, kita dapat mendukung proses pemulihan dari depresi dan mencapai kesehatan mental yang lebih baik secara keseluruhan. Jadi, mulailah dari sekarang dengan mengatur pola makan Anda untuk mendukung kesehatan mental yang optimal.
            </p>
        </div>
    </div>
</div>





    </div>


                    {/* Tombol simpan, like */}
                    <div className="flex justify-center items-center mb-8 pt-28">
                        <div className="flex items-center">
                            <button
                                onClick={handleSave}
                                className={`flex items-center mr-4 text-gray-500`}
                            >
                                {/* SVG Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                    <g clipPath="url(#clip0_1847_3878)">
                                        <path d="M14.4001 0H3.9563C3.10573 0 2.35889 0.699729 2.35889 1.52798V16.9775C2.35889 17.2548 2.43605 17.4858 2.56041 17.6644C2.70913 17.8778 2.9486 18.0001 3.20539 18C3.44816 18 3.70665 17.8919 3.94535 17.688L8.61791 13.7208C8.76222 13.5976 8.96951 13.5269 9.18504 13.5269C9.40049 13.5269 9.60736 13.5976 9.75209 13.7212L14.409 17.6874C14.6486 17.8919 14.8892 18.0001 15.1316 18.0001C15.5414 18.0001 15.9409 17.684 15.9409 16.9776V1.52798C15.9409 0.699729 15.2507 0 14.4001 0Z" fill="#696A6F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1847_3878">
                                            <rect width="18" height="18" fill="white" transform="translate(0.149902)"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                                {/* Text */}
                                <span className="ml-2 pr-12">{isSaved ? 'Disimpan' : 'Simpan'}</span>
                            </button>
                            <button
                                onClick={handleLike}
                                className="flex items-center mr-4"
                                style={{ color: isLiked ? '#3182CE' : '#696A6F' }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                    <g clip-path="url(#clip0_1847_251)">
                                        <path d="M5.12152 7.375H2.548C2.31294 7.37558 2.0877 7.46938 1.92171 7.63583C1.75572 7.80228 1.66253 8.02777 1.6626 8.26284V16.6255C1.66253 16.8606 1.75572 17.0861 1.92171 17.2525C2.0877 17.419 2.31294 17.5128 2.548 17.5134H5.12152C5.35683 17.5129 5.58235 17.4192 5.74874 17.2528C5.91514 17.0864 6.00884 16.8609 6.00935 16.6255V8.26284C6.00884 8.02753 5.91514 7.802 5.74874 7.63561C5.58235 7.46922 5.35683 7.37551 5.12152 7.375Z" fill="#696A6F"/>
                                        <path d="M17.6558 10.2865C17.6558 9.88521 17.4966 9.50032 17.2131 9.21623C17.189 9.19004 17.163 9.16565 17.1353 9.14326C17.4492 9.01024 17.7075 8.77288 17.8665 8.47133C18.0256 8.16978 18.0756 7.82255 18.008 7.48839C17.9405 7.15423 17.7596 6.85364 17.496 6.63749C17.2324 6.42134 16.9022 6.30289 16.5613 6.30218H11.2829C11.3121 6.2511 11.3388 6.20488 11.3631 6.15867C11.515 5.91346 11.636 5.65037 11.7231 5.37542C11.8395 4.99428 11.9105 4.60076 11.9348 4.20299C11.9685 3.62831 11.8868 3.05269 11.6947 2.51004C11.5025 1.96739 11.2037 1.46867 10.8159 1.04326C10.6697 0.877291 10.4917 0.742438 10.2924 0.646738C10.093 0.551039 9.87646 0.496453 9.65558 0.486234C9.35384 0.474649 9.05887 0.577484 8.82973 0.774145C8.6006 0.970805 8.45421 1.24677 8.4199 1.54677C8.41789 1.55801 8.41707 1.56942 8.41747 1.58083V3.71164L7.00666 7.28731C6.89113 7.57811 6.71729 7.84218 6.49585 8.06326V16.3043C6.8441 16.4003 7.19841 16.4726 7.55639 16.5208C7.68943 16.5386 7.82351 16.5476 7.95774 16.5476H15.1115C15.4651 16.5471 15.8042 16.4073 16.0553 16.1584C16.1789 16.0348 16.2769 15.888 16.3437 15.7265C16.4104 15.565 16.4447 15.3918 16.4445 15.217C16.4453 14.8945 16.3276 14.5828 16.1137 14.3414C16.3954 14.2821 16.6547 14.1445 16.8617 13.9444C17.0687 13.7442 17.2149 13.4897 17.2835 13.2101C17.3522 12.9305 17.3404 12.6371 17.2496 12.3639C17.1589 12.0907 16.9928 11.8486 16.7704 11.6657C17.0344 11.5445 17.2582 11.3502 17.4151 11.1058C17.572 10.8613 17.6556 10.577 17.6558 10.2865Z" fill="#696A6F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1847_251">
                                            <rect width="18" height="18" fill="white" transform="translate(0.850098)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className="ml-2">{isLiked ? 'Liked' : 'Like'}</span>
                            </button>

                            <span className="text-gray-500">{likeCount}</span>
                        </div>
                    </div>

                    {/* Bagian untuk menampilkan komentar */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Komentar</h2>
                        {/* Daftar komentar */}
                        {comments.length === 0 ? (
                            <p className="text-gray-600">Belum ada komentar.</p>
                        ) : (
                            comments.map((comment) => (
                                <div key={comment.id} className="bg-gray-100 rounded-lg p-4 mb-2">
                                    <p className="text-sm">{comment.text}</p>
                                    <p className="text-xs text-gray-500">{comment.date}</p>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Form untuk menulis komentar */}
                    <div className="mb-6">
                        <textarea
                            className="w-full border rounded-lg p-2"
                            rows="3"
                            placeholder="Tulis komentar..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end mt-2">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
                                onClick={handlePostComment}
                            >
                                Post
                            </button>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Postingan1;
