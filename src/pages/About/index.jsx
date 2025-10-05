import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JoinUs from "../../components/JoinUs";
import bgGradient from "../../images/about/bg-gradient.jpg";
import mission from "../../images/about/mission-icon.png";
import vision from "../../images/about/vision-icon.png";
import teamwork from "../../images/about/teamwork.svg";
import community from "../../images/about/community.jpg";
import growth from "../../images/about/new-about-image.jpg";
import guidance from "../../images/about/guidance.jpg";
import support from "../../images/about/support.jpg";
import CustomButtonComponent from "../../components/version-2/shared-components/buttons/index.";
import hero from "../../assets/v2/images/herobg-v2-copy.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AboutUsReachSection from "../../components/version-2/about-us";
import Donate from "../../components/version-2/homepage/Donate";
import AboutUs from "../../components/version-2/homepage/AboutUs";
import Milestone from "../../components/version-2/about-us/Milestone";

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
          <figure className="absolute top-0 left-0 w-full h-full mix-blend-multiply">
            <img
              src={hero}
              alt="Who We Are"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="bg-[rgba(0,0,0,0.35)] min-h-[120vh] pt-16 lg:pt-[86px]  flex justify-center items-center ">
            <article className="relative z-[1] w-[90%] mx-auto lg:w-full lg:max-w-[900px] text-center">
              <h1 className="text-[64px] sm:text-7xl lg:leading-[130px] md:text-8xl lg:text-9xl text-white hero-text ">
                Equipping women with digital skills, one initiative after
                another
              </h1>

              <p className="text-white text-base md:text-2xl font-medium">
                She Code Africa started with one simple belief: talent is
                everywhere, but opportunity is not. In many African communities,
                girls and women are shut out of tech because of where they live,
                what they can access, or what they’ve been told they can or
                cannot do. We exist to close that gap. From small meetups to a
                growing movement across the continent, She Code Africa is now a
                home where women and girls can learn, grow, and thrive in tech,
                with skills, mentorship, and a supportive community by their
                side.
              </p>
            </article>
          </div>
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
