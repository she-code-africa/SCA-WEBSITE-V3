import React from "react";
import ourReachIcon from "../../images/Icon-our-reach.svg";

const OurReach = () => {
  return (
    <div className="w-90 mx-auto border-2 border-white flex flex-col md:flex-row md:items-center md:justify-between text-white">
      <article className="w-full md:max-w-[440px] ">
        <figure className="m-0 p-0 w-[62px] h-[62px] md:h-[124px] md:w-[124px] mx-auto md:mx-0 overflow-hidden">
          <img src={ourReachIcon} alt="" className="w-full h-full" />
        </figure>

        <h2 className="mt-6 w-full text-center md:text-left capitalize text-4xl md:text-[40px] font-bold">
          our reach so far
        </h2>
      </article>

      <div className="w-full"></div>
    </div>
  );
};

export default OurReach;
