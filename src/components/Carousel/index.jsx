import React from 'react';
import Slider from "react-slick";
import {SuccessBox} from '../Cards'

export const Carousel = ({title, content, slidesToShow, slidesToScroll}) => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: slidesToShow || 2,
      slidesToScroll: slidesToScroll || 2,
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
              content.map(({header, content, src}, index) =>{
                return <div className="slick-item" key={index}>
                    <h4>{header}</h4>
                    <p>{content}</p>
                    {src ? <img className="block h-[80px] object-contain" src={src} alt="logo"/> : ""}
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
          testimonials.map(({img, testimonial, name}, index)=>{
            return <div className="testimonial_box" key={index}>
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

export const SuccessCarousel = ({successStories}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
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
  return<div>
    <Slider {...settings}>
      {successStories.map((successStory, index)=>{
        let {name, role, story, img} = successStory
        return <SuccessBox key={index} name={name} role={role} story={story} img={img}/>
      })}
    </Slider>
    
  </div>
}

export const GalleryCarousel = ({gallery}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow: 1
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
  return<div className="container mx-auto px-4">
    <Slider {...settings}>
      {gallery.map(({url}, index)=>{
        return <div className="mx-auto" key={index}>
          <img className="max-h-[250px] text-center mr-2" src={url} alt="Gallery"/>
        </div>
      })}
    </Slider>
    
  </div>
}