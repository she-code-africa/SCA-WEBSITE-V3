import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import communityImg from "../../images/v2/slack.png";
import { whatsinStoreForYou } from "../../utils";
import { Link } from "react-router-dom";
import hero from "../../images/v2/hero-img-community-2.jpg";
import CustomButtonComponent from "../../components/version-2/shared-components/buttons/index.";
import { motion } from "framer-motion";
import { bgVariant, heroFadeUp } from "../../lib/motionVariants";

const Community = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const _imgRef = imgRef.current;

    _imgRef.addEventListener(`load`, () => {
      if (_imgRef.complete) {
        setIsLoaded(true);
      }
    });
    return () => {
      _imgRef.removeEventListener("load", () => {});
    };
  }, [imgRef]);

  const cardColors = [
    { border: "border-[#5C0335]", text: "text-[#5C0335]" },
    { border: "border-[#B70569]", text: "text-[#B70569]" },
    { border: "border-[#B70569]", text: "text-[#B70569]" },
    { border: "border-[#5C0335]", text: "text-[#5C0335]" },
    { border: "border-[#5C0335]", text: "text-[#5C0335]" },
    { border: "border-[#B70569]", text: "text-[#B70569]" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>She Code Africa Community</title>
        <meta
          name="description"
          content="Be a part of a community that celebrates diversity and empowers women to thrive in tech."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="She Code Africa Community" />
        <meta
          property="og:description"
          content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem"
        />
        <meta name="twitter:title" content="She Code Africa Community" />
        <meta
          name="twitter:description"
          content="You might want to consider starting a SheCodeAfrica Chapter in your campus or city. Not an expert in tech yet? Not a problem"
        />
      </Helmet>
      <Header page="community" />

      <main className="w-full text-secondary-main-black">
        <section className="w-full h-full bg-[#B70569] relative ">
          <motion.figure
            variants={bgVariant}
            initial="hidden"
            animate="visible"
            className="absolute top-0 left-0 w-full h-full mix-blend-multiply"
          >
            <img
              src={hero}
              alt="Who We Are"
              className="object-cover w-full h-full"
            />
          </motion.figure>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[rgba(0,0,0,0.35)] min-h-[130vh] pt-16 lg:pt-32 pb-24 flex justify-center items-center "
          >
            <article className="relative z-[1] w-[90%] mx-auto text-center">
              <motion.h1
                variants={heroFadeUp}
                initial="hidden"
                animate={() => heroFadeUp.visible(0.3)}
                className="hero-title lg:leading-[130px] text-white hero-text lg:w-full lg:max-w-[720px] hero-text text-center mx-auto"
              >
                Where SCA Queens Hangout
              </motion.h1>

              <motion.p
                variants={heroFadeUp}
                initial="hidden"
                animate={() => heroFadeUp.visible(0.5)}
                className="text-white mt-7 description-text lg:w-full lg:max-w-[900px] mx-auto text-center"
              >
                Be part of a community bridging the gender gap in tech, a space
                ran by and for African women. Connect with like-minded
                individuals, gain access to resources and events, and help shape
                the future of the industry.
              </motion.p>

              <motion.div
                variants={heroFadeUp}
                initial="hidden"
                animate={() => heroFadeUp.visible(0.7)}
                className="w-full flex flex-col max-w-[206px] mx-auto sm:flex-row justify-between items-center gap-3 mt-8"
              >
                <CustomButtonComponent
                  label="Become a member"
                  customColor="text-white"
                  bgHover="hover:bg-[#5C0335] hover:border-[#5C0335] bg-[#B70569] duration-300 border-[#B70569] rounded-lg transition-all duration-300"
                  url="https://forms.gle/aFe2LrkZxZJtKKve7"
                  isGallery={true}
                />
              </motion.div>
            </article>
          </motion.div>
        </section>

        <div className="w-full community-bg pb-[100px]">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-90 mx-auto flex justify-center mt-[-130px]"
          >
            <figure className="m-0 p-0 block w-full max-w-[1256px] mx-auto rounded-2xl overflow-hidden h-[690px]">
              <img
                src={communityImg}
                ref={imgRef}
                alt="community slack channel"
                className={`animate__animated w-full h-full object-cover ${
                  isLoaded
                    ? "animate__fadeIn opacity-100"
                    : "opacity-0 absolute"
                } blur-0`}
                loading="lazy"
              />
            </figure>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-[101px]"
          >
            <h2 className="text-center section-header 2md:leading-[82px] hero-text text-primary-main-pink">
              What’s in store for you
            </h2>

            <div className="w-90 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 max-w-[800px] gap-7 sm:gap-10 place-items-center-center">
              {whatsinStoreForYou.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  transition={{ delay: index * 0.2 }}
                  className={`border-2 ${
                    cardColors[index].border || "border-[#5C0335]"
                  } flex justify-center items-center min-h-[90px] sm:min-h-[120px] px-6 ${
                    item.bg
                  } rounded-[20px] bg-transparent w-full max-w-[445px] mx-auto`}
                >
                  <p
                    className={`description-text text-center ${
                      cardColors[index].text || "text-[#5C0335]"
                    }`}
                  >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-[90%] my-10 max-w-[548px] mx-auto"
          >
            <h3 className="text-center description-text">
              Join the community to access your local chapter.
            </h3>
            <div className="mt-5 w-full flex flex-col sm:flex-row gap-7 sm:max-w-[469px] mx-auto justify-center items-center">
              <div className="flex items-center justify-center w-full sm:max-w-[207px] mx-auto">
                <a
                  className="bg-transparent px-8 flex items-center justify-center w-full py-[14px] mt-3 rounded-lg text-primary-main-pink button-text hover:border-[#FF8FCE] transition-all font-normal border border-primary-main-pink"
                  href="https://forms.gle/aFe2LrkZxZJtKKve7"
                  rel="noreferrer"
                >
                  Join our community
                </a>
              </div>

              <div className="flex items-center justify-center w-full sm:max-w-[232px] mx-auto">
                <Link
                  className="bg-primary-main-pink px-8 flex items-center justify-center w-full py-[14px] mt-3 rounded-lg text-white button-text hover:bg-[#5C0335] hover:text-white transition-all font-normal"
                  to="/chapters"
                  rel="noreferrer"
                >
                  Join a chapter near you
                </Link>
              </div>
            </div>
          </motion.section>
        </div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-primary-main-pink py-[100px]"
        >
          <div className="w-90 max-w-[686px] mx-auto">
            <div className="w-full max-w-[587px] mx-auto">
              <h2 className="text-center section-header 2md:leading-[82px] hero-text text-white">
                Inside She Code Africa
              </h2>
              <p className="my-7 description-text text-center text-white">
                Your inside look at our journey, program highlights, major wins,
                and thought pieces from women driving change across Africa.
              </p>
              <div className="w-full flex justify-center items-center flex-col sm:flex-row gap-8">
                <div className="flex items-center justify-center gap-8 w-full sm:max-w-[201px]">
                  <a
                    className="bg-white hover:bg-[#5C0335] hover:text-white transition-colors duration-300 px-8 py-[14px] w-full flex justify-center items-center rounded-lg text-primary-main-pink button-text text-center"
                    href="https://medium.com/shecodeafrica"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Check out our blog
                  </a>
                </div>

                <div className="flex items-center justify-center gap-8 w-full sm:max-w-[226px]">
                  <a
                    className="bg-transparent border border-white bg-primary-main-pink hover:bg-[#5C0335] transition-colors duration-300 px-8 py-[14px] w-full flex justify-center items-center rounded-lg text-white button-text text-center"
                    href="https://sca-editorial.notion.site/SheCodeAfrica-Guest-Writing-Program-b94f2b9d70b347569c2beb3474180301"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Become a contributor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="w-full bg-[#FFF88F] py-[100px]"
        >
          <div className="w-90 mx-auto max-w-[686px]">
            <h2 className="text-center section-header 2md:leading-[82px] hero-text text-primary-main-pink">
              Ready to join Africa's <span className="uppercase">largest</span>{" "}
              female tech community?
            </h2>

            <div className="flex items-center justify-center mt-5 sm:mt-8 max-w-[208px] mx-auto">
              <a
                className="bg-primary-main-pink hover:bg-[#5C0335] transition-colors duration-300 px-8 py-[14px] h-[55px] flex items-center justify-center w-full mt-3 rounded-lg text-white button-text"
                href="https://forms.gle/aFe2LrkZxZJtKKve7"
                target="_blank"
                rel="noreferrer"
              >
                Join now
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
};

export default Community;
