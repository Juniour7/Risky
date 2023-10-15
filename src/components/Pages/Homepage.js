import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

//Components
import NavBar from "../NavBar/navbar.component";

const HomePage = () => {
    return (
        <>
            <NavBar />
            <div>
                <div className="h-96 w-full px-2">
                    <img 
                    src="https://images.squarespace-cdn.com/content/v1/5a127d79017db2e2b0be7947/1512578370066-UXGQF7UA8VGJ69073750/tin+roof+salad.jpg?format=2500w"
                    alt="Hero Image"
                    className="w-full h-full"
                    />
                </div>
                <div className="mt-24 mx-auto w-40 h-40">
                    <img
                    src="https://images.squarespace-cdn.com/content/v1/5a127d79017db2e2b0be7947/1512473111400-692FCGWYXP8CVJAFYFH1/tin+roof+cafe+leaves.png?format=1500w"
                    alt="adv img"
                    className="w-full h-full"
                    />
                </div>
                <div className=" mt-11 mx-4 text-center md:mx-5 my-4 ">
                    <h1 className="text-xl font-bold mb-3">WELCOME TO TIN ROOF CAFES</h1>
                    <h3 className="text-sm">FRESH FOOD IN FRESH AIR</h3>
                    <p className="text-md text-center">Our boutique, outdoor cafés offer a healthy range of salads, sandwiches and smoothies. We like life away from malls because we prefer quiet, green spaces.</p>
                    <h3 className="mt-3">This is <u>#LIFEOUTSIDETHEMALL</u></h3>
                </div>
                <div className="mx-auto mt-7 w-48 h-32">
                    <img
                    src="https://images.squarespace-cdn.com/content/v1/5a127d79017db2e2b0be7947/1512496250464-XSLPUB6JUM8SWPSEWTG6/tripadvisor-logo-png-e1469626631904.png?format=1500w"
                    alt=""
                    className="w-full h-full"
                    />
                </div>
                <div className="flex justify-center mt-4 mb-8 gap-4">
                    <FaFacebookF />
                    <BsInstagram />
                </div>
               <div className="mt-24 md:flex md:justify-center gap-4">
                    <div className="mt-8 text-left px-5">
                        <div className="">
                            <img
                            src="https://images.squarespace-cdn.com/content/v1/5a127d79017db2e2b0be7947/c8a5025c-2f4b-44e5-8955-99d5aadf2de5/James+Patrick+%EF%BF%BD+20211013+%EF%BF%BD+Tin+Roof+%EF%BF%BD+5319.jpg?format=1500w"
                            alt=""
                            />
                        </div>
                        <h1 className="text-xlg mt-3 font-bold">TIN ROOF CAFE KAREN</h1>
                        <p className="text-gray-500 mt-3 leading-7">An oasis of lush surroundings in the centre of Karen's hub, escape to our gardens and relax under our care while we serve you delicious and healthy treats. With locally roasted coffee, the freshest of ingredients and smiles all round, this is the perfect spot to unwind in Nairobi's busiest suburb.</p>
                        <button className="mt-4 px-4 py-2 border-solid border-2 border-black hover:bg-black hover:text-white">VISIT US IN KAREN</button>
                    </div>
                    <div className="mt-8 px-5 text-left">
                        <div className="">
                            <img
                            src="https://images.squarespace-cdn.com/content/v1/5a127d79017db2e2b0be7947/1512474742570-SGYXH2Y1Q8Z3460O4KNV/Tin+Roof+Cafe+Langata.jpg?format=1500w"
                            alt=""
                            />
                        </div>
                        <h1 className="text-xlg mt-3 font-bold">TIN ROOF LANGATA</h1>
                        <p className="text-gray-500 mt-3 leading-7">Located in the heart of Langata at the Langata Link shops, meet up with friends and family on our outdoor terrace and enjoy a laid-back meal crafted with fresh produce and a passion for food. With a kids' playground, charming setting and team of friendly staff, this is a popular choice for all.</p>
                        <button className="mt-4 px-4 py-2 border-solid border-2 border-black hover:bg-black hover:text-white">VISIT US IN LANGATA</button>
                    </div>
                </div>
                <div className="mx-3 mt-4 w-full">
                        <img
                        src="https://images.squarespace-cdn.com/content/v1/5a127d79017db2e2b0be7947/1512482790511-CXH2C260I7KMH8VHNF1R/IMG_9468.JPG?format=1500w"
                        alt=""
                        className="w-full h-full"
                        />
                    </div>
                    <div className="mt-24 mx-auto w-64 h-40">
                        <img
                        src="https://images.squarespace-cdn.com/content/v1/5a127d79017db2e2b0be7947/1512485821411-XUC93GQESV94XFUHMIMY/leaves+for+tin+roof+2.png?format=1500w"
                        alt=""
                        className="w-full h-full"
                        />
                    </div>
                    <div className="text-center py-4 mx-auto">
                        <h1 className="text-center mt-6 text-lg font-bold">THE TIN ROOF CAFE EXPERIENCE</h1>
                        <p className="text-gray-500 leading-7">Join our food revolution that offers you a peaceful, outdoor space to eat deliciously healthy meals and snacks.</p>
                        <p className="text-gray-500 leading-7">From superfood salads, juicy burgers,fresh wraps & sandwiches, there is a variety of mouth-watering goodness to try. Here's a little taster...</p>
                    </div>
                    <div className="mt-9 mb-9 md:flex md:mx-auto gap-3">
                        <div className="w-80 h-96 mx-auto md:w-64 md:h-64">
                            <img
                            src="https://images.squarespace-cdn.com/content/v1/5a127d79017db2e2b0be7947/1513244777210-SPIB2BEXDR06V1BP8YLB/Tin+Roof+Cafe+sample+menu.png?format=1500w"
                            alt="menu image"
                            className="w-full h-full"
                        />
                        </div>
                        <div className="mb-4">
                            <button className="block px-4 py-2 border-solid border-2 border-black hover:bg-black hover:text-white">VIEW OUR FULL MENU</button>
                            <button className="block px-4 py-2 border-solid border-2 border-black hover:bg-black hover:text-white">CONTACT US TO BOOK</button>
                        </div>
                    </div>
                <div className="w-full mx-5 mb-6 gap-3 md:flex md:justify-center">
                    <div className="mb-2 md:h-max md:w-2/3">
                        <img
                        src="https://images.squarespace-cdn.com/content/v1/5a127d79017db2e2b0be7947/1512474649037-2B2SYJ755TTAOA6H2Z6K/Tin+Roof+Cafe+burger.jpg?format=1000w"
                        alt="burger image"
                        className="w-full h-full"
                        />
                    </div>
                    <div className="">
                        <div className="mb-2">
                            <img
                            src="https://images.squarespace-cdn.com/content/v1/5a127d79017db2e2b0be7947/1512474650045-FFVE9CWL64DEM47UPR70/kids+on+swing+at+Tin+Roof+Cafe.jpg?format=750w"
                            alt="funtime"
                            className="w-full h-full"
                                />
                        </div>
                        <div className="">
                            <img
                            src="https://images.squarespace-cdn.com/content/v1/5a127d79017db2e2b0be7947/1512474650252-G3M6CA8HXMJ8Z8J0DZ6W/Tin+Roof+Cafe+chickens.jpg?format=500w"
                            alt="chicken image"
                            className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-9 w-96 h-64 ">
                    <img src="data:image/png;base64,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" 
                    alt="logo" 
                    className="w-full h-full" 
                    />
                </div>
                <div className=" mt-9 ">
                    <h4 className="underline underline-offset-4 text-center">BE IN TOUCH</h4>
                </div>
                <div className="flex justify-center gap-5 mt-5">
                    <FaFacebookF />
                    <BsInstagram />
                </div>
                <div className="mt-9 leading-7">
                    <h4 className="text-gray-700 text-center">KAREN & LANGATA, NAIROBI, KENYA +254 (0)719 606 621 EAT@TINROOF.CAFE</h4>
                    <h4 className="text-gray-700 text-center">HOURS Mon 08:00 to 17:30 Tue 08:00 to 17:30 Wed 08:00 to 17:30 Thu 08:00 to 17:30 Fri 08:00 to 17:30 Sat 08:00 to 17:30 Sun 08:00 to 17:30</h4>
                    <h3 className="font-bold text-md text-center">FREQUENTLY ASKED QUESTIONS#LIFEOUTSIDETHEMALL</h3>
                </div>
                <div className="mt-20">
                    <h1 className="text-gray-500 text-center taxt-xlg">SIGN UP TO OUR CLEAN EATING NEWSLETTER.</h1>
                    <h2 className="text-gray-500 text-center">We won't bombard you with spam, it'll be far more delicious than that.</h2>
                    <div className="mx-auto mt-9 mb-9 md:flex md:justify-center gap-3">
                        <input className="border-solid border-3 border-black" type="text" placeholder="Email Address" />
                        <button className="sm:block px-11 py-3 border-solid border-2 border-black hover:bg-black hover:text-white rounded-sm text-xlg text-gray-500">SIGN UP</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;