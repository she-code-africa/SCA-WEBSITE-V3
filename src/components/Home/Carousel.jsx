import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
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
      <section className="w-full mt-[50px] xl:w-[80%] xl:mx-auto">
        <Slider {...settings}>
          <div className="w-90 h-[424px] sm:w-[424px] sm:h-[424px]">
            <figure className="m-0 p-0  h-full w-90 sm:mx-auto carousel carousel-img1"></figure>
          </div>
          <div className="w-90 h-[424px] sm:w-[424px] sm:h-[424px]">
            <figure className="m-0 p-0  h-full w-90 sm:mx-auto carousel carousel-img2"></figure>
          </div>
          <div className="w-90 h-[424px] sm:w-[424px] sm:h-[424px]">
            <figure className="m-0 p-0  h-full w-90 sm:mx-auto carousel carousel-img3"></figure>
          </div>
          <div className="w-90 h-[424px] sm:w-[424px] sm:h-[424px]">
            <figure className="m-0 p-0  h-full w-90 sm:mx-auto carousel carousel-img4"></figure>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Carousel;
