import React from "react";
import Slider from "react-slick";
import imageSlidertwo from "../../images/initiative/image-slider-2.png";
import imageSliderthree from "../../images/initiative/image-3.png";

const InitiativeHeroSlider = () => {
  const settings = {
    adaptiveHeight: true,
    className: "slider variable-width",
    variableWidth: true,
    dots: false,
    infinite: true,
    // slidesToShow: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          // slidesToShow: 2,
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className=" w-90 mr-[40px] custom-slick-img h-[451px]">
          <figure className="m-0 p-0 mx-auto h-full" style={{ width: 334 }}>
            <img
              src={imageSlidertwo}
              alt="slider-one-img"
              className="w-full h-full"
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </figure>
        </div>

        <div className=" w-90 mr-[40px] custom-slick-img h-[451px]">
          <figure className="m-0 p-0 mx-auto h-full" style={{ width: 334.03 }}>
            <img
              src={imageSliderthree}
              alt="slider-one-img"
              className="w-full h-full"
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </figure>
        </div>
      </Slider>
    </>
  );
};

export default InitiativeHeroSlider;
