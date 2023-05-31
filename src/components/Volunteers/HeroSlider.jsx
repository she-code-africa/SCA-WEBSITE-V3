import React from "react";
import Slider from "react-slick";
import imageSliderone from "../../images/volunteerImgs/volunteer-img-one.png";
import imageSlidertwo from "../../images/volunteerImgs/volunteer-slider-img-2.png";
import imageSliderthree from "../../images/volunteerImgs/volunteer-img-three.png";
import imageSliderfour from "../../images/volunteerImgs/volunteer-img-four.png";
import imageSliderFive from "../../images/volunteerImgs/volunteer-img-five.png";

const HeroSlider = () => {
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
          <figure className="m-0 p-0 mx-auto h-full" style={{ width: 334.03 }}>
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
          <figure className="m-0 p-0 mx-auto h-full" style={{ width: 542 }}>
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
          <figure className="m-0 p-0 mx-auto h-full" style={{ width: 334 }}>
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
          <figure className="m-0 p-0 mx-auto h-full" style={{ width: 334.03 }}>
            <img
              src={imageSliderfour}
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
              src={imageSliderFive}
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

export default HeroSlider;
