import React, { useState } from 'react';
import HeaderLogin from '../components/HeaderLogin';
import Footer from '../components/Footer';
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

const Postingan1 = () => {
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [newPost, setNewPost] = useState('');

    // Fungsi untuk menangani pengiriman postingan baru
    const handlePost = () => {
        if (title.trim() !== '' && newPost.trim() !== '') {
            // Kirim postingan baru ke server atau proses penyimpanan
            console.log('Judul:', title);
            console.log('Posting:', newPost);
            console.log('Tags:', tags);

            // Setelah diposting, kosongkan form
            setTitle('');
            setTags('');
            setNewPost('');
        } else {
            alert('Mohon lengkapi judul dan isi postingan');
        }
    };

    // Fungsi untuk menangani upload foto
    const handleUploadPhoto = (e) => {
        const file = e.target.files[0];
        // Lakukan sesuatu dengan file yang diunggah
        console.log('File yang diunggah:', file);
    };

    return (
        <div className="overflow-hidden">
            <HeaderLogin />
            <div className="pt-28 px-52 w-auto pr-7">
                <a href="javascript:history.back()" className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M29.3337 14.6671H5.8857L12.943 7.60977C13.0704 7.48677 13.172 7.33964 13.2418 7.17697C13.3117 7.0143 13.3485 6.83934 13.35 6.6623C13.3516 6.48526 13.3178 6.30969 13.2508 6.14583C13.1838 5.98197 13.0848 5.8331 12.9596 5.70791C12.8344 5.58272 12.6855 5.48371 12.5216 5.41667C12.3578 5.34963 12.1822 5.31589 12.0052 5.31743C11.8281 5.31897 11.6532 5.35575 11.4905 5.42563C11.3278 5.49551 11.1807 5.59709 11.0577 5.72443L1.72437 15.0578C1.4744 15.3078 1.33398 15.6469 1.33398 16.0004C1.33398 16.354 1.4744 16.6931 1.72437 16.9431L11.0577 26.2764C11.3092 26.5193 11.646 26.6537 11.9956 26.6507C12.3452 26.6476 12.6796 26.5074 12.9268 26.2602C13.174 26.013 13.3142 25.6786 13.3173 25.329C13.3203 24.9794 13.1859 24.6426 12.943 24.3911L5.8857 17.3338H29.3337C29.6873 17.3338 30.0265 17.1933 30.2765 16.9432C30.5266 16.6932 30.667 16.3541 30.667 16.0004C30.667 15.6468 30.5266 15.3077 30.2765 15.0576C30.0265 14.8076 29.6873 14.6671 29.3337 14.6671Z" fill="black"/>
                    </svg>
                </a>
            </div>
            <section id="Bipolar" className="pt-14 px-6 md:px-12 lg:px-20 xl:px-48 pb-28">
           
                <div className="container mx-auto bg-[#F3F3F3]  rounded-3xl px-24 py-14">
                <div className="text-3xl font-bold text-[#1572A1] text-start mb-4 pl-12">
                        Buat Postingan
                    </div>

                    <div className="mx-auto">
                        <textarea
                            className="w-full border rounded-lg p-2 h-12 resize-none mb-2"
                            placeholder="Judul"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        ></textarea>
                        <textarea
                            className="w-full border rounded-lg p-2 h-96 resize-none mb-2"
                            placeholder="Tulis postingan..."
                            value={newPost}
                            onChange={(e) => setNewPost(e.target.value)}
                        ></textarea>
                        <textarea
                            className="w-full border rounded-lg p-2 h-12 resize-none"
                            placeholder="Tags (pisahkan dengan koma)"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="flex justify-start pt-1
                     mb-4">
                        <label className="bg-[#1572A1] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
                            Upload Foto
                            <input
                                type="file"
                                className="hidden"
                                onChange={handleUploadPhoto}
                            />
                        </label>
                    </div>

                    <div className="flex justify-start pt-2">
                        <button
                            className="bg-[#1572A1] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none mr-4"
                            onClick={handlePost}
                        >
                            Post
                        </button>
                    </div>

                    <div className="text-3xl font-bold text-[#1572A1] text-start mb-4 pt-14 pl-12">
                        Postingan Tersimpan
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
    );
};

export default Postingan1;
