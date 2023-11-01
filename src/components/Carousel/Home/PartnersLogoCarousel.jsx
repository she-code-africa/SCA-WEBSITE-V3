import React from "react";
import Slider from "react-slick";

const PartnersLogoCarousel = ({ partnersData }) => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
    className: "slider variable-width",
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
    lazyLoad: true,
    initialSlide: 2,
    responsive: [
      {
        breakponint: 721,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <section className="w-full mx-auto mt-[60px]">
      <div className="w-full mb-10 text-center">
        <h2 className="text-2xl md:text-3xl 2md:text-[40px] font-bold 2md:leading-[82px]">
          Brands that believe in our vision and goal
        </h2>
      </div>
      <Slider {...settings} className=" custom-slick">
        {partnersData.map((logo, index) => {
          let { image, name } = logo;
          return (
            <div
              className=" w-90 mr-[40px] custom-slick-img h-[110px]"
              key={index}
            >
              <figure className="m-0 p-0 mx-auto h-auto" style={{ width: 100 }}>
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full"
                  style={{ objectFit: "contain" }}
                  loading="lazy"
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
