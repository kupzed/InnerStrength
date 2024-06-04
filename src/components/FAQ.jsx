import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="pt-40 pb-10 text-center"><h3>FAQ</h3>
    <br></br><h1 className="font-bold text-center">Pertanyaan Umum</h1>
    <div className="flex justify-center pt-6">
    <div className="px-24 p-4 pt-16 w-full h-full bg-[#F3F3F3] rounded-lg">
      <Accordion
        title="Apa itu InnerStrength?"
        answer="Innerstrength didirikan pada tahun 2024 merupakan perusahaan 
        kesehatan mental yang berkomitmen untuk membantu individu dan komunitas 
        mencapai kesejahteraan mental yang optimal. Kami percaya bahwa setiap 
        orang memiliki kekuatan batin untuk mengatasi tantangan hidup dan menjalani 
        kehidupan yang lebih bahagia dan lebih memuaskan.
        "
      />
      <Accordion
        title="Siapa yang akan menolong saya?"
        answer="Setelah Anda mendaftar, kami akan mencocokkan Anda dengan terapis 
        yang tersedia dan sesuai dengan tujuan, preferensi, dan jenis masalah yang 
        Anda hadapi. Terapis yang berbeda memiliki pendekatan dan bidang fokus yang 
        berbeda, jadi penting untuk menemukan orang yang tepat yang dapat memberikan
        hasil terbaik untuk Anda. Kami telah menemukan bahwa kami mampu memberikan 
        kecocokan yang sukses di sebagian besar waktu; namun, jika Anda memulai 
        prosesnya dan merasa terapis Anda tidak cocok untuk Anda, Anda dapat memilih 
        untuk dipasangkan dengan terapis lain.
        "
      />
      <Accordion 
      title="Bagaimana saya akan menghubungi terapis?" 
      answer="Anda bisa mendapatkan terapi dengan empat cara:
              Bertukar pesan dengan terapis Anda
              Mengobrol langsung dengan terapis Anda
              Berbicara melalui telepon dengan terapis Anda
              Konferensi video dengan terapis Anda
              Anda dapat menggunakan cara berbeda pada waktu berbeda sesuai keinginan, 
              berdasarkan kebutuhan, ketersediaan, dan kenyamanan Anda." 
      />
      <Accordion 
      title="Siapa yang akan menjadi terapis" 
      answer="Kami mewajibkan setiap terapis yang menyediakan Layanan Terapis 
              di Platform haruslah seorang konselor, psikolog, pekerja sosial, 
              atau terapis yang terdaftar, terlatih, dan berpengalaman. 
              Terapis harus memiliki gelar akademis yang relevan di bidangnya, 
              pengalaman minimal 3 tahun, dan harus memenuhi syarat dan dipercaya 
              oleh organisasi profesi masing-masing setelah berhasil menyelesaikan 
              persyaratan pendidikan, ujian, pelatihan, dan praktik yang diperlukan 
              sebagaimana berlaku. Untuk menghindari keraguan, terapis dirujuk di 
              situs ini dan aplikasi/situs terkait berdasarkan jabatan dan kredensial AS,
               Inggris, atau Australia, mana saja yang berlaku."
      />
      <Accordion 
      title="Bolehkan aku tetap anonim" 
      answer="Saat Anda mendaftar, kami tidak menanyakan nama lengkap atau informasi kontak Anda, 
      melainkan 'nama panggilan' yang Anda buat yang akan digunakan untuk mengidentifikasi Anda di sistem. 
      Saat Anda memutuskan untuk memulai proses terapi, kami akan menanyakan informasi kontak Anda untuk 
      situasi darurat, seperti apakah terapis Anda yakin bahwa Anda atau orang lain mungkin dalam bahaya. 
      Terapis Anda juga dapat meminta informasi tambahan tentang Anda bila hal itu diwajibkan oleh pedoman 
      dewan perizinan mereka. Semua data ini dilindungi oleh persyaratan kerahasiaan dewan terapis dan lisensi, serupa dengan terapi di kantor."
      />
      </div>
      </div>
    </div>
  );
};

export default FAQ;