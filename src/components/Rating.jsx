import React from "react";
import rating from "../assets/rating.png";
const Rating = () => {
    return (
        <div className="justify-center pt-40 font-bold text-3xl px-14 flex" >
            <h1>Membantu Anda menemukan
            <br></br><span className="text-[#1572A1]">keseimbangan dan kesejahteraan</span> 
            <br></br><span className=" text-[#1572A1]">mental</span> yang lebih baik.</h1>
            <img src={rating} alt="" className="flex-col justify-center gap-y-5 ps-44"/>
        </div>
    );
};

export default Rating;