import React from "react";
import TestimonialSlide from "../homepage/TestimonialSlide";
import { testimonialCards } from "../../../utils/v2";

const SuccessStories = () => {
  return (
    <section className="w-full relative pt-20 pb-28 lg:pb-40 mt-20 lg:mt-32 testmonialBg">
      <h3 className="text-5xl text-center  lg:text-[64px] font-bold 2md:leading-[82px]  hero-text max-w-[474px] w-full mx-auto">
        Success Stories
      </h3>

      <p className="text-xl font-normal text-center text-black roboto-font w-[90%] mx-auto my-3">
        Thanks to supporters like you, we've been able to make a real difference
        in communities around the world.
      </p>

      <TestimonialSlide testimonialCards={testimonialCards} />
    </section>
  );
};

export default SuccessStories;
