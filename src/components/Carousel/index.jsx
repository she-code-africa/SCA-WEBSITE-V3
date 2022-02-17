import React from 'react';
import Slider from "react-slick";

export const Carousel = ({title, content}) => {
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
            {
              content.map(({header, content, src}) =>{
                return <div className="slick-item">
                    <h4>{header}</h4>
                    <p>{content}</p>
                    {src ? <img src={src} alt="logo"/> : ""}
                  </div>
              })
            }
            </Slider>
        </div>
      </div>
        
    </div>
          
</section>;
};

export const TestimonialCarousel = ({testimonials, title}) =>{
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false
  };
return <div className="" id="testimonials">
    <div className="lg:px-8 mx-0">
      <h4 className="__shecode_topic">{title}</h4>
    </div>
    <div className="">
      <Slider {...settings}>
        {
          testimonials.map(({img, testimonial, name})=>{
            return <div className="testimonial_box">
                <img src={img} alt="name"/>
                <div>
                  <p className="testimonial_text">{testimonial}</p>
                  <p className="testimonial_name mt-4">{name}</p>
                </div>
            </div>
          })
        } 
      </Slider>
    </div>    
  </div>;
}
