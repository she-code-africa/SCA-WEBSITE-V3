import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import hero from "../../images/v2/herobg-v2.jpg";

import AboutUsReachSection from "../../components/version-2/about-us";
import Donate from "../../components/version-2/homepage/Donate";
import AboutUs from "../../components/version-2/homepage/AboutUs";
import Milestone from "../../components/version-2/about-us/Milestone";
import { motion } from "framer-motion";
import { bgVariant, heroFadeUp } from "../../lib/motionVariants";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
        <meta
          name="description"
          content="We are a non-profit organization focused on celebrating and empowering young Girls and Women in Technology across Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="About Us" />
        <meta
          property="og:description"
          content="We are a non-profit organization focused on celebrating and empowering young Girls and Women in Technology across Africa."
        />
        <meta name="twitter:title" content="About Us" />
        <meta
          name="twitter:description"
          content="We are a non-profit organization focused on celebrating and empowering young Girls and Women in Technology across Africa."
        />
      </Helmet>
      <Header page={"about"} />
      <main className="text-secondary-main-black w-full">
        <section className="w-full h-full bg-[rgba(143,171,80,1)] relative ">
          <motion.figure
            variants={bgVariant}
            initial="hidden"
            animate="visible"
            className="absolute top-0 left-0 w-full h-full mix-blend-multiply"
          >
            <img
              src={hero}
              rel="preload"
              as="image"
              alt="Who We Are"
              className="object-cover w-full h-full"
            />
          </motion.figure>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[rgba(0,0,0,0.35)] min-h-screen pt-16 lg:pt-[159px] lg:pb-[100px] flex justify-center items-center "
          >
            <article className="relative z-[1] w-[90%] mx-auto lg:w-full lg:max-w-[1040px] text-center">
              <motion.h1
                variants={heroFadeUp}
                initial="hidden"
                animate={() => heroFadeUp.visible(0.3)}
                className="hero-title text-white hero-text"
              >
                Equipping women with digital skills, one initiative after
                another
              </motion.h1>

              <motion.p
                variants={heroFadeUp}
                initial="hidden"
                animate={() => heroFadeUp.visible(0.5)}
                className="description-text text-white lg:max-w-[858px] mx-auto"
              >
                She Code Africa started with one simple belief: talent is
                everywhere, but opportunity is not. In many African communities,
                girls and women are shut out of tech because of where they live,
                what they can access, or what they’ve been told they can or
                cannot do. We exist to close that gap. From small meetups to a
                growing movement across the continent, She Code Africa is now a
                home where women and girls can learn, grow, and thrive in tech,
                with skills, mentorship, and a supportive community by their
                side.
              </motion.p>
            </article>
          </motion.div>
        </section>
        <AboutUsReachSection />
        <AboutUs />
        <Milestone />
        <Donate />
      </main>
      <Footer />
    </>
  );
};

export default About;
