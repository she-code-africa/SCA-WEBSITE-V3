import React from "react";
import ourReach from "../../../assets/v2/images/our-reach.png";
import { ourReachData } from "../../../utils/v2";

const OurReach = () => {
  return (
    <section className="pt-12">
      <div className="w-full ourReachBg bg-no-repeat bg-cover">
        <figure className="w-full h-[353px]">
          <img
            src={ourReach}
            alt="Our Reach"
            className="object-cover w-full h-full"
          />
        </figure>

        <div className="w-[90%] mx-auto py-10">
          <article className="w-full">
            <h3 className="section-header text-center 2md:leading-[82px] text-primary-main-pink hero-text">
              Our Reach So Far
            </h3>

            <p className="description-text mt-3 text-center">
              Emphasize time-saving and use numbers to maximize credibility.
            </p>
          </article>

          <div className="w-full max-w-[1132px] mx-auto my-10 sm:grid sm:grid-cols-2 sm:justify-items-center">
            {ourReachData.map(({ numbers, description, maxW }, i) => (
              <article
                className={`flex flex-col sm:hidden  gap-4 w-full my-5`}
                key={i}
              >
                <h3 className="hero-text text-[#7D355D] impact-number-large lg:leading-[130px]">
                  {numbers}+
                </h3>
                <p className="description-text">
                  {description}
                </p>
              </article>
            ))}

            {ourReachData.map(({ numbers, description, maxW }, i) => (
              <article
                className={`hidden sm:flex items-center gap-4 w-full my-5`}
                style={{ maxWidth: `${maxW}px` }}
                key={i}
              >
                <h3 className="hero-text text-[#7D355D] impact-number-large lg:leading-[130px]">
                  {numbers}+
                </h3>
                <p className="description-text">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurReach;
