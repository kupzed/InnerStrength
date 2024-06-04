import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return <div id="home" className="w-full px-5 lg:px-[72px] mt-10">
        <div className="pt-24 max-w-[700px] flex flex-col justify-center gap-y-5">
            <h1 className="font-bold text-5xl leading-normal text-gray-500 text-[40px] gap-y-6">Temukan Kesehatan Mental
            <br/>yang Lebih Baik Bersama 
            <br/><span className="text-[#1572A1]">Innerstrength.</span></h1>
            <p className="pt-4 pb-8">InnerStrength hadir untuk membantu Anda mencapainya, 
            hidup yang lebih bahagia, penuh makna, dan bebas dari stres
            Kami menawarkan berbagai program dan layanan yang dirancang 
            untuk memperkuat mental dan spiritual Anda, sehingga Anda dapat 
            menjalani hidup dengan penuh keyakinan dan kebahagiaan.</p>
            <div className="mb-20">
                <Link to="/Login" className="px-6 lg:px-8 py-2 bg-[#1572A1] hover:bg-blue-500 text-white outline-none rounded">Mulai Berlangganan</Link>
            </div>
        </div>
    </div>;
};

export default Home;
