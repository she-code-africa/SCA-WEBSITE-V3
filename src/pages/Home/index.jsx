import React, { useState } from "react";
import Header from "../../components/Header";
import Section from "../../components/Section";
import ContactForm from "../../components/Contact";
import AboutSection from "../../components/AboutSection";
import Text from "../../components/Text";
import { Carousel, TestimonialCarousel } from "../../components/Carousel";
import PopUpModal from "../../components/PopUpModal";
import { testimonials, aboutus } from "../../utils";
import Footer from "../../components/Footer";
import homeBanner from "../../images/home-hero.png";

const Home = () => {
  const [modal, setModal] = useState(true);
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <PopUpModal display={modal} closeModal={closeModal} />
      <Header page={"home"} />
      <main>
        <section
          className="h-[550px] bg-no-repeat bg-center bg-cover flex justify-center items-center text-white"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(33, 13, 21, 0.1), rgba(33, 13, 21, 0.1)), url(${homeBanner})`,
          }}
        >
          <div className="container px-4 mx-auto sm:px-6 md:px-10 lg:px-16">
            <div>
              <div className="sm:w-2/3 sm:float-left">
                <div className="__shecodeheader_text">
                  <div className="md:text-[65px] font-bold">
                    <h1>She Code Africa!</h1>
                  </div>
                  <div>
                    <h4 className="text-[30px] tracking-[0.0475em] font-normal">
                      ...celebrating and empowering Women in Tech across Africa
                    </h4>
                  </div>
                  <div className="mt-20 text-4xl font-medium">
                    <a
                      href="https://bit.ly/joinshecodeafrica"
                      className="bg-primary-main-pink text-white px-14 py-[15px] w-full rounded-lg transition-colors"
                    >
                      Join Our Community
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutSection />
        <Carousel title="Our Reach So Far" content={aboutus} />
        <div className="container mx-auto px-4 lg:px-12 clear-both">
          <Text
            topic="Identify With Us"
            sub_topic="If you love a welcoming community of women in tech like we do, we're more than excited to take you in."
          />
          <Section
            title="Growing Slack Community"
            content="Join over 10,000 Women in Tech across several African countries on our Slack community to network, stay updated, get help and grow in your career."
            imgClass="home_side_identify"
            className="order-last"
          >
            <a
              href="https://bit.ly/joinshecodeafrica"
              className="shecode_button"
            >
              Join Us
            </a>
          </Section>

          <Section
            title="Attend an Event"
            content="Participate in any of our online or offline events and initiatives inluding bootcamps, Fireside chats, webinars, Mentorship programs and several more!"
            imgClass="home_side_event justify-self-end mt-12 md:mt-0"
            className="sm:-order-1 justify-self-center"
          >
            <a
              href="https://bit.ly/joinshecodeafrica"
              className="shecode_button sm:p-3 md:p-5"
            >
              View Upcoming Events
            </a>
          </Section>

          <Section
            title="Be a Partner or Sponsor"
            content="Be a sponsor for our next event via a donation or Partner with our organisation to reach more women in tech across Africa"
            imgClass="home_side_partner"
            className="order-last"
          >
            <div className="flex flex-col lg:flex-row">
              <a
                href="https://bit.ly/joinshecodeafrica"
                className="shecode_button"
              >
                Be A Partner
              </a>
              <a
                href="https://bit.ly/joinshecodeafrica"
                className="shecode_button2 lg:ml-2 "
              >
                Be a Donor
              </a>
            </div>
          </Section>

          <Section
            title="Follow Us on Social Media"
            content="Stay updated with us and be the first to know about all our activities and events, by following our social media pages"
            imgClass="home_side_follow justify-self-end mt-12 sm:mt-0"
            className="sm:-order-1 justify-self-center"
          >
            <a
              href="https://bit.ly/joinshecodeafrica"
              className="shecode_button sm:p-3 md:p-5"
            >
              View Upcoming Events
            </a>
          </Section>
        </div>
        <div className="container mx-auto px-4 clear-both">
          <div className="container">
            <TestimonialCarousel
              title="What People Say"
              testimonials={testimonials}
            />
          </div>
          <div className="clear-both">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
