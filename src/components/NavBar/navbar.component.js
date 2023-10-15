import React from "react";
import { BiMenu } from "react-icons/bi";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
//import { HiEnvelope } from "react-icons/hi";

const NavSm = () => {
    return (
        <>
            <header className="bg-white fixed top-0 w-full py-3">
               <div className="flex justify-center">
                    <div className=" w-40 h-24 ">
                        <img src="data:image/png;base64,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" 
                        alt="logo" 
                        className="w-full h-full" />
                    </div>
                    <div className="w-9 h-9 ml-12 mt-6">
                        <BiMenu className="w-full h-full"/>
                    </div>
               </div>
            </header>
        </>
    )
};

const NavMd = () => {
    return (
        <>
            <header className=" w-full">
                <div className="flex justify-center ">
                    <div className="w-64 h-40 mt-16">
                        <img 
                        src="data:image/png;base64,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" 
                        alt="logo" 
                        className="w-full h-full" 
                        />
                    </div>
                    <div className="flex justify-center gap-2">
                        <BsFillTelephoneFill className="w-full h-full" />
                        <BsInstagram className="w-full h-full"/>
                    </div>
                </div>
                <div className="flex justify-center gap-3 text-sm mt-4">
                    <h5>ABOUT US</h5>
                    <h5>OUR MENU</h5>
                    <h5>IN THE PRESS</h5>
                    <h5>CONTACT</h5>
            </div>
            </header>
        </>
    );
};
const NavLg = () => {};

const NavBar = () => {
    return (
        <>
            <nav>
                <div className="md:hidden">
                    <NavSm />
                </div>
                <div className="hidden md:block lg:hidden">
                    <NavMd />
                </div>
                <div className="hidden lg:block md:hidden">
                    <NavMd />
                </div>
            </nav>
        </>
    )
};

export default NavBar;