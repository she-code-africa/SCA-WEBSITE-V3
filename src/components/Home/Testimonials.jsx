import React from "react";

import leftQuote from "../../images/homepage/left-quote.svg";
import Text from "./Text";
import TestimonialCarousel from "../Carousel/Home/TestimonialCarousel";

const Testimonials = () => {
  return (
    <div className="w-[90%] xl:max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 relative">
      <article className="w-full md:w-1/2 pb-10 md:pb-0">
        <figure className="p-0 m-0 max-w[204.44px] h-[180.36px] mx-auto overflow-hidden mb-4 hidden sm:block" aria-hidden>
          <img src={leftQuote} alt="left quote" className="w-full h-full" />
        </figure>

        <Text
          heading="Testimonials"
          subheading="Read from some of our beneficiaries."
        />
      </article>
      <section className="w-full md:w-1/2 bg-primary-main-pink pt-[87px] md:pt-[174px] pb-[69px] md:pb-[138px]">
        <TestimonialCarousel />
      </section>
    </div>
  );
};

export default Testimonials;
