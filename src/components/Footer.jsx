import React from "react";
import logofooter from "../assets/logofooter.png";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
    return <footer>
        <div className="p-12 bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    <div className="mb-5">
                        <img src={logofooter} alt="" />
                        <p className="pt-4">Copyright © Innerstrength 2024 All rights reserved</p>
                    </div>
                    <div className="mb-5">
                    </div>
                    <div className="mb-5">
                        <h4 className="pb-4 font-bold">Menu</h4>
                        <ul>
                            <li>Home</li>
                            <li>Tentang Kami</li>
                            <li>Konsultasi</li>
                            <li>Komunitas</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="pb-4 font-bold">Contact Info</h4>
                        <ul className="text">
                            <li>+123 456 789</li>
                            <li>innerstrength@gmail.com</li>
                            <li>Indonesia</li>
                        </ul>
                    </div>
                    <div className="mb-5 max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
                        <h4 className="pb-4 font-bold flex flex-row flex-wrap">Follow us on</h4>
                        <div>
                            <a href="">
                                <FaSquareFacebook/>
                            </a>
                            <a href="">
                                <FaInstagram/>
                            </a>
                            <a href="">
                                <FaTwitter/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
};

export default Footer;