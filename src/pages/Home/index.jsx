import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Section from "../../components/Section";
import ContactForm from "../../components/Contact";
import Text from "../../components/Text";

import PopUpModal from "../../components/PopUpModal";

import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import * as homecomponents from "../../components/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import whoweareimage from "../../images/who-are-we-img.svg";
import { whoWeAreTexts } from "../../utils";

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
      {/* <PopUpModal display={modal} closeModal={closeModal} /> */}
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
              across  Africa
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

        <section className="w-full mt-8">
          <div className="w-90 mx-auto">
            <homecomponents.PartnersLogoSlider />

            <section className=" w-full flex flex-col-reverse md:flex-col 2md:flex-row 2md:justify-between mt-[80px] md:mt-[110px] 2md:items-center gap-10">
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
        <div className="container mx-auto clear-both">
          <Text
            topic="Identify With Us"
            sub_topic="If you love a welcoming community of women in tech like we do, we're more than excited to take you in."
          />
          <div className="container mx-auto lg:my-20 py-5 px-4 md:px-6">
            <Section
              title="Growing Slack Community"
              content="Join over 10,000 Women in Tech across several African countries on our Slack community to network, stay updated, get help and grow in your career."
              imgClass="home_slack"
              className="order-last"
            >
              <a
                href="https://bit.ly/joinshecodeafrica"
                className="bg-primary-main-pink text-white px-10 lg:px-14 py-[15px] w-full rounded-lg transition-colors md:text-[18px]"
              >
                Join Us!
              </a>
            </Section>

            <Section
              title="Attend an Event"
              content="Participate in any of our online or offline events and initiatives inluding bootcamps, Fireside chats, webinars, Mentorship programs and several more!"
              imgClass="home_partner"
              className="sm:-order-1 md:text-right"
            >
              <a
                href="https://bit.ly/joinshecodeafrica"
                className="bg-primary-main-pink text-white px-10 lg:px-14 py-[15px] w-full rounded-lg transition-colors md:text-[18px]"
              >
                View Upcoming Events
              </a>
            </Section>

            <Section
              title="Be a Partner or Sponsor"
              content="Be a sponsor for our next event via a donation or Partner with our organisation to reach more women in tech across Africa"
              imgClass="home_partner"
              className="order-last"
            >
              <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
                <a
                  href="https://bit.ly/joinshecodeafrica"
                  className="shecode_button2"
                >
                  Partner with Us
                </a>
                <a
                  href="https://bit.ly/joinshecodeafrica"
                  className="shecode_button"
                >
                  Sponsor Us
                </a>
              </div>
            </Section>

            <Section
              title="Follow Us on Social Media"
              content="Stay updated with us and be the first to know about all our activities and events, by following our social media pages"
              imgClass="home_social"
              className="sm:-order-1 md:text-right"
            >
              <a
                href="https://bit.ly/joinshecodeafrica"
                className="bg-primary-main-pink text-white px-10 lg:px-14 py-[15px] w-full rounded-lg transition-colors md:text-[18px]"
              >
                View Upcoming Events
              </a>
            </Section>
          </div>
        </div>
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
