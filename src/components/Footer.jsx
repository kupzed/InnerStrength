import React from "react";
import logofooter from "../assets/logofooter.png";
import Sosialicon from "../assets/Social icon.png";

const Footer = () => {
    return <footer>
        <div className="p-12 bg-[#1572A1] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    <div className="mb-5">
                        <img src={logofooter} alt="" />
                        <p className="pt-4">Copyright © Innerstrength 2024 All rights reserved</p>
                    </div>
                    <div className="mb-5">
                    </div>
                    <div className="mb-5 ps-8">
                        <h4 className="pb-4 font-bold">Menu</h4>
                        <ul>
                            <li>Home</li>
                            <li>Tentang Kami</li>
                            <li>Konsultasi</li>
                            <li>Komunitas</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <div>
                        <h4 className="pb-4 font-bold">Contact Info</h4>
                        <ul>
                            <li>+123 456 789</li>
                            <li>innerstrength@gmail.com</li>
                            <li>Indonesia</li>
                        </ul>
                        </div>
                        <div>
                        <h4 className="pb-4 font-bold">Follow us on</h4>
                        <div className="flex flex-col">
                            <img src={Sosialicon} alt=""/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
};

export default Footer;