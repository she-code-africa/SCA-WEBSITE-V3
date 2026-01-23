import React from "react";
import TestimonialSlide from "../homepage/TestimonialSlide";

const SuccessStories = ({ testimonialCards }) => {
  return (
    <section className="w-full relative pt-20 pb-28 lg:pb-40 mt-20 lg:mt-32 testmonialBg">
      <h3 className="text-5xl text-center text-primary-main-pink lg:text-[64px] font-bold 2md:leading-[82px]  hero-text max-w-[474px] w-full mx-auto">
        Our Queens’ Experiences
      </h3>

      <p className="text-xl font-normal text-center text-black roboto-font w-[90%] mx-auto my-3">
        Behind every number is a girl whose life has been transformed.
      </p>

      <TestimonialSlide testimonialCards={testimonialCards} />
    </section>
  );
};

export default SuccessStories;
