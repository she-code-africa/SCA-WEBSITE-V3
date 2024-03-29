import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import { apiConstants } from "../../../utils";
import { getTestimonials } from "../../../services";

function SampleNextArrow (props) {
  const { className, style, onClick } = props;

  return (
    <button
      className={`focus:outline-none focus:ring focus:ring-tutu ml-6 md:ml-0 ${className}`}
      tabIndex={0}
      aria-label="Next slide"
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        fontSize: "20px",
        textAlign: "center",
      }}
    >
      <FontAwesomeIcon icon={faAngleRight} />
    </button>
  );
}

function SamplePrevArrow (props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`focus:outline-none focus:ring focus:ring-tutu ${className}`}
      tabIndex={0}
      aria-label="Previous slide"
      style={{
        ...style,
        display: "block",
        fontSize: "20px",
        textAlign: "center",
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleLeft} />
    </button>
  );
}
const TestimonialCarousel = () => {
  const { data: testimonials } = useQuery(
    [apiConstants.testimonials],
    getTestimonials
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full slick-wrapper">
      <Slider {...settings}>
        {testimonials &&
          testimonials.length &&
          testimonials.map((testimonial) => {
            return (
              <div className="w-full" key={testimonial._id}>
                <div className="p-5 md:p-10 rounded-md bg-white w-90 mx-auto">
                  <div className="flex items-center gap-3 leading-6">
                    <figure className="m-0 p-0 w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-[50%] overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </figure>

                    <article className="w-full">
                      <h3 className="text-primary-main-pink text-base md:text-xl capitalize font-bold">
                        {`${testimonial.firstName} ${testimonial.lastName}`}
                      </h3>
                    </article>
                  </div>

                  <p className="mt-6 text-neutral-250 leading-6 lg:w-[90%]">
                    {testimonial.testimony}
                  </p>
                </div>
              </div>
            );
          })}
      </Slider>
    </section>
  );
};

export default TestimonialCarousel;
