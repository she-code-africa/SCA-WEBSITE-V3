import React from 'react';
import Slider from "react-slick";

const index = ({title}) => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3500,
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
          breakpoint: 600,
          settings:{
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings:{
            slidesToShow: 1
          }
        }

      ]
    };
  return <section className="about_section counter">
    <div className="container mx-auto px-2 md:px-8 lg:px-14 flex flex-col sm:flex-row justify-between">
      <div className="sm:w-3/12 lg:px-8 mx-0">
        <h4 className="__shecode_title">{title}</h4>
      </div>
      <div className="sm:w-9/12 sm:inline-block px-2 lg:px-8">
        <div className="counter_items">
          <Slider {...settings}>
                <div className="slick-item">
                  <h4>10000+</h4>
                  <p>Community Members</p>
                </div>
                <div className="slick-item">
                  <h4>15+</h4>
                  <p>African Countries with Members</p>
                </div>     
                <div className="slick-item">
                  <h4>32+</h4>
                  <p>Chapter Locations</p>
                </div>
            </Slider>
        </div>
      </div>
        
    </div>
          
</section>;
};

export default index;
