import React from "react";
import whatWeDo from "../../../assets/v2/images/whatWeDoCardImage.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const WhatWeDo = () => {
  return (
    <section className="w-full ourReachBg bg-no-repeat bg-cover pb-20">
      <div className="w-full bg-[#DDFF8F] what-we-do-clip relative z-[1]">
        <article className=" w-[90%] mx-auto xl:w-full xl:max-w-[909px] pt-20 pb-56">
          <h3 className="text-[32px] text-center md:text-4xl lg:text-[64px] font-bold 2md:leading-[82px] text-[#094A32] hero-text">
            What We Do
          </h3>

          <p className="text-lg md:text-2xl mt-3 text-center leading-normal md:leading-normal font-medium">
            According to Data from Accenture, the ratio of women to men in tech
            roles has declined in the past 35 years. Out of 50% individuals in
            the industry, only 20% are women who are significantly represented,
            with only 14% in software engineering and 25% in computer science
            related roles compared to their male counterparts.
          </p>

          <p className="text-lg md:text-2xl text-center leading-normal md:leading-normal mt-10 font-medium">
            Here's how we're tackling that:
          </p>
        </article>
      </div>

      <div className="w-[90%] mx-auto sm:w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[778px] -mt-40 relative z-[1]">
        <div className="w-full grid md:grid-cols-2 gap-8 ">
          {[...Array(4)].map((_, i) => (
            <div
              className="border-2 border-[#094A32] p-5 bg-white rounded-2xl"
              key={i}
            >
              <figure className="h-[334px] w-full rounded-2xl overflow-hidden">
                <img
                  src={whatWeDo}
                  alt="card-pic"
                  className="object-cover w-full h-full"
                />
              </figure>

              <article className="mt-5 w-full">
                <h4 className="capitalize text-xl text-[#094A32] font-semibold">
                  card title
                </h4>
                <p className="font-medium text-base mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, porro?
                </p>
              </article>

              <div className="mt-5 w-full text-[#094A32]">
                <Link to="text-sm w-full flex items-center gap-2">
                  Learn more <FontAwesomeIcon icon={faArrowRight} />{" "}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
