"use client"
import Image from "next/image";
import logo from "@/public/logo/logo.png";
import Link from "next/link";
import { useState } from "react";
import Marquee from "react-fast-marquee"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import whatsapp from "@/public/icon/whatsapp.png"

import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
export default function Navbar() {
    const [isVisible, setisVisible] = useState(false);
    const cut = () => {
        setisVisible(!isVisible)
    }
    const dot = () => {
        setisVisible(!isVisible)
    }
    return (<>
        <nav className="sticky top-0 object-cover   bg-white z-50 ">
            <div className="flex px-6  items-center h-12 pt-4">
                <div className="flex items-center">
                    <Image src={logo} height={120} width={120} alt="Logo" />
                </div>
                <div className="justify-end mr-2 flex items-center w-[100%]">
                    <ul className="hidden md:flex  font-bold items-center text-black">
                        <Link href="/home">
                            <li className="text-[#287c2c] px-5">Home</li>
                        </Link>
                        <Link href="#Opportunity">
                            <li className="text-[#287c2c] px-5">About Us</li>
                        </Link>
                        <Link href="/franchise">
                            <li className="text-[#287c2c] px-5">Franchise Models</li>
                        </Link>
                        <Link href="/contactus">
                            <li className="text-[#287c2c] px-5">Contact Us</li>
                        </Link>
                    </ul>
                    <Link href="/apply">
                        <button className="bg-[#287c2c] rounded-full sm:px-3 px-2 mx-2 sm:text-lg text-sm text-white sm:h-9 h-7">
                            Apply Now
                        </button>
                    </Link>
                </div>


                <div className="md:hidden flex items-center">
                    {isVisible ? (
                        <FontAwesomeIcon icon={faXmark} className="text-green-600 mr-4" onClick={dot} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} className="text-green-600 mr-4" onClick={dot} />
                    )}
                </div>
                <div
                    className={` bg-slate-950 absolute top-20 left-0 w-full transition-all duration-500 ease-in-out ${isVisible ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        } z-10 overflow-hidden`}
                >
                    <ul className="text-lg w-full p-4 flex flex-col items-start">
                        <Link href="/#">
                            <li className="text-white font-bold p-3">Home</li>
                        </Link>
                        <Link href="#Opportunity">
                            <li className="text-white font-bold p-3">About Us</li>
                        </Link>
                        <Link href="/franchise">
                            <li className="text-white font-bold p-3">Franchise Models</li>
                        </Link>
                        <Link href="/contactus">
                            <li className="text-white font-bold p-3">Contact Us</li>
                        </Link>

                    </ul>
                </div>
            </div>
            <div>
                <div className="flex px-6 flex-col md:flex-row shadow-md shadow-lime-800 border-green-700 mt-4 border-t p-2 items-center">
                    <Marquee className="">
                    <h3 className="text-sm md:text-2xl font-bold text-green-800">
                            Up to 30% Off 
                        </h3>
                        <h3 className="text-sm md:text-2xl mx-2 text-black">
                              on every Medicine. Get First 20 No Cost Exclusive Franchises
                        </h3>
                       
                    </Marquee>
                    <Link href="/#">
                    <div className="flex items-center mt-2 mr-10 md:mt-0 md:ml-4">
                        <Image src={whatsapp} className="w-5 md:w-7" alt="whatsapp" />
                        <h3 className="text-base md:text-xl ml-2">8235989891</h3>
                    </div>
                    </Link>
                </div>
            </div>
        </nav>


    </>);
}