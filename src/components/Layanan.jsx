import React from "react";
import anxiety from "../assets/anxiety.png";
import bipolar from "../assets/bipolar.png";
import depression from "../assets/depression.png";
const Layanan = () => {
    return (
        <div className="pt-40">
        <h3 className="font-bold text-center">Layanan</h3>
        <br></br><h1 className="font-bold text-3xl text-center">Layanan Masalah Kesehatan Mental yang Kami Sediakan</h1>
        <div className="flex justify-center px-8 pt-6">
        <div>
            <img src={anxiety} alt="" className="pt-6 px-14 flex-direction justify-center shadow hover:shadow-lg" />
        </div>
        <div>
            <img src={bipolar} alt="" className="pt-6 px-14 flex-direction shadow hover:shadow-lg"/>
        </div>
        <div>
            <img src={depression} alt="" className="pt-6 px-14 flex-direction shadow hover:shadow-lg"/>
        </div>
    </div>
    </div>
);
};

export default Layanan;