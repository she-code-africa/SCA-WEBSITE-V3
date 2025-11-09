import React from "react";
import { Link } from "react-router-dom";
import donatePng from "../../../assets/v2/images/donatePng.jpg";

const Donate = () => {
  return (
    <section className="w-full  bg-magentaPattern bg-cover bg-no-repeat py-24">
      <div className="w-[90%] mx-auto xl:w-full xl:max-w-[1256px] bg-white py-12 px-6 rounded-[30px] lg:flex lg:items-center lg:justify-between">
        <article className="lg:w-full lg:max-w-[528px] w-[90%] mx-auto">
          <h3 className="text-4xl md:text-5xl lg:text-[64px] font-bold 2md:leading-[82px] text-[#7D355D] hero-text max-w-[474px] w-full">
            Donate to a cause
          </h3>

          <p className="text-lg md:text-2xl mt-3 leading-normal md:leading-normal">
            Every donation opens a door for a girl in Africa to step into tech. Your gift today could place a laptop, skills, or a mentor in her hands. One act of giving today can change her future forever.
          </p>

          <div className="mt-8 max-w-[152px] w-full rounded-lg overflow-hidden">
            <Link
              to="/donate"
              className="flex items-center justify-center  max-w-[152px] h-[55px] bg-primary-main-pink text-white  hover:bg-[#5C0335] transition-all duration-300 text-base"
            >
              Donate here
            </Link>
          </div>
        </article>

        <figure className="hidden lg:block max-w-[538px] w-full h-[434px] rounded-[30px] overflow-hidden">
          <img src={donatePng} className="w-full h-full" alt="alt-img" />
        </figure>
      </div>
    </section>
  );
};

export default Donate;
