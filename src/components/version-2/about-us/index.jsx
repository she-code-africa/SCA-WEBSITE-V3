import React from "react";
import avatar from "../../../assets/v2/images/about/bi-avatar.png";
import { ourReachData } from "../../../utils/v2";

const AboutUsReachSection = () => {
  return (
    <section className="w-full bg-[rgba(253,192,227,0.24)] py-10">
      <div className="w-[90%] max-w-[1304px] mx-auto">
        <div className="w-full flex flex-col gap-10 sm:flex-row sm:justify-center">
          {ourReachData.map(({ numbers, description }, i) => (
            <div className="w-full sm:max-w-[296px]" key={i}>
              <figure className="max-w-[76px] h-[76px] w-full overflow-hidden">
                <img src={avatar} alt="avatar" className="w-full h-full" />
              </figure>

              <article className={`flex flex-col gap-4 w-full my-6`} key={i}>
                <h3 className="hero-text text-[#7D355D] text-[64px] sm:text-7xl lg:leading-[130px] md:text-8xl lg:text-9xl ">
                  {numbers}+
                </h3>
                <p className="text-lg md:text-2xl leading-normal md:leading-normal">
                  {description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsReachSection;
