import React from "react";
import { BiSearchAlt, BiMenu } from "react-icons/bi";

const NavSm = () => {
    return (
        <>
           <div className="my-3 mx-3">
                <div className="w-60 h-30">
                    <img src="https://nairobicentralsda.or.ke/wp-content/uploads/2023/05/Nairobi-Central-Logo-Website-Blue-1.png"
                    alt="logo" 
                    className="w-full h-full"/>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex">
                        <BiSearchAlt />
                        <h4 className="text-sm text-gray-400">SEARCH</h4>
                    </div>
                    <div className="flex">
                        <BiMenu />
                        <h4 className="text-sm text-gray-400">MENU</h4>
                    </div>
                </div>
           </div>
        </>
    )
};
const NavMd = () => {};
const NavLg = () => {};

const NavBar = () => {
    return (
        <>
            <nav>
                <div className="md:hidden">
                    <NavSm />
                </div>
                <div className="hidden md:block lg:hidden">

                </div>
                <div className="hidden lg:block md:hidden">

                </div>
            </nav>
        </>
    )
};

export default NavBar;