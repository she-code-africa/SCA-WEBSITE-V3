import React from "react";
import Slider from "react-slick";
import avatar from "../../../images/avatar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        fontSize: "20px",
        textAlign: "center",
      }}
    >
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        fontSize: "20px",
        textAlign: "center",
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleLeft} />
    </div>
  );
}
const TestimonialCarousel = () => {
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
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div className="w-full" key={index}>
              <div className="p-5 md:p-10 rounded-md bg-white w-90 mx-auto">
                <div className="flex items-center gap-3 leading-6">
                  <figure className="m-0 p-0 w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-[50%] overflow-hidden">
                    <img src={avatar} alt="avatar" className="w-full h-full" />
                  </figure>

                  <article className="w-full">
                    <h5 className="text-primary-main-pink text-base md:text-xl capitalize font-bold">
                      folashade olugbogi
                    </h5>

                    <p className="text-sm md:text-base capitalize text-grey-text font-medium">
                      lead, product designer
                    </p>
                  </article>
                </div>

                <p className="mt-6 text-neutral-250 leading-6 lg:w-[90%]">
                  Joining SCA is one of the best decisions i have made so far. I
                  don’t regret taking that bold step. My Growth was so glaring
                  that everyone could see it. I’m grateful for my journey at SCA
                  and I am grateful for Ada ❤️
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
