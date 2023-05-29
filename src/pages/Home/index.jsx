import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import adaRect from "../../images/ada-rect.jpg";
import shape from "../../images/shape.png";
import PopUpModal from "../../components/PopUpModal";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import * as homecomponents from "../../components/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { apiConstants, homepageOurCommunityCards } from "../../utils/index";
import BecomeAmemberButton from "../../components/Button/BecomeAmemberButton";
import whoweareimage from "../../images/homepage/who-are-we.png";
import { whoWeAreTexts } from "../../utils";
import gallery1 from "../../images/homepage/gallery-sca.png";
import gallery2 from "../../images/homepage/gallery-two.png";
import gallery3 from "../../images/homepage/gallery-3.png";
import hireTalent from "../../images/homepage/hire-talent.png";
import { useQuery } from "react-query";
import { getPartners } from "../../services";
import * as components from "../../components";

const Home = () => {
  const [modal, setModal] = useState(true);
  const closeModal = () => {
    setModal(false);
  };
  const { isLoading, error, data } = useQuery(
    apiConstants.partners,
    getPartners
  );

  if (error) {
    return <components.Error />;
  }

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
      <PopUpModal display={modal} closeModal={closeModal} />
      <Header page={"home"} />

      <main className=" text-secondary-main-black">
        <section className=" min-h-screen bg-hero-bg-gradient">
          <div className="w-90 mx-auto py-8 min-h-[600px]  flex flex-col justify-center">
            <h1 className="hero-heading capitalize  font-bold text-[48px] md:text-[56px] 2md:text-[64px] text-center leading-[150%] mx-auto">
              empowering women in tech across{" "}
              <span className="h1-hero-sub-text">africa</span>
            </h1>

            <p className="m-0 mt-8 text-center max-w-[900px] text-base md:text-lg mx-auto leading-[1.8]">
              She Code Africa is a registered non-profit organization dedicated
              to empowering and celebrating girls and women in technology
              across Africa
            </p>

            <div className="btns-wrapper mt-8">
              <BecomeAmemberButton
                bg="bg-primary-main-pink"
                bgHover={"bg-white"}
                color="text-white"
                colorHover="text-primary-main-pink"
                border="border-primary-main-pink"
                url="https://bit.ly/joinshecodeafrica"
              />
              <Link
                to="/donate-partner"
                className=" bg-white text-sm font-medium rounded-lg border border-primary-main-pink py-[14px] pl-[32px] pr-[38px] transition duration-300 hover:text-white hover:bg-primary-main-pink donate"
              >
                Donate&nbsp;
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
          </div>

          <homecomponents.Carousel />
        </section>

        <section className="w-full mt-8">
          <div className="w-[90%] lg:w-10/12  mx-auto">
            {isLoading ? (
              <components.Loading />
            ) : (
              <homecomponents.PartnersLogoSlider partnersData={data} />
            )}

            <section className=" w-full flex flex-col-reverse md:flex-col 2md:flex-row 2md:justify-between mt-[80px] md:mt-[110px] 2md:items-center gap-10 mx-auto">
              <div className="text-wrapper py-5 w-full 2md:max-w-[400px]">
                <div className="who-are-we-caption w-full mb-5 text-center 2md:text-left">
                  <h2 className="capitalize text-3xl 2md:text-[40px] font-bold">
                    who we are
                  </h2>

                  <div className="w-[70px] 2md:w-[110px] h-[2px] bg-primary-main-pink mx-auto mt-1 2md:mt-3"></div>
                </div>

                {whoWeAreTexts.map((content, index) => {
                  return (
                    <article className="w-full mt-8 2md:mt-[40px]" key={index}>
                      <h3 className="font-semibold text-center text-2xl 2md:text-[32px] 2md:text-left capitalize">
                        {content.heading}
                      </h3>

                      <p className="text-base leading-[2] mt-2 2md:mt-4 text-center 2md:text-left text-primary-dark-brown w-[90%] mx-auto 2md:mx-0">
                        {content.text}
                      </p>
                    </article>
                  );
                })}
              </div>
              <figure className="m-0 p-0 py-5 max-w-[600px] h-[500px] mx-auto 2md:mx-0">
                <img
                  src={whoweareimage}
                  alt="who are we pics"
                  className="w-full h-full object-cover"
                />
              </figure>
            </section>
          </div>
        </section>

        <section className="w-full bg-primary-main-pink py-20 md:pt-20 md:py-0 md:pb-[114px] mt-16 md:mt-[130px]">
          <homecomponents.OurReach />
        </section>

        <section className="w-full py-5 mt-[80px] md:mt-[150px]">
          <div className="w-90 mx-auto">
            <homecomponents.Text
              heading="What Our Community is About"
              subheading="An Africa where women are equally represented across all career roles in
        Technology."
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 2md:gap-14 md:max-w-[700px] 2md:max-w-[800px] mx-auto">
              {homepageOurCommunityCards.map(
                ({ heading, textContent, bgImage }, index) => {
                  return (
                    <homecomponents.Cards
                      heading={heading}
                      textContent={textContent}
                      key={index}
                      cardBgImg={bgImage}
                    />
                  );
                }
              )}
            </div>
          </div>
        </section>

        <section className="w-full mt-[67px] md:mt-[125px]">
          <homecomponents.Testimonials />
        </section>

        <section className="w-full mt-[70px] md:mt-[150px]">
          <div className="w-90 mx-auto">
            <homecomponents.Text
              heading="Gallery"
              subheading="Image of some of our events."
            />

            <div className="w-full 2md:max-w-[1000px]  mx-auto flex flex-col md:justify-between md:flex-row gap-8 mt-12">
              <figure className="m-0 p-0 w-full max-w-[400px] md:max-w-full md:w-[500px] h-[450px] md:h-[600px] overflow-hidden rounded-3xl mx-auto md:mx-0">
                <img
                  src={gallery1}
                  alt="gallery-pic-1"
                  className="w-full h-full"
                />
              </figure>

              <div className="flex w-full max-w-[400px] 2md:max-w-[480px] flex-col gap-8 md:gap-4 mx-auto">
                <figure className="m-0 p-0 w-full h-[400px] md:h-[360px] overflow-hidden rounded-3xl  mx-auto md:mx-0">
                  <img
                    src={gallery2}
                    alt="gallery-pic-1"
                    className="w-full h-full object-cover"
                  />
                </figure>

                <figure className="m-0 p-0 w-full h-[400px] md:h-[220px] overflow-hidden rounded-3xl  mx-auto md:mx-0">
                  <img
                    src={gallery3}
                    alt="gallery-pic-1"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            </div>

            <div className="flex justify-center md:justify-end w-full mt-7 2md:max-w-[1000px] mx-auto">
              <Link
                to="#"
                className="capitalize text-base md:text-lg text-primary-main-pink"
              >
                view more pictures <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full bg-hireTalent mt-[150px] md:mt-[200px]  py-16">
          <div className="w-full md:w-[90%] mx-auto xl:w-full xl:px-[200px] py-[120px]">
            <div className="relative hire-us bg-white w-[90%] md:w-full grid grid-cols-1 md:grid-cols-2 md:max-w-[1000px] mx-auto px-8 md:px-[60px] md:py-[40px] py-9 gap-10">
              <article className="w-full py-5 flex flex-col justify-center">
                <h3
                  className="text-2xl md:text-4xl font-bold"
                  style={{ lineHeight: "48px" }}
                >
                  Ready to fill your vacant position?
                </h3>

                <p
                  className="mt-4 w-full max-w-[380px]"
                  style={{ lineHeight: "22px" }}
                >
                  Explore diverse tech talents of your choice with genuine skill
                  sets and good work place ethics.
                </p>

                <div className="flex mt-10">
                  <BecomeAmemberButton
                    bg="bg-primary-main-pink"
                    bgHover="bg-white"
                    color="text-white"
                    colorHover="text-primary-main-pink"
                    border="border-primary-main-pink"
                    title="Hire Our Talent"
                  />
                </div>
              </article>
              <div className="w-full py-5 md:justify-end hidden md:flex">
                <figure className="m-0 p-0 w-full mx-auto md:mx-0 max-w-[348px] h-[370px]">
                  <img
                    src={hireTalent}
                    alt="hire talent"
                    className="object-cover w-full h-full"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black text-white grid md:grid-cols-3 mb-14 relative">
          <img
            src={shape}
            alt="Shape"
            className="absolute w-1/12 translate-x-[50%]"
          />
          <div className="md:col-span-2 md:w-7/12 mx-auto grid place-content-center px-5 md:px-0 py-12 md:py-5 lg:py-0">
            <h5 className="lg:text-5xl lg:leading-[58.18px] text-3xl leading-normal font-semibold">
              Your next chapter, made possible by mentoring
            </h5>
            <p className="lg:text-2xl lg:leading-[44px] text-lg lg:my-5 md:my-2 my-5">
              Build confidence as a leader, grow your network, and define your
              legacy.
            </p>
            <div className="md:my-5 my-10">
              <Link
                to="/mentors"
                className="capitalize bg-primary-main-pink text-white py-[14px] px-[32px] rounded-lg"
              >
                Become a member
              </Link>
            </div>
          </div>
          <div className=" place-self-end">
            <img
              src={adaRect}
              alt="Ada on stage"
              className="lg:h-[550px] xl:object-fill lg:object-contain object-contain"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
