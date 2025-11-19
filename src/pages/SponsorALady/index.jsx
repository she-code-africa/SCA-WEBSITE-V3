import React, { useState } from "react";
import hero from "../../images/v2/herobg-v2-copy.jpg";
import hero2 from "../../images/v2/sponsor-hero.jpg";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import DonateComponent from "../../components/version-2/donate";
import TheChallenge from "../../components/version-2/donate/TheChallenge";
import OurImpact from "../../components/version-2/donate/OurImpact";
import { sponsorTestimonialCards } from "../../utils/v2";
import TestimonialSlide from "../../components/version-2/homepage/TestimonialSlide";
import DonateModal from "../../components/DonateModal";
import { motion } from "framer-motion";

const SponsorALady = () => {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState("");

  const toggleModal = (type) => {
    setType(type);
    setModal(!modal);
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

      <Header page={"donate"} />
      <DonateModal display={modal} type={type} toggleModal={toggleModal} />
      <main className="text-secondary-main-black w-full">
        <section className="w-full h-full bg-[#B70569] relative ">
          <motion.figure
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-full mix-blend-multiply"
          >
            <img
              src={hero}
              alt="Who We Are"
              className="object-cover w-full h-full"
            />
          </motion.figure>
          <div className="bg-[rgba(0,0,0,0.35)] min-h-screen pt-36 pb-20 lg:pt-[159px] lg:pb-[100px] flex items-center  ">
            <div className="w-[90%] mx-auto lg:max-w-[1256px] flex flex-col lg:justify-between lg:items-center lg:flex-row ">
              <motion.article
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-[1] w-full sm:max-w-[700px] lg:max-w-[592px] mx-auto lg:mx-0"
              >
                <h1 className="hero-title text-center lg:text-left lg:leading-[130px] text-white hero-text">
                  Sponsor a Tech Lady Today
                </h1>

                <p className="text-white description-text mt-3 text-center lg:text-left lg:max-w-[500px]">
                  Did you know that by donating $20 (~₦30,000), you’re helping
                  one woman take a step closer to owning a laptop?
                </p>
              </motion.article>
              <motion.section
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full max-w-[568px] mt-8 lg:mt-0 relative z-[1] mx-auto lg:mx-0"
              >
                <div className="bg-white rounded-xl w-full  overflow-hidden">
                  <motion.figure
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="w-full h-[183px]"
                  >
                    <img
                      src={hero2}
                      alt="donate"
                      className="object-cover w-full h-full"
                    />
                  </motion.figure>

                  <article className="w-full mt-10 pb-20 lg:pb-[100px]">
                    <div className="w-[90%] sm:max-w-[378px] mx-auto">
                      <h3 className="text-primary-main-pink medium-header text-center">
                        How would you love to donate?
                      </h3>

                      <div className="mt-12 w-full items-center flex flex-col gap-4">
                        <button
                          title="Donate as an individual"
                          className="h-[55px] max-w-[175px] py-[18px] px-8 w-full hover:bg-[#5C0335] transition-colors duration-300 bg-primary-main-pink text-white button-text rounded-lg flex items-center justify-center"
                          onClick={() => toggleModal("individual")}
                        >
                          As an individual
                        </button>

                        <button
                          onClick={() => toggleModal("organisation")}
                          title="Donate as an organisation"
                          className="h-[55px] max-w-[196px] py-[18px] px-8 w-full hover:bg-[#5C0335] transition-colors duration-300 hover:border-[#5C0335] border border-primary-main-pink text-primary-main-pink button-text hover:text-white rounded-lg flex items-center justify-center"
                        >
                          As an organisation
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
                {/* 
                Work on this behind the scenes until it is perfect
                <DonateComponent /> */}
              </motion.section>
            </div>
          </div>
        </section>

        <TheChallenge />

        <OurImpact />

        <section className="w-full relative pt-14 pb-28 lg:pb-40  testmonialBg">
          <article className="w-[90%] mx-auto lg:max-w-[1256px] text-center">
            <h3 className="text-5xl lg:text-[64px] font-bold 2md:leading-[82px] text-primary-main-pink hero-text  w-full mx-auto">
              Our Queens’ Experiences
            </h3>

            <p className="text-center text-lg mt-2 font-medium">
              Behind every number is a girl whose life has been transformed
            </p>
          </article>

          <TestimonialSlide testimonialCards={sponsorTestimonialCards} />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default SponsorALady;
