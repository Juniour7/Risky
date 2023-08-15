import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Arrows
import { PrevArrow, NextArrow } from "./Arrow.component";

const HeroCarousel = () => {
    const settings = {
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }
    const Images = [
        "https://images.unsplash.com/photo-1691520673295-9626f624869b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1691604768829-ad1da34d688d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
        "https://images.unsplash.com/photo-1691433230427-1ad3bb167d20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
        "https://images.unsplash.com/photo-1691466517945-0f9cc5b47539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    ]

    return (
        <>
            <Slider {...settings}>
                {
                    Images.map((image) => (
                        <div className="w-full h-64">
                            <img src={image} alt="photos" className="w-full h-full" />
                        </div>
                    ))
                }
            </Slider>
        </>
    )
};

export default HeroCarousel;