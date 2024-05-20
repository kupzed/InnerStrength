import React from "react";
import homeone from "../assets/homeone.png";

const Step = () => {
    return <div className="pt-40 lg:px-[72px]">
        <div className="flex">
            <img src={homeone} alt="" className="flex-col " />
            <div className="max-w-[600px] flex flex-col justify-center gap-y-5">
                <h1 className="font-bold float-left text-4xl text-gray-600 ps-8 gap-y-3">Terapis Profesional dan
                <br/>Bersertifikat yang dapat Anda 
                <br/>Percayai</h1>
                <p className="pt-4 ps-8">Di InnerStrength, kami memahami bahwa menemukan terapis yang tepat
                dapat menjadi proses yang rumit dan membingungkan. Anda ingin memastikan bahwa Anda 
                menemukan seseorang yang memiliki kualifikasi, berpengalaman, dan mampu memberikan dukungan
                yang Anda butuhkan.</p>
            <div className="ps-8">
                <button className="px-6 py-2 bg-blue-700 hover:bg-blue-500 text-white outline-none rounded">Temukan Terapis
            </button>
            </div>
            </div>
        </div>
    </div>;
};

export default Step;