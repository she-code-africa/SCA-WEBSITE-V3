import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Section from "../../components/Section";
import ContactForm from "../../components/Contact";
import vision from "../../images/vision.png";
import mission from "../../images/mission.png";
import value from "../../images/core-values.png";
import Text from "../../components/Text";
import { TestimonialCarousel } from "../../components/Carousel";
import PopUpModal from "../../components/PopUpModal";
import { testimonials } from "../../utils";
import Footer from "../../components/Footer";
import homeBanner from "../../images/home-hero.png";
import { Link } from "react-router-dom";
import * as homecomponents from "../../components/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [modal, setModal] = useState(true);
  const closeModal = () => {
    setModal(false);
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
      <PopUpModal display={modal} closeModal={closeModal} />
      <Header page={"home"} />
      <main>
        <section className=" min-h-screen bg-hero-bg-gradient text-secondary-main-black">
          <div className="w-90 mx-auto py-5 min-h-[600px]  flex flex-col justify-center">
            <h1 className="hero-heading capitalize  font-bold text-[48px] md:text-[56px] 2md:text-[60px] text-center leading-[150%] mx-auto">
              empowering women in tech across{" "}
              <span className="h1-hero-sub-text">africa</span>
            </h1>

            <p className="m-0 mt-8 text-center max-w-[560px] text-base md:text-lg mx-auto leading-[1.8]">
              She Code Africa celebrates and empowers women in Tech across
              Africa She Code Africa celebrates...
            </p>

            <div className="btns-wrapper mt-8">
              <Link
                to="https://bit.ly/joinshecodeafrica"
                className="pl-[32px] pr-[40px] py-[15px] bg-primary-main-pink  text-white text-sm font-medium rounded-lg hover:text-primary-main-pink hover:bg-white border border-primary-main-pink transition duration-300"
              >
                Become a Member&nbsp;
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>

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

        <section className="mx-auto p-4 py-7 md:mt-20 md:mb-36 about_section">
          <div className="flex flex-col items-center px-8 mb-4">
            <h5 className="text-4xl font-semibold mb-5">About Us</h5>
            <p className="text-2xl text-center md:w-3/4">
              We are a non-profit organisation focused on celebrating and
              empowering young girls and women in tech across Africa.
            </p>
          </div>
          <div className="flex justify-center about_values p-5 md:text-left text-center">
            <div>
              <img src={vision} alt="Core Values" className="icon" />
              <h4>Vision</h4>
              <p>
                An Africa where women are equally represented across all career
                roles in Technology.
              </p>
            </div>
            <div>
              <img src={mission} alt="Core Values" className="icon" />
              <h4>Mission</h4>
              <p>
                To build a community that embodies technical growth, networking,
                mentorship and visibility amongst all level career roles in
                Technology.
              </p>
            </div>
            <div>
              <img src={mission} alt="Core Values" className="icon" />
              <h4>Core Values</h4>
              <p>
                Team work, Community, Technical growth, Leadership, Visibility.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full bg-primary-main-pink py-9 md:py-20">
          <homecomponents.OurReach />
        </section>

        <div className="container mx-auto px-2 clear-both text-center">
          {/* <TestimonialCarousel
            title="What People Say"
            testimonials={testimonials}
          /> */}
          <div>
            <div className="my-12 md:my-32">
              <h4 className="text-3xl md:text-4xl text-center font-semibold">
                What People are saying
              </h4>
            </div>
            <div className="bg-[#FFF7FC] flex flex-col md:flex-row gap-5 max-w-7xl my-0 mx-auto justify-between p-6 min-h-[450px] items-center">
              <div>
                <img
                  className="rounded-[50%] h-[200px] w-[200px] md:h-[250px] md:w-[250px] object-cover"
                  src="https://imageio.forbes.com/specials-images/imageserve/5f6a779460548326baf6d730/960x0.jpg?format=jpg&width=960"
                  alt=""
                />
              </div>
              <div className="text-left md:w-2/3 border-r-8 md:m-4 border-r-[#B70569]">
                <p className="md:text-2xl md:w-3/4">
                  She Code Africa Mentor-ship Program was a huge part of my
                  growth as a woman in tech. I am grateful to my mentor who
                  stressed on understanding the basics of programming explaining
                  the concepts in beginner friendly terms, my fellow mentees who
                  I learnt so much from, to the founder fr this great initiative
                  and to the team members making this possible. Thanks!
                </p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
