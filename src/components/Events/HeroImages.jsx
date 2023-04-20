import React from "react";
import large from "../../images/events-page/Large.png";
import eventimage1 from "../../images/events-page/event-hero-img.png";
import eventimage2 from "../../images/events-page/event-hero-img-2.png";

const HeroImages = () => {
  return (
    <div className="w-[90%] flex flex-col md:flex-row md:justify-center mx-auto lg:w-10/12 gap-8 md:gap-5">
      <figure className="m-0 p-0 max-w-[300px] h-[375px] w-full mx-auto md:mx-0 md:w-[630px] md:max-w-full rounded-xl overflow-hidden">
        <img
          src={large}
          alt="first-hero-png"
          className="w-full h-full object-cover"
        />
      </figure>
      <figure className="m-0 p-0 max-w-[300px] h-[375px] w-full mx-auto md:mx-0 md:w-[305px] md:max-w-full rounded-xl overflow-hidden">
        <img
          src={eventimage1}
          alt="second-hero-png"
          className="w-full h-full object-cover"
        />
      </figure>
      <figure className="m-0 p-0 max-w-[300px] h-[375px] w-full mx-auto md:mx-0 md:w-[305px] md:max-w-full rounded-xl overflow-hidden">
        <img
          src={eventimage2}
          alt="first-hero-png"
          className="w-full h-full object-cover"
        />
      </figure>
    </div>
  );
};

export default HeroImages;
