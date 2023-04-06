import React from "react";
import { partnersList } from "../../utils";
import Slider from "react-slick";

const PartnersLogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <section className="w-full mx-auto mt-[60px]">
      <Slider {...settings}>
        {partnersList.map((logo, index) => {
          return (
            <div
              className=" w-90 h-[150px] flex items-center justify-center"
              key={index}
            >
              <figure className="m-0 p-0 max-w-[100px] mx-auto">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full"
                  style={{ objectFit: "contain" }}
                />
              </figure>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default PartnersLogoCarousel;
