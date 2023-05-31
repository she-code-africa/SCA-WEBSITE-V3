import React from "react";
import Slider from "react-slick";
import imageSliderone from "../../images/initiative/image-slider-1.png";
import imageSlidertwo from "../../images/initiative/image-slider-2.png";
import imageSliderthree from "../../images/initiative/image-3.png";
import imageSliderfour from "../../images/initiative/image-4.png";

const InitiativeHeroSlider = () => {
  const settings = {
    adaptiveHeight: true,
    className: "slider variable-width",
    variableWidth: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
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
          slidesToShow: 2,
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
          <figure className="m-0 p-0 mx-auto h-full" style={{ width: 542 }}>
            <img
              src={imageSliderone}
              alt="slider-one-img"
              className="w-full h-full"
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </figure>
        </div>

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

        <div className=" w-90 mr-[40px] custom-slick-img h-[451px]">
          <figure className="m-0 p-0 mx-auto h-full" style={{ width: 334 }}>
            <img
              src={imageSliderfour}
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
