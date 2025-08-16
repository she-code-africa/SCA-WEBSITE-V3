import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import adaRect from "../../images/ada-rect.jpg";
import PopUpModal from "../../components/PopUpModal";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import * as homecomponents from "../../components/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowRight,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  apiConstants,
  homepageOurCommunityCards,
  paths,
} from "../../utils/index";
import BecomeAmemberButton from "../../components/Button/BecomeAmemberButton";
import whoweareimage from "../../images/homepage/who-are-we.png";
import { whoWeAreTexts } from "../../utils";
import gallery1 from "../../images/homepage/gallery-sca.png";
import gallery2 from "../../images/homepage/gallery-two.png";
import gallery3 from "../../images/homepage/gallery-3.png";
import hireTalent from "../../images/homepage/hire-talent.png";
import { useQuery } from "@tanstack/react-query";
import { getPartners } from "../../services";
import * as components from "../../components";
import CustomButtonComponent from "../../components/version-2/shared-components/buttons/index.";
import hero from "../../assets/v2/images/herobg-v2-copy.jpg";
import HomeHeroCarousel from "../../components/version-2/carousels/HomeHeroCarousel";
import AboutUs from "../../components/version-2/homepage/AboutUs";
import OurBrands from "../../components/version-2/homepage/OurBrands";
import OurReach from "../../components/version-2/homepage/OurReach";
import WhatWeDo from "../../components/version-2/homepage/WhatWeDo";
import OurGallery from "../../components/version-2/homepage/OurGallery";
import OurQueensTestimonials from "../../components/version-2/homepage/Testimonials";
import Donate from "../../components/version-2/homepage/Donate";

const Home = () => {
  const [modal, setModal] = useState(true);
  const closeModal = () => {
    setModal(false);
  };
  const { isLoading, isError, data } = useQuery(
    [apiConstants.partners],
    getPartners
  );

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

      <Header page={"home"} />
      <main className="text-secondary-main-black w-full">
        <section className="w-full h-full bg-[#B70569] relative ">
          <figure className="absolute top-0 left-0 w-full h-full mix-blend-multiply">
            <img
              src={hero}
              alt="Who We Are"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="bg-[rgba(0,0,0,0.35)] min-h-screen pt-16 lg:pt-32 flex justify-center items-center ">
            <article className="relative z-[1] w-[90%] mx-auto lg:w-full lg:max-w-[720px] text-center">
              <h1 className="text-[64px] sm:text-7xl lg:leading-[130px] md:text-8xl lg:text-9xl text-white hero-text ">
                Empowering Women In Tech Across Africa
              </h1>

              <p className="text-white text-base md:text-2xl font-medium">
                She Code Africa is a registered non-profit organization
                dedicated to empowering and celebrating girls and women in
                technology across Africa
              </p>

              <div className="w-full flex flex-col max-w-[443px] mx-auto sm:flex-row justify-between items-center gap-3 mt-8">
                <CustomButtonComponent
                  // btnColor="[#B70569]"
                  label="Join our community"
                  customColor="text-white hover:text-primary-main-pink"
                  bgHover="hover:bg-white bg-[#B70569] border-[#B70569] rounded-lg transition-all duration-300"
                  url="https://bit.ly/joinshecodeafrica"
                />
                <CustomButtonComponent
                  // btnColor="[#ffffff]"
                  label="Donate to a cause"
                  customColor="hover:text-white text-primary-main-pink"
                  bgHover="hover:bg-[#B70569] bg-white rounded-lg transition-all duration-300 border-white"
                  isWithIcon={true}
                  iconPos="right"
                  icon={<FontAwesomeIcon icon={faArrowRight} />}
                  url="/donate-partner"
                />
              </div>
            </article>
          </div>
        </section>

        <section className="w-full bg-[#FFF88F] py-14 md:py-24">
          <HomeHeroCarousel />
        </section>
        <AboutUs />
        <OurBrands />
        <OurReach />
        <WhatWeDo />
        <OurGallery />
        <OurQueensTestimonials />
        <Donate />
      </main>
      <Footer />
    </>
  );
};

export default Home;
