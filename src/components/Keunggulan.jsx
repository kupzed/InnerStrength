import React from "react";
import satu from "../assets/satu.png";
import dua from "../assets/dua.png";
import tiga from "../assets/tiga.png";

const Keunggulan = () => {
  return (
    <div className="pt-40">
      <h3 className="font-bold text-center">Keunggulan</h3>
      <br></br>
      <h1 className="font-bold text-3xl text-center">Kenapa Memilih Kami?</h1>
      <div className="flex justify-center px-8 pt-6 ps-18 gap-3">
        <div className="w-80 rounded-xl shadow-xl flex-col items-center flex text-center gap-2 py-10">
          <img
            src={satu}
            alt=""
            className="pt-6 px-14 flex-direction justify-center"
          />
          <h3 className="font-bold">Terapis Profesional</h3>
          <br></br>
          <p>Terapis dengan pengalaman dan lisensi yang pasti</p>
        </div>
        <div className="w-80 rounded-xl shadow-xl flex-col items-center flex text-center gap-2 py-10">
          <img src={dua} alt="" className="pt-6 px-14 flex-direction " />
          <h3 className="font-bold">Dukungan Komprehensif</h3>
          <br></br>
          <p>Dukungan penuh untuk anda sampai pulih</p>
        </div>
        <div className="w-80 rounded-xl shadow-xl flex-col items-center flex text-center gap-2 py-10">
          <img src={tiga} alt="" className="pt-6 px-14 flex-direction " />
          <h3 className="font-bold">Layanan 24/7</h3>
          <br></br>
          <p>Menangani anda kapanpun dan dimanapun</p>
        </div>
      </div>
    </div>
  );
};

export default Keunggulan;