import React, { useState } from "react";
import hero from "../../assets/v2/images/herobg-v2-copy.jpg";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";

import Footer from "../../components/Footer";
import DonateComponent from "../../components/version-2/donate";
import TheChallenge from "../../components/version-2/donate/TheChallenge";
import OurImpact from "../../components/version-2/donate/OurImpact";
import { testimonialCards } from "../../utils/v2";
import TestimonialSlide from "../../components/version-2/homepage/TestimonialSlide";

const SponsorALady = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>She Code Africa</title>
        <meta
          name="description"
          content="We are a non-profit organisation focused on celebrating and empowering young girls and women in tech across Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="She Code Africa" />
        <meta
          property="og:description"
          content="We are a non-profit organisation focused on celebrating and empowering young girls and women in tech across Africa."
        />
        <meta name="twitter:title" content="She Code Africa" />
        <meta
          name="twitter:description"
          content="We are a non-profit organisation focused on celebrating and empowering young girls and women in tech across Africa."
        />
      </Helmet>

      <Header page={"donate"} />
      <main className="text-secondary-main-black w-full">
        <section className="w-full h-full bg-[#B70569] relative ">
          <figure className="absolute top-0 left-0 w-full h-full mix-blend-multiply">
            <img
              src={hero}
              alt="Who We Are"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="bg-[rgba(0,0,0,0.35)] min-h-screen pt-16 lg:pt-[159px] lg:pb-[100px] flex items-center  ">
            <div className="w-[90%] mx-auto lg:max-w-[1256px] flex flex-col lg:justify-between lg:items-center lg:flex-row ">
              <article className="relative z-[1] w-full lg:max-w-[550px]">
                <h1 className="text-[64px] sm:text-7xl lg:leading-[130px] md:text-8xl lg:text-9xl text-white hero-text ">
                  Sponsor a Tech Lady Today
                </h1>

                <p className="text-white text-base md:text-2xl font-medium">
                  Did you know by donating as little as $5.3 (~8,532 NGN), you'd
                  be helping us mentor and provide resources to 1 female in tech
                  in 1 day?
                </p>
              </article>
              <div className="w-full max-w-[568px] mt-8 lg:mt-0 relative z-[1] ">
                <DonateComponent />
              </div>
            </div>
          </div>
        </section>

        <TheChallenge />

        <OurImpact />

        <section className="w-full relative pt-14 pb-28 lg:pb-40  testmonialBg">
          <article className="w-[90%] mx-auto lg:max-w-[1256px] text-center">
            <h3 className="text-5xl lg:text-[64px] font-bold 2md:leading-[82px] text-primary-main-pink hero-text  w-full mx-auto">
              Stories of Hope and Change
            </h3>

            <p className="text-center text-lg mt-2 font-medium">
              Thanks to supporters like you, we've been able to make a real
              difference in communities around the world.
            </p>
          </article>

          <TestimonialSlide testimonialCards={testimonialCards} />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default SponsorALady;
