import React from "react";
import Slider from "react-slick";

const PartnersLogoCarousel = ({ partnersData }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
