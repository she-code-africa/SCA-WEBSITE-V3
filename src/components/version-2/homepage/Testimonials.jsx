import React from "react";
import { testimonialCards } from "../../../utils/v2";
import { useQuery } from "@tanstack/react-query";
import { apiConstants } from "../../../utils";
import { getTestimonials } from "../../../services";
import TestimonialSlide from "./TestimonialSlide";

const OurQueensTestimonials = () => {
  const { data: testimonials, isLoading } = useQuery({
    queryKey: [apiConstants.testimonials],
    queryFn: () => getTestimonials(),
  });

  console.log("testimonials", testimonials);

  return (
    <section className="w-full relative pt-20 pb-28 lg:pb-40 mt-20 lg:mt-32 testmonialBg">
      <h3 className="text-5xl lg:text-[64px] font-bold 2md:leading-[82px] text-primary-main-pink hero-text max-w-[474px] w-[90%] text-center mx-auto">
        Our Queens’ Experiences
      </h3>

      <TestimonialSlide testimonialCards={testimonials} isLoading={isLoading} />
    </section>
  );
};

export default OurQueensTestimonials;
