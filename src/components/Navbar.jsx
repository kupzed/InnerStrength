import React, { useEffect, useState } from "react";
import { navLink } from "../../data/dummy";
import logo from "../assets/logo.png";
import { Link as Scroll } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        const handlerScroll = () => {
            if(window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        window.addEventListener("scroll", handlerScroll);
        return ()=> {
            window.removeEventListener("scroll", handlerScroll );
        };
    }, []);
    return (
        <div className={`${
            isScroll ? "bg-blue-500 h-[60px] lg:-top-[60px]" : " h-[80px]"
        } lg:px-[72px] px-5 w-full  z-[10] fixed  transition-all duration-300 ease-in-out  flex justify-between items-center`}
        >
            <div>
                <img src={logo} alt="" className="w-full h-full object-contain"/>
            </div>
            <NavLink
            to="/Pageone"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
            >
            Tentang Kami
        </NavLink>
        <ul className="hidden md:flex">
            <li className="flex gap-5">
            {navLink.map((item)=>{
            return (
            <Scroll 
                to={item.id} 
                key={item.id} 
                className="hover:text-blue-700 text-sm md:text-md cursor-pointer"
                >
                {item.name}
            </Scroll>
            );
            })}
            </li>
        </ul>
        <div className="flex items-center">
        <Link to="/Login" className="px-8 lg:px-6 bg-blue-700 outline-none hover:bg-blue-500 text-white rounded">
            Sign Up
            </Link>
            <AiOutlineMenu 
            className="text-2xl block md:hidden" 
            onClick={() => setNav((prev) => !prev)}
            />
        </div>
        <div 
        className={`${
            nav ? "right-0" : "-right-[100%]"
            } flex flex-col gap-4 pt-5 px-5 md:hidden absolute top-0 w-full h-screen bg-white`}
            >
        <AiOutlineClose 
            className="cursor-pointer text-2xl"
            onClick={() => setNav((prev) => !prev)}
            />
        <ul className="">
            <li className="flex gap-y-14 flex-col gap-5">
            {navLink.map((item)=>{
            return (
            <Link 
                to={item.id} 
                key={item.id} 
                className="hover:text-blue-500 text-sm md:text-md border-b cursor-pointer py-2">
                {item.name}
            </Link>
            );
            })}
            </li>
        </ul>
        </div>
        </div>
    )
}

export default Navbar