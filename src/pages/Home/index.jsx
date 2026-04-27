import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CustomButtonComponent from "../../components/version-2/shared-components/buttons/index.";
import hero from "../../images/v2/home-hero.webp";
import HomeHeroCarousel from "../../components/version-2/carousels/HomeHeroCarousel";
import AboutUs from "../../components/version-2/homepage/AboutUs";
import OurBrands from "../../components/version-2/homepage/OurBrands";
import OurReach from "../../components/version-2/homepage/OurReach";
import WhatWeDo from "../../components/version-2/homepage/WhatWeDo";
import OurGallery from "../../components/version-2/homepage/OurGallery";
import OurQueensTestimonials from "../../components/version-2/homepage/Testimonials";
import Donate from "../../components/version-2/homepage/Donate";
import { motion } from "framer-motion";
import { heroFadeUp, sectionVariant } from "../../lib/motionVariants";
import HomePageModal from "../../components/PopUpModal/home";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.openReport) {
      setOpenModal(true);

      window.history.replaceState({}, "");
    }
  }, [location.state]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleShow2025Report = () => {
    setOpenModal(true);
  };
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
              rel="preload"
              as="image"
              alt="Who We Are"
              className="object-cover w-full h-full"
            />
          </figure>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[rgba(0,0,0,0.35)] min-h-screen pt-16 lg:pt-[159px] lg:pb-[100px] flex justify-center items-center "
          >
            <article className="relative z-[1] w-[90%] mx-auto lg:w-full lg:max-w-[800px] text-center">
              <motion.h1
                variants={heroFadeUp}
                initial="hidden"
                animate={() => heroFadeUp.visible(0.3)}
                className="hero-title text-white hero-text"
              >
                Equipping Girls and Women In Tech Across Africa
              </motion.h1>

              <motion.p
                variants={heroFadeUp}
                initial="hidden"
                animate={() => heroFadeUp.visible(0.5)}
                className="text-white text-base md:text-2xl font-medium"
              >
                She Code Africa is a non-profit organization on a mission to
                equip African girls and women with digital skills, training,
                resources, and a thriving community, to help them build careers,
                gain financial independence, and lead boldly in tech.
              </motion.p>

              <motion.div
                variants={heroFadeUp}
                initial="hidden"
                animate={() => heroFadeUp.visible(0.7)}
                className="w-full flex flex-col max-w-[443px] mx-auto sm:flex-row justify-between items-center gap-3 mt-8"
              >
                <CustomButtonComponent
                  label="Join our community"
                  customColor="text-white"
                  bgHover="hover:bg-[#5C0335] hover:border-[#5C0335] bg-[#B70569] border-primary-main-pink rounded-lg transition-all duration-300"
                  url="https://docs.google.com/forms/d/e/1FAIpQLSdf-x58pHMIS5-YCLQQniKQxlncwJrtb0F60uljpjnoZMIo2g/viewform"
                  isGallery={true}
                />

                <CustomButtonComponent
                  label="Donate to a cause"
                  customColor=" text-primary-main-pink"
                  bgHover="hover:bg-[#FF8FCE] bg-white rounded-lg transition-all duration-300 border-none"
                  isWithIcon={true}
                  iconPos="right"
                  icon={<FontAwesomeIcon icon={faArrowRight} />}
                  url="/donate"
                />
              </motion.div>
            </article>
          </motion.div>
        </section>

        <section className="w-full bg-[#FFF88F] ">
          <motion.div
            className="w-full md:min-h-[405.43px] flex items-center py-14 md:py-24"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <HomeHeroCarousel />
          </motion.div>
        </section>
        <AboutUs />
        <OurBrands />
        <OurReach />
        <WhatWeDo />
        <OurGallery />
        <OurQueensTestimonials />
        <Donate />
      </main>
      <Footer handleShow2025Report={handleShow2025Report} />

      {openModal && <HomePageModal closeModal={handleCloseModal} />}
    </>
  );
};

export default Home;
