import React from 'react';
import Slider from 'react-slick';
import { partnersList } from '../../../utils';

const PartnersLogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    className: 'slider variable-width',
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
    lazyLoad: true,
    initialSlide: 2,
    responsive: [
      {
        breakponint: 721,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };
  return (
    <section className="w-full mx-auto mt-[60px]">
      <Slider {...settings}>
        {partnersList.map((logo, index) => {
          return (
            <div className=" w-90 mr-[40px] flex items-center justify-center" key={index}>
              <figure className="m-0 p-0 mx-auto" style={{ width: logo.width }}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full"
                  style={{ objectFit: 'contain' }}
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
