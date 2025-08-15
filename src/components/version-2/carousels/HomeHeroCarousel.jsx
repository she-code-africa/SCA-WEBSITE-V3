import React from "react";
import Slider from "react-slick";
import { homeHeroSliderImages } from "../../../utils/v2";

const HomeHeroCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    lazyLoad: true,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="w-full sliderContainer">
      <Slider {...settings}>
        {homeHeroSliderImages.map((image, index) => (
          <figure key={index} className="px-1">
            <img src={image} alt={`Slide ${index + 1}`} />
          </figure>
        ))}
      </Slider>
    </div>
  );
};

export default HomeHeroCarousel;
