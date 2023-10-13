import React from "react";
import Slider from "react-slick";
import ADA from "../../../images/ADA.jpg";
import childrenImage from "../../../images/childrenImage.jpg";
import carouselimage from "../../../images/carouselImage-1.jpg";
import Ada from "../../../images/ADA-lazy-loader.jpg";
import kids from "../../../images/childrenImage-lazy-loader.jpg";
import carouselLazyLoaderImg from "../../../images/carouselImage-lazyloader.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
      <section className="w-full mt-[50px] xl:w-[80%] xl:mx-auto">
        <Slider {...settings}>
          <div className="w-90 h-[424px] sm:w-[424px] sm:h-[424px] ">
            <figure className="m-0 p-0  h-full w-90 sm:mx-auto carousel carousel-img1 overflow-hidden">
              <LazyLoadImage
                src={childrenImage}
                alt="children pics"
                width={"100%"}
                height={"100%"}
                placeholderSrc={kids}
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
          <div className="w-90 h-[424px] sm:w-[424px]">
            <figure className="m-0 p-0  h-full w-90 sm:mx-auto carousel carousel-img2 overflow-hidden">
              <LazyLoadImage
                src={carouselimage}
                alt="ada-and-attendees"
                width={"100%"}
                height={"100%"}
                placeholderSrc={carouselLazyLoaderImg}
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
          <div className="w-90 h-[424px] sm:w-[424px] sm:h-[424px]">
            <figure className="m-0 p-0 h-full w-90 sm:mx-auto carousel carousel-img3 overflow-hidden">
              <LazyLoadImage
                src={ADA}
                alt="ada-image"
                width={"100%"}
                height={"100%"}
                placeholderSrc={Ada}
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
          <div className="w-90 h-[424px] sm:w-[424px] sm:h-[424px]">
            <figure className="m-0 p-0  h-full w-90 sm:mx-auto carousel carousel-img4 overflow-hidden">
              <LazyLoadImage
                src={carouselimage}
                alt="ada-and-attendees"
                width={"100%"}
                height={"100%"}
                placeholderSrc={carouselLazyLoaderImg}
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Carousel;
