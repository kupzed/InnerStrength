import React from "react";

const Home = () => {
    return <div id="home" className="w-full px-5 lg:px-[72px]">
        <div className="pt-24 max-w-[700px] flex flex-col justify-center gap-y-5">
            <h1 className="pt-8 font-bold text-4xl text-gray-600 gap-y-3">Temukan Kesehatan Mental
            <br/>yang Lebih Baik Bersama 
            <br/><span className="text-blue-700">Inner</span>strength.</h1>
            <p className=" pt-8">InnerStrength hadir untuk membantu Anda mencapainya, 
            hidup yang lebih bahagia, penuh makna, dan bebas dari stres
            Kami menawarkan berbagai program dan layanan yang dirancang 
            untuk memperkuat mental dan spiritual Anda, sehingga Anda dapat 
            menjalani hidup dengan penuh keyakinan dan kebahagiaan.</p>
            <div>
                <button className="px-6 lg:px-8 py-2 bg-blue-700 hover:bg-blue-500 text-white outline-none rounded">Mulai Berlangganan</button>
            </div>
        </div>
    </div>;
};

export default Home;
